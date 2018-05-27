import { Component } from '@angular/core';
import { FileManagerService } from './file/file-manager.service';
import { FileControlBlock } from './file/file-control-block.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor() { }
}
