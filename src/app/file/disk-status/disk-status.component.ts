import { Component } from '@angular/core';
import { FileManagerService } from '../file-manager.service';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { Environment } from '../environment.config';

@Component({
    selector: 'app-disk-status',
    templateUrl: './disk-status.component.html',
    styleUrls: ['./disk-status.component.css']
})
export class DiskStatusComponent {

    // 获取磁盘的使用情况
    get info(): Array<number> {
        let info = new Array<number>();
        // 递归遍历磁盘所有的文件
        function _(f1) {
            if (f1.attribute != 32) {
                // 直接寻址
                f1.iAddr.forEach((b) => {
                    if (b != null && b != undefined) info.push(b);
                })
                // 一次间址
                if (f1.signalIndirect) {
                    f1.signalIndirect.forEach((b) => info.push(b));
                }
                // 二次间址
                if (f1.doubleIndirect) {
                    f1.doubleIndirect.forEach((bt) => {
                        bt.forEach((b) => info.push(b));
                    });
                }
                // 三次间址
                if (f1.tripleIndirect) {
                    f1.tripleIndirect.forEach((btt) => {
                        btt.forEach((bt) => {
                            bt.forEach((b) => {
                                info.push(b);
                            });
                        });
                    });
                }
            }
            else {
                f1.sub.forEach(_);
            }
        }
        this.fileService.root.sub.forEach((f) => {
            _(f);
        });
        // 获取一个区间
        info.sort((v1, v2) => v1 - v2);
        return info;
    }

    // 获取磁盘使用区间情况
    get rangeInfo(): Array<Array<number>> {
        let rangeInfo = new Array<Array<number>>();
        let startBlock: number = -1;
        let endBlock: number = -1;
        this.info.forEach((b) => {
            if (endBlock != -1 && startBlock != -1) {
                // 相邻的盘块
                if (Math.abs(b - endBlock) <= 1) {
                    endBlock = b;
                }
                else {
                    rangeInfo.push([startBlock, endBlock]);
                    startBlock = -1;
                    endBlock = -1;
                }
            }
            else {
                startBlock = b;
                endBlock = b;
            }
        });
        if (startBlock >= 0 && endBlock >= 0) rangeInfo.push([startBlock, endBlock]);
        return rangeInfo;
    }

    get background() {
        if (this.rangeInfo.length == 0) return "#fff";
        let fullColor = "#82A6F5";
        let emptyColor = "#FFFFFF";
        let rangeColorInfo: Array<any> = new Array();
        let preRange = null;
        let firstBlock = Math.max(this.rangeInfo[0][0], this.rangeInfo[0][1]);
        if (firstBlock < Environment.diskBlockSize - 1) {
            let emptyColorRange = {
                color: emptyColor,
                percent: Math.abs((Environment.diskBlockSize - firstBlock - 1) / Environment.diskBlockTotal) * 100
            }
            rangeColorInfo.push(emptyColorRange);
        }
        this.rangeInfo.forEach((r) => {
            if (preRange) {
                let emptyColorRange = {
                    color: emptyColor,
                    percent: Math.abs((Math.min(preRange[0], preRange[1]) - Math.max(r[0], r[1])) / Environment.diskBlockTotal) * 100
                }
                rangeColorInfo.push(emptyColorRange);
            }
            let fullColorRange = {
                color: fullColor,
                percent: Math.abs((r[0] - r[1]) / Environment.diskBlockTotal) * 100
            }

            rangeColorInfo.push(fullColorRange);
            preRange = r;
        });
        if (this.rangeInfo.length && this.rangeInfo[this.rangeInfo.length - 1][0] > 0) {
            let emptyColorRange = {
                color: emptyColor,
                percent: Math.abs((Math.min(this.rangeInfo[0][0], this.rangeInfo[0][1]) / Environment.diskBlockTotal)) * 100
            }
            rangeColorInfo.push(emptyColorRange);
        }
        // return rangeColorInfo;
        let styleBackground = "linear-gradient(90deg, ";
        // rangeColorInfo.forEach((ci) => {
        //     styleBackground += (ci.color + " " + "0%" + ", " + ci.color + " " + ci.percent+", ");
        // });
        let p = 0;
        for (let i = 0; i < rangeColorInfo.length; i++) {
            let ci = rangeColorInfo[i];
            styleBackground += (ci.color + " " + "0%" + ", " + ci.color + " " + (p + ci.percent) + "%");
            p += ci.percent;
            if (i < rangeColorInfo.length - 1) styleBackground += ", ";
        }
        styleBackground += ")";


        return styleBackground;
    }

    constructor(public fileService: FileManagerService) {
    }

}
