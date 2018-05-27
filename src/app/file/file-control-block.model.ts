// 假设占用4kb
export class FileControlBlock {
    name: string;   // 文件名
    extension: string;  // 扩展名
    // 属性: 0x00读写, 0x01只读, 0x02隐藏, 0x04系统, 0x08卷标, 0x10子目录, 0x20归档 (这里只用到读写、只读、归档)
    attribute: number;
    size: number;   // 文件大小
    blockCount: number; // 盘块数
    createTime: Date;   // 创建时间
    updateTime: Date;   // 最后修改时间
    iAddr: Array<number> // 直接地址, 最大13项
    signalIndirect: Array<number>; // 一次间接地址
    doubleIndirect: Array<Array<number>>; // 二次间接地址
    tripleIndirect: Array<Array<Array<number>>>; // 三次间接地址

    sub: Array<FileControlBlock>; // 该文件夹下的文件
    parent: FileControlBlock;

    get path(): string {
        if(!this.parent) return this.name;
        return this.parent.path + "/" + this.name;
    }
    constructor() {
        this.iAddr = new Array<number>(13);
        this.signalIndirect = new Array<number>();
        this.doubleIndirect = new Array<Array<number>>();
        this.tripleIndirect = new Array<Array<Array<number>>>();
        this.sub = new Array<FileControlBlock>();
    }
}
