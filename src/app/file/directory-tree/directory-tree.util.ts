import { FileControlBlock } from "../file-control-block.model";

export class DirectoryTreeUtil {

    static getFileImageUrl(file: FileControlBlock): string {
        if (file.attribute === 32) return '/assets/folder.png';
        else return '/assets/file.png';
    }

    static getFileType(file: FileControlBlock): string {
        if (file.attribute === 32) return 'folder';
        else return 'file';
    }
}
