import { Component, OnInit } from '@angular/core';
import { FileControlBlock } from '../file-control-block.model';
import { FileManagerService } from '../file-manager.service';
import { Environment } from '../environment.config';

@Component({
    selector: 'app-explorer',
    templateUrl: './explorer.component.html',
    styleUrls: ['./explorer.component.css']
})
export class ExplorerComponent {

    // 是否打开新建文件窗口
    isOpenAddFileDialog: boolean;
    isOpenAddFolderDialog: boolean;
    hasMsg: boolean;
    msg: string;
    selectFile: FileControlBlock;

    constructor(public fileService: FileManagerService) {
        this.isOpenAddFileDialog = false;
        this.isOpenAddFolderDialog = false;
        this.hasMsg = false;

        // 测试用
        this.fileService.addFile("操作系统作业", "/", 32, 0);
        this.fileService.addFile("课程设计.zip", "/操作系统作业", 0, 1024*100);
        this.fileService.addFile("备份文件.rar", "/", 0, 1024*1024);
        this.fileService.addFile("复习资料", "/", 32, 0);
    }

    onSelectFile(file: FileControlBlock) {
        this.selectFile = file;
    }

    openAddFileDialog() {
        this.isOpenAddFileDialog = true;
    }

    closeAddFileDialog() {
        this.isOpenAddFileDialog = false;
    }

    openAddFolderDialog() {
        this.isOpenAddFolderDialog = true;
    }

    closeAddFolderDialog() {
        this.isOpenAddFolderDialog = false;
    }

    createFile(fileName: string, fileSize: number, attribute?: number) {
        let path = "/";
        if (this.selectFile && this.selectFile.attribute == 32) path = this.selectFile.path;
        else if (this.selectFile) path = this.selectFile.parent.path;
        let r = this.fileService.addFile(fileName, path, attribute || 0, fileSize);
        this.isOpenAddFileDialog = false;
        this.isOpenAddFolderDialog = false;

        r == 1 && this.toast("创建成功");
        r == -1 && this.toast("磁盘空间不足,创建失败");
        r == -2 && this.toast("文件已存在");
    }

    deleteSelectFile() {
        this.fileService.removeFile(this.selectFile.path);
        if (this.selectFile) {
            this.toast("删除成功");
        }
        this.selectFile = null;
    }

    format() {
        this.fileService.removeFile("/");
        this.selectFile = null;
        this.toast("格式化成功");
    }

    toast(msg: string, t?: number) {
        t = !!t ? t : 1000;
        this.msg = msg;
        this.hasMsg = true;
        setTimeout(() => {
            this.hasMsg = false;
        }, t);
    }
}
