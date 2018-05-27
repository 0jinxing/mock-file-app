import { Injectable } from '@angular/core';
import { FileControlBlock } from './file-control-block.model';
import { Environment } from './environment.config';
import { BlockingProxy } from 'blocking-proxy';

@Injectable()
export class FileManagerService {
    root: FileControlBlock; // 根目录
    current: FileControlBlock;  // 当前目录

    /**
     * 假定一个盘块占用 4KB
     * 一个FCB占用64B
     * 一个盘块可以存放64个FCB
     */


    // 空闲盘块栈(成组链法)
    // 因为数值本身可以进行pop和push操作,所以就不用存一个栈顶指针了
    freeDiskBlockTableStack: Array<Array<number>>;
    memoryFreeDiskBlockTable: Array<number>;  // 放在内存中的空闲盘块表,是上面空闲盘块栈数组中的一项
    freeDiskBlockTotal: number; // 可用的盘块数

    constructor() {
        this.freeDiskBlockTableStack = new Array<Array<number>>();
        this.freeDiskBlockTotal = 0;
        // 根目录初始化
        this.root = new FileControlBlock();
        this.root.name = '/';
        this.root.attribute = 32;
        this.root.size = 0;
        this.root.blockCount = 0;
        this.root.createTime = new Date();
        this.root.updateTime = this.root.createTime;
        this.current = this.root;

        // 盘块初始化
        for (let i = 0; i < Environment.diskBlockTotal; i++) {
            this.addFreeDiscBlock(i);
        }
    }

    // 根据路径获取文件
    getFile(path: string): FileControlBlock {
        path = path.trim();
        let searchDir: FileControlBlock;
        let dirSearchSeq = path.split('/');
        let dirSearchInd = 0;


        if (/\/\S*/.test(path)) {

            searchDir = this.root;
        }
        else {
            searchDir = this.current;
        }
        while (dirSearchInd < dirSearchSeq.length) {
            let isWell = false; // 是否找到下一级目录
            let curSearch = dirSearchSeq[dirSearchInd];

            if (!curSearch || curSearch === '.') {
                isWell = true;
            }
            else if (curSearch === "..") {
                if (searchDir.parent) {
                    searchDir = searchDir.parent;
                    isWell = true;
                }
            }
            else {
                let nextSearchDir: FileControlBlock;
                searchDir.sub.forEach((dir) => {
                    if (dir.name === curSearch) {
                        nextSearchDir = dir;
                        isWell = true;
                        return;
                    }
                })
                searchDir = nextSearchDir;
            }
            if (isWell) dirSearchInd++;
            else return null;
        }
        return searchDir;
    }

    // 根据路径列出文件
    listFile(path?: string): Array<FileControlBlock> {
        if (path) {
            return this.getFile(path).sub;
        }
        return this.current.sub;
    }

    /**
     * 新增文件
     * @param file 新增的文件或文件名
     * @param path 路径
     * @param attribute 属性
     * @param size 文件大小
     * @returns 1: 成功 -1: 磁盘空间不足导致的失败 -2: 已用同名的文件导致的失败
     */
    addFile(file: FileControlBlock | string, path: string, attribute?: number, size?: number): number {
        let blockCount = Math.ceil(size / Environment.diskBlockSize);
        if (blockCount > this.freeDiskBlockTotal) {
            return -1;
        }
        if ((typeof file).toLocaleLowerCase() === "string") {
            let fileName = file as string;
            let newFile = new FileControlBlock();
            newFile.name = fileName;
            newFile.attribute = attribute && 32;
            newFile.size = size && 0;
            newFile.blockCount = blockCount;
            newFile.createTime = new Date();
            newFile.updateTime = newFile.createTime;

            let isRepeat = false; // 是否重名
            // TODO: 可能有问题

            this.listFile(path).forEach((f) => {
                if (f.name === newFile.name) {
                    isRepeat = true;
                    return;
                }
            });
            if (isRepeat) return -2;
            for (let i = 0; i < newFile.blockCount; i++) {
                // 直接地址
                var block = this.getFreeDiscBlock();
                if (i < newFile.iAddr.length) {
                    newFile.iAddr[i] = block;
                }
                // 一级间址
                else if (i - newFile.iAddr.length < Environment.diskBlockSize / 8) {
                    let signalInd = i - newFile.iAddr.length;
                    newFile.signalIndirect[signalInd] = block;
                }
                // 二级间址
                // TODO: 可能有问题
                else if (i - newFile.iAddr.length - Environment.diskBlockSize / 8 < Math.pow(Environment.diskBlockSize / 8, 2)) {
                    let doubleInd = i - newFile.iAddr.length - Environment.diskBlockSize / 8;
                    let tableInd = Math.floor(doubleInd / (Environment.diskBlockSize / 8));
                    let ind = doubleInd % (Environment.diskBlockSize / 8);
                    if (!newFile.doubleIndirect[tableInd]) {
                        newFile.doubleIndirect[tableInd] = new Array();
                    }
                    newFile.doubleIndirect[tableInd][ind] = block;
                }
                // 三级间址
                // TODO: 可能有问题
                else if (i - newFile.iAddr.length - Environment.diskBlockSize / 8 - Math.pow(Environment.diskBlockSize / 8, 2) < Math.pow(Environment.diskBlockSize / 8, 3)) {
                    let tripleInd = i - newFile.iAddr.length - Environment.diskBlockSize / 8 - Math.pow(Environment.diskBlockSize / 8, 2);
                    let firstTableInd = Math.floor(tripleInd / Math.pow(Environment.diskBlockSize / 8, 2));
                    let secondTableInd = Math.floor(tripleInd / Environment.diskBlockSize / 8) % (Environment.diskBlockSize / 8);
                    let ind = tripleInd % (Environment.diskBlockSize / 8);
                    if (!newFile.tripleIndirect[firstTableInd]) {
                        newFile.tripleIndirect[firstTableInd] = new Array();
                    }
                    if (!newFile.tripleIndirect[firstTableInd][secondTableInd]) {
                        newFile.tripleIndirect[firstTableInd][secondTableInd] = new Array();
                    }
                    newFile.tripleIndirect[firstTableInd][secondTableInd][ind] = block;
                }
            }
            this.addFile(newFile, path);
        }
        else {
            file = file as FileControlBlock;
            let parent = this.getFile(path);
            file.parent = parent;
            parent.sub.push(file);
        }
        return 1;
    }

