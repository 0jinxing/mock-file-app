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

    onSelectFile(file: FileControlBlock, $event) {
        if(DirectoryTreeComponent.selectFile != file) {
            console.log(file);
        }
        DirectoryTreeComponent.selectFile = file;
        this.onSelect.emit(file);
        !!$event && $event.stopPropagation();
    }
    cancalSelectFile() {
        if (this.that.selectFile == null) return;
        this.that.selectFile = null;
        this.onSelect.emit(null);
    }
}
