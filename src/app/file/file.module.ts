import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileManagerService } from './file-manager.service';
import { DirectoryTreeComponent } from './directory-tree/directory-tree.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { DiskStatusComponent } from './disk-status/disk-status.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [DirectoryTreeComponent, ExplorerComponent, DiskStatusComponent],
    providers: [FileManagerService],
    exports: [DirectoryTreeComponent, ExplorerComponent]
})
export class FileModule { }