    // 根据路径删除文件
    removeFile(path: string) {
        let file = this.getFile(path);

        // 文件夹递归删除文件夹里面所有的文件
        if (file.attribute === 32 && !!file.sub) {
            while(file.sub&&file.sub.length>0) {
                this.removeFile(file.sub[0].path);
            }
            file.parent && file.parent.sub && file.parent.sub.splice(file.parent.sub.indexOf(file), 1);
        }
        else {
            /**
             * 删除文件
             * 1. 回收磁盘空间
             * 2. 修改目录表
             */
            // 磁盘空间回收
            file.iAddr.forEach((block) => {
                if (block != null && block != undefined) {
                    this.addFreeDiscBlock(block);
                }
            });
            !!file.signalIndirect && file.signalIndirect.forEach((block) => {
                if (block != null && block != undefined) {
                    this.addFreeDiscBlock(block);
                }
            });
            !!file.doubleIndirect && file.doubleIndirect.forEach((bt) => {
                bt.forEach((block) => {
                    if (block != null && block != undefined) {
                        this.addFreeDiscBlock(block);
                    }
                });
            });
            !!file.tripleIndirect && file.tripleIndirect.forEach((btt) => {
                btt.forEach((bt) => {
                    bt.forEach((block) => {
                        if (block != null && block != undefined) {
                            this.addFreeDiscBlock(block);
                        }
                    });
                });
            });
            // 修改目录表
            let parent = file.parent;
            !!parent && parent.sub.splice(parent.sub.indexOf(file), 1);
        }
    }

    // 获得(分配)一个空闲的盘块号
    getFreeDiscBlock(): number {
        if (!this.memoryFreeDiskBlockTable || !this.memoryFreeDiskBlockTable.length) {
            this.memoryFreeDiskBlockTable = this.freeDiskBlockTableStack.pop();
        }
        if (this.memoryFreeDiskBlockTable) {
            let block = this.memoryFreeDiskBlockTable.pop();
            if (block != null && block != undefined) {
                this.freeDiskBlockTotal--;
                return block;
            }
        }
    }

    // 增加(回收)一个空闲的盘块号
    addFreeDiscBlock(blockInd: number) {
        if (!this.memoryFreeDiskBlockTable) {
            this.memoryFreeDiskBlockTable = new Array<number>();
            this.memoryFreeDiskBlockTable.push(blockInd);
        }
        else if (this.memoryFreeDiskBlockTable.length >= Environment.maxFreeDiskBlockTableItemTotal) {
            this.freeDiskBlockTableStack.push(this.memoryFreeDiskBlockTable);
            let newFreeDiscBlockTable = new Array<number>();
            newFreeDiscBlockTable.push(blockInd);
            this.memoryFreeDiskBlockTable = newFreeDiscBlockTable;
        }
        else {
            this.memoryFreeDiskBlockTable.push(blockInd);
        }
        this.freeDiskBlockTotal++;
    }
}
