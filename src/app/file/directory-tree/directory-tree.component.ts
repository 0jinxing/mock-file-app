import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FileControlBlock } from '../file-control-block.model';
import { DirectoryTreeUtil } from './directory-tree.util';

@Component({
    selector: 'app-directory-tree',
    templateUrl: './directory-tree.component.html',
    styleUrls: ['./directory-tree.component.css']
})
export class DirectoryTreeComponent {

    @Input() current: FileControlBlock;
    @Output() onSelect = new EventEmitter<FileControlBlock>();
    static selectFile: FileControlBlock;

    util = DirectoryTreeUtil;
    that = DirectoryTreeComponent;
    constructor() { }

    onSelectFile(file: FileControlBlock) {
        if(DirectoryTreeComponent.selectFile === file) return;
        DirectoryTreeComponent.selectFile = file;
        console.log(file);
        this.onSelect.emit(file);
    }
}
