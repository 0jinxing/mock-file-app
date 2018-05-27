(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-header {\r\n    margin-top: 36px;\r\n    margin-bottom: 24px;\r\n    padding-bottom: 4px;\r\n    border-bottom: 1px solid #eee;\r\n    color: #333;\r\n    font-weight: lighter;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"page-header\">文件管理<small class=\"lead ml-2\">操作系统课程设计</small></h1>\n  <div>\n    <app-explorer></app-explorer>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _file_file_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file/file.module */ "./src/app/file/file.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _file_file_module__WEBPACK_IMPORTED_MODULE_3__["FileModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/file/directory-tree/directory-tree.component.css":
/*!******************************************************************!*\
  !*** ./src/app/file/directory-tree/directory-tree.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul.tree{\r\n    list-style: none;\r\n    overflow: hidden;\r\n}\r\nli.file, li.folder {\r\n    font-size: 18px;\r\n    line-height: 20px;\r\n    position: relative;\r\n    margin-top: 16px;\r\n    /* display: inline-block; */\r\n}\r\n.file-item {\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    /* overflow: scroll; */\r\n}\r\nli .file-item:hover, li .file-item:hover {\r\n    background-color: rgba(30, 153, 137, 0.507);\r\n    color: white;\r\n    border-radius: 4px;\r\n    padding-left: 1px;\r\n}\r\nli .selected {\r\n    background-color: rgba(30, 153, 137, 0.507);\r\n    color: white;\r\n    border-radius: 4px;\r\n    padding-left: 1px;\r\n}\r\nli.file span, li.folder span {\r\n    white-space:nowrap;\r\n    /* text-overflow:ellipsis; */\r\n    /* overflow:hidden; */\r\n}\r\nli img.icon {\r\n    float: left;\r\n}\r\nli.folder.open::before {\r\n    display: block;\r\n    width: 18px;\r\n    height: 18px;\r\n    content: \"\";\r\n    background-image: url(/assets/open.png);\r\n    background-size: 18px;\r\n    background-repeat: no-repeat;\r\n    background-clip: border-box;\r\n    float: left;\r\n}\r\n.empty-tip {\r\n    color: #333;\r\n    /* font-size: 16px; */\r\n    font-weight: lighter;\r\n    padding-left: 2em;\r\n    font-style: italic;\r\n}\r\n.sub-tree {\r\n    margin-top: 8px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/file/directory-tree/directory-tree.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/file/directory-tree/directory-tree.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"tree\">\n    <li class=\"{{util.getFileType(file)}}\" *ngFor=\"let file of current.sub\">\n        <span class=\"file-item\" (click)=\"onSelectFile(file)\" [class.selected]=\"file===that.selectFile\">\n            <img class=\"icon\" src=\"{{util.getFileImageUrl(file)}}\" alt=\"\" width=\"22px\">\n            <span>{{file.name}}</span>\n        </span>\n        <div class=\"sub-tree\">\n            <div class=\"empty-tip\" [hidden]=\"!(file.sub.length===0&&file.attribute===32)\">\n                <span>空</span>\n            </div>\n            <app-directory-tree *ngIf=\"file.attribute==32\" [current]=\"file\" (onSelect)=\"onSelectFile($event)\"></app-directory-tree>\n        </div>\n    </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/file/directory-tree/directory-tree.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/file/directory-tree/directory-tree.component.ts ***!
  \*****************************************************************/
/*! exports provided: DirectoryTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectoryTreeComponent", function() { return DirectoryTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _file_control_block_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../file-control-block.model */ "./src/app/file/file-control-block.model.ts");
/* harmony import */ var _directory_tree_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directory-tree.util */ "./src/app/file/directory-tree/directory-tree.util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DirectoryTreeComponent = /** @class */ (function () {
    function DirectoryTreeComponent() {
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.util = _directory_tree_util__WEBPACK_IMPORTED_MODULE_2__["DirectoryTreeUtil"];
        this.that = DirectoryTreeComponent_1;
    }
    DirectoryTreeComponent_1 = DirectoryTreeComponent;
    DirectoryTreeComponent.prototype.onSelectFile = function (file) {
        if (DirectoryTreeComponent_1.selectFile === file)
            return;
        DirectoryTreeComponent_1.selectFile = file;
        console.log(file);
        this.onSelect.emit(file);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _file_control_block_model__WEBPACK_IMPORTED_MODULE_1__["FileControlBlock"])
    ], DirectoryTreeComponent.prototype, "current", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DirectoryTreeComponent.prototype, "onSelect", void 0);
    DirectoryTreeComponent = DirectoryTreeComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-directory-tree',
            template: __webpack_require__(/*! ./directory-tree.component.html */ "./src/app/file/directory-tree/directory-tree.component.html"),
            styles: [__webpack_require__(/*! ./directory-tree.component.css */ "./src/app/file/directory-tree/directory-tree.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DirectoryTreeComponent);
    return DirectoryTreeComponent;
    var DirectoryTreeComponent_1;
}());



/***/ }),

/***/ "./src/app/file/directory-tree/directory-tree.util.ts":
/*!************************************************************!*\
  !*** ./src/app/file/directory-tree/directory-tree.util.ts ***!
  \************************************************************/
/*! exports provided: DirectoryTreeUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectoryTreeUtil", function() { return DirectoryTreeUtil; });
var DirectoryTreeUtil = /** @class */ (function () {
    function DirectoryTreeUtil() {
    }
    DirectoryTreeUtil.getFileImageUrl = function (file) {
        if (file.attribute === 32)
            return '/assets/folder.png';
        else
            return '/assets/file.png';
    };
    DirectoryTreeUtil.getFileType = function (file) {
        if (file.attribute === 32)
            return 'folder';
        else
            return 'file';
    };
    return DirectoryTreeUtil;
}());



/***/ }),

/***/ "./src/app/file/disk-status/disk-status.component.css":
/*!************************************************************!*\
  !*** ./src/app/file/disk-status/disk-status.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel {\r\n    padding: 24px;\r\n    height: 100%;\r\n}\r\n#disk_info {\r\n    height: 40%;\r\n    max-height: 80px;\r\n    border-radius: 4px;\r\n    background: red;\r\n    border: 1px solid #e1e1e1;\r\n}\r\n"

/***/ }),

/***/ "./src/app/file/disk-status/disk-status.component.html":
/*!*************************************************************!*\
  !*** ./src/app/file/disk-status/disk-status.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel\">\n    <div id=\"disk_info\" [style.background]=\"background\"></div>\n    <span class=\"text-muted\">空闲空间大小: {{fileService.freeDiskBlockTotal*4096}}</span>\n</div>\n"

/***/ }),

/***/ "./src/app/file/disk-status/disk-status.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/file/disk-status/disk-status.component.ts ***!
  \***********************************************************/
/*! exports provided: DiskStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiskStatusComponent", function() { return DiskStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _file_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../file-manager.service */ "./src/app/file/file-manager.service.ts");
/* harmony import */ var _environment_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environment.config */ "./src/app/file/environment.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DiskStatusComponent = /** @class */ (function () {
    function DiskStatusComponent(fileService) {
        this.fileService = fileService;
    }
    Object.defineProperty(DiskStatusComponent.prototype, "info", {
        // 获取磁盘的使用情况
        get: function () {
            var info = new Array();
            // 递归遍历磁盘所有的文件
            function _(f1) {
                if (f1.attribute != 32) {
                    // 直接寻址
                    f1.iAddr.forEach(function (b) {
                        if (b != null && b != undefined)
                            info.push(b);
                    });
                    // 一次间址
                    if (f1.signalIndirect) {
                        f1.signalIndirect.forEach(function (b) { return info.push(b); });
                    }
                    // 二次间址
                    if (f1.doubleIndirect) {
                        f1.doubleIndirect.forEach(function (bt) {
                            bt.forEach(function (b) { return info.push(b); });
                        });
                    }
                    // 三次间址
                    if (f1.tripleIndirect) {
                        f1.tripleIndirect.forEach(function (btt) {
                            btt.forEach(function (bt) {
                                bt.forEach(function (b) {
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
            this.fileService.root.sub.forEach(function (f) {
                _(f);
            });
            // 获取一个区间
            info.sort(function (v1, v2) { return v1 - v2; });
            return info;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiskStatusComponent.prototype, "rangeInfo", {
        // 获取磁盘使用区间情况
        get: function () {
            var rangeInfo = new Array();
            var startBlock = -1;
            var endBlock = -1;
            this.info.forEach(function (b) {
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
            if (startBlock >= 0 && endBlock >= 0)
                rangeInfo.push([startBlock, endBlock]);
            return rangeInfo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiskStatusComponent.prototype, "background", {
        get: function () {
            if (this.rangeInfo.length == 0)
                return "#fff";
            var fullColor = "#82A6F5";
            var emptyColor = "#FFFFFF";
            var rangeColorInfo = new Array();
            var preRange = null;
            this.rangeInfo.forEach(function (r) {
                if (preRange) {
                    var emptyColorRange = {
                        color: emptyColor,
                        percent: Math.abs((Math.min(preRange[0], preRange[1]) - Math.max(r[0], r[1])) / _environment_config__WEBPACK_IMPORTED_MODULE_2__["Environment"].diskBlockTotal) * 100
                    };
                    rangeColorInfo.push(emptyColorRange);
                }
                var fullColorRange = {
                    color: fullColor,
                    percent: Math.abs((r[0] - r[1]) / _environment_config__WEBPACK_IMPORTED_MODULE_2__["Environment"].diskBlockTotal) * 100
                };
                rangeColorInfo.push(fullColorRange);
                preRange = r;
            });
            if (this.rangeInfo.length && this.rangeInfo[this.rangeInfo.length - 1][0] > 0) {
                var emptyColorRange = {
                    color: emptyColor,
                    percent: Math.abs((Math.min(this.rangeInfo[0][0], this.rangeInfo[0][1]) / _environment_config__WEBPACK_IMPORTED_MODULE_2__["Environment"].diskBlockTotal)) * 100
                };
                rangeColorInfo.push(emptyColorRange);
            }
            // return rangeColorInfo;
            var styleBackground = "linear-gradient(90deg, ";
            // rangeColorInfo.forEach((ci) => {
            //     styleBackground += (ci.color + " " + "0%" + ", " + ci.color + " " + ci.percent+", ");
            // });
            var p = 0;
            for (var i = 0; i < rangeColorInfo.length; i++) {
                var ci = rangeColorInfo[i];
                styleBackground += (ci.color + " " + "0%" + ", " + ci.color + " " + (p + ci.percent) + "%");
                p += ci.percent;
                if (i < rangeColorInfo.length - 1)
                    styleBackground += ", ";
            }
            styleBackground += ")";
            return styleBackground;
        },
        enumerable: true,
        configurable: true
    });
    DiskStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-disk-status',
            template: __webpack_require__(/*! ./disk-status.component.html */ "./src/app/file/disk-status/disk-status.component.html"),
            styles: [__webpack_require__(/*! ./disk-status.component.css */ "./src/app/file/disk-status/disk-status.component.css")]
        }),
        __metadata("design:paramtypes", [_file_manager_service__WEBPACK_IMPORTED_MODULE_1__["FileManagerService"]])
    ], DiskStatusComponent);
    return DiskStatusComponent;
}());



/***/ }),

/***/ "./src/app/file/environment.config.ts":
/*!********************************************!*\
  !*** ./src/app/file/environment.config.ts ***!
  \********************************************/
/*! exports provided: Environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Environment", function() { return Environment; });
var Environment = {
    maxFreeDiskBlockTableItemTotal: 100,
    diskBlockSize: 4 * 1024,
    diskBlockTotal: 4 * 1024,
};


/***/ }),

/***/ "./src/app/file/explorer/explorer.component.css":
/*!******************************************************!*\
  !*** ./src/app/file/explorer/explorer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-header {\r\n    /* margin-top: 12px; */\r\n    margin-bottom: 24px;\r\n    padding-bottom: 4px;\r\n    border-bottom: 1px solid #eee;\r\n    color: #333;\r\n    font-weight: lighter;\r\n}\r\n\r\n.wrapper {\r\n    padding: 0px;\r\n    margin: 0px;\r\n    background-color: #eee;\r\n    border-radius: 6px;\r\n    overflow: auto;\r\n}\r\n\r\n.nav {\r\n    background: #82A6F5;\r\n    color: #FFF;\r\n    height: 48px;\r\n    line-height: 48px;\r\n    justify-content: flex-end;\r\n    padding: 0 14px;\r\n}\r\n\r\n.nav-item {\r\n    margin-right: 14px;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.nav-item:hover {\r\n    line-height: 40px;\r\n    font-weight: bold;\r\n}\r\n\r\n.file-tree {\r\n    padding: 16px;\r\n}\r\n\r\n.mask {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.mask.mask-hidden {\r\n    z-index: -1;\r\n    background-color: rgba(255, 255, 255, 0);\r\n}\r\n\r\n.toast-wrapper {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.toast {\r\n    position: relative;\r\n    margin-top: 80px;\r\n    /* margin-left: 20px; */\r\n    padding: 12px;\r\n    /* width: 600px; */\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n    color: #FFF;\r\n    border-radius: 0 4px 4px 0;\r\n}\r\n\r\n.dialog-wrapper {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.dialog {\r\n    position: relative;\r\n    margin-top: 200px;\r\n    padding: 48px;\r\n    width: 600px;\r\n    background-color: #FFF;\r\n    border-radius: 4px;\r\n}\r\n\r\n.dialog-close {\r\n    position: absolute;\r\n    display: block;\r\n    width: 24px;\r\n    height: 24px;\r\n    line-height: 20px;\r\n    text-align: center;\r\n    padding: 0;\r\n    top: 0;\r\n    right: 0;\r\n    background: #FFF;\r\n    font-size: 24px;\r\n    cursor: pointer;\r\n    border-radius: 4px;\r\n}\r\n\r\n.dialog-close:hover {\r\n    background: rgb(228, 88, 88);\r\n    color: #FFF;\r\n}\r\n\r\n#disk {\r\n    height: 200px;\r\n    overflow: hidden;\r\n}\r\n"

/***/ }),

/***/ "./src/app/file/explorer/explorer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/file/explorer/explorer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"wrapper col-6\">\n        <div class=\"nav\">\n            <span class=\"nav-item\" (click)=\"openAddFileDialog()\">ADD FILE</span>\n            <span class=\"nav-item\" (click)=\"openAddFolderDialog()\">ADD FOLDER</span>\n            <span class=\"nav-item\" (click)=\"deleteSelectFile()\">DELETE</span>\n            <span class=\"nav-item\" (click)=\"format()\">FORMAT</span>\n        </div>\n        <div class=\"file-tree\">\n            <app-directory-tree [current]=\"fileService.root\" (onSelect)=\"onSelectFile($event)\">\n            </app-directory-tree>\n        </div>\n    </div>\n\n    <div class=\"wrapper col-4 ml-2\" id=\"disk\">\n        <div class=\"nav\">\n            <p>盘块使用情况</p>\n        </div>\n        <app-disk-status></app-disk-status>\n    </div>\n</div>\n\n<div class=\"mask\" *ngIf=\"isOpenAddFileDialog\" id=\"add_file_dialog\" (click)=\"closeAddFileDialog()\">\n    <div class=\"dialog-wrapper\">\n        <div class=\"dialog add-file-dialog container\" (click)=\"$event.stopPropagation()\">\n            <span class=\"dialog-close\" (click)=\"closeAddFileDialog()\">&times;</span>\n            <form>\n                <h4 class=\"page-header\">新建文件</h4>\n                <div class=\"form-group\">\n                    <label for=\"file_name\">文件名</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"输入文件名\" name=\"file_name\" id=\"file_name\" #fileName>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"file_size\">文件大小</label>\n                    <input type=\"number\" class=\"form-control\" id=\"file_size\" name=\"file_size\" placeholder=\"输入创建的文件大小\" #fileSize>\n                </div>\n                <button type=\"button\" class=\"btn btn-info\" (click)=\"createFile(fileName.value, fileSize.value)\">创建</button>\n            </form>\n        </div>\n    </div>\n</div>\n\n<div class=\"mask\" *ngIf=\"isOpenAddFolderDialog\" id=\"add_folder_dialog\" (click)=\"closeAddFolderDialog()\">\n    <div class=\"dialog-wrapper\">\n        <div class=\"dialog container\" (click)=\"$event.stopPropagation()\">\n            <span class=\"dialog-close\" (click)=\"closeAddFolderDialog()\">&times;</span>\n            <form>\n                <h4 class=\"page-header\">新建文件夹</h4>\n                <div class=\"form-group\">\n                    <label for=\"folder_name\">文件夹名</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"输入文件名\" name=\"folder_name\" id=\"folder_name\" #folderName>\n                </div>\n                <button type=\"button\" class=\"btn btn-info\" (click)=\"createFile(folderName.value, 0, 32)\">创建</button>\n            </form>\n        </div>\n    </div>\n</div>\n\n<div class=\"mask mask-hidden\" *ngIf=\"hasMsg\">\n    <div class=\"toast-wrapper\">\n        <div class=\"toast\">{{msg}}</div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/file/explorer/explorer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/file/explorer/explorer.component.ts ***!
  \*****************************************************/
/*! exports provided: ExplorerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorerComponent", function() { return ExplorerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _file_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../file-manager.service */ "./src/app/file/file-manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExplorerComponent = /** @class */ (function () {
    function ExplorerComponent(fileService) {
        this.fileService = fileService;
        this.isOpenAddFileDialog = false;
        this.isOpenAddFolderDialog = false;
        this.hasMsg = false;
        // 测试用
        this.fileService.addFile("操作系统作业", "/", 32, 0);
        this.fileService.addFile("课程设计.zip", "/操作系统作业", 0, 1024 * 100);
        this.fileService.addFile("备份文件.rar", "/", 0, 1024 * 1024);
        this.fileService.addFile("复习资料", "/", 32, 0);
    }
    ExplorerComponent.prototype.onSelectFile = function (file) {
        this.selectFile = file;
    };
    ExplorerComponent.prototype.openAddFileDialog = function () {
        this.isOpenAddFileDialog = true;
    };
    ExplorerComponent.prototype.closeAddFileDialog = function () {
        this.isOpenAddFileDialog = false;
    };
    ExplorerComponent.prototype.openAddFolderDialog = function () {
        this.isOpenAddFolderDialog = true;
    };
    ExplorerComponent.prototype.closeAddFolderDialog = function () {
        this.isOpenAddFolderDialog = false;
    };
    ExplorerComponent.prototype.createFile = function (fileName, fileSize, attribute) {
        var path = "/";
        if (this.selectFile && this.selectFile.attribute == 32)
            path = this.selectFile.path;
        else if (this.selectFile)
            path = this.selectFile.parent.path;
        var r = this.fileService.addFile(fileName, path, attribute || 0, fileSize);
        this.isOpenAddFileDialog = false;
        this.isOpenAddFolderDialog = false;
        r == 1 && this.toast("创建成功");
        r == -1 && this.toast("磁盘空间不足,创建失败");
        r == -2 && this.toast("文件已存在");
    };
    ExplorerComponent.prototype.deleteSelectFile = function () {
        this.fileService.removeFile(this.selectFile.path);
        if (this.selectFile) {
            this.toast("删除成功");
        }
        this.selectFile = null;
    };
    ExplorerComponent.prototype.format = function () {
        this.fileService.removeFile("/");
        this.selectFile = null;
        this.toast("格式化成功");
    };
    ExplorerComponent.prototype.toast = function (msg, t) {
        var _this = this;
        t = !!t ? t : 1000;
        this.msg = msg;
        this.hasMsg = true;
        setTimeout(function () {
            _this.hasMsg = false;
        }, t);
    };
    ExplorerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-explorer',
            template: __webpack_require__(/*! ./explorer.component.html */ "./src/app/file/explorer/explorer.component.html"),
            styles: [__webpack_require__(/*! ./explorer.component.css */ "./src/app/file/explorer/explorer.component.css")]
        }),
        __metadata("design:paramtypes", [_file_manager_service__WEBPACK_IMPORTED_MODULE_1__["FileManagerService"]])
    ], ExplorerComponent);
    return ExplorerComponent;
}());



/***/ }),

/***/ "./src/app/file/file-control-block.model.ts":
/*!**************************************************!*\
  !*** ./src/app/file/file-control-block.model.ts ***!
  \**************************************************/
/*! exports provided: FileControlBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileControlBlock", function() { return FileControlBlock; });
// 假设占用4kb
var FileControlBlock = /** @class */ (function () {
    function FileControlBlock() {
        this.iAddr = new Array(13);
        this.signalIndirect = new Array();
        this.doubleIndirect = new Array();
        this.tripleIndirect = new Array();
        this.sub = new Array();
    }
    Object.defineProperty(FileControlBlock.prototype, "path", {
        get: function () {
            if (!this.parent)
                return this.name;
            return this.parent.path + "/" + this.name;
        },
        enumerable: true,
        configurable: true
    });
    return FileControlBlock;
}());



/***/ }),

/***/ "./src/app/file/file-manager.service.ts":
/*!**********************************************!*\
  !*** ./src/app/file/file-manager.service.ts ***!
  \**********************************************/
/*! exports provided: FileManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileManagerService", function() { return FileManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _file_control_block_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-control-block.model */ "./src/app/file/file-control-block.model.ts");
/* harmony import */ var _environment_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environment.config */ "./src/app/file/environment.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileManagerService = /** @class */ (function () {
    function FileManagerService() {
        this.freeDiskBlockTableStack = new Array();
        this.freeDiskBlockTotal = 0;
        // 根目录初始化
        this.root = new _file_control_block_model__WEBPACK_IMPORTED_MODULE_1__["FileControlBlock"]();
        this.root.name = '/';
        this.root.attribute = 32;
        this.root.size = 0;
        this.root.blockCount = 0;
        this.root.createTime = new Date();
        this.root.updateTime = this.root.createTime;
        this.current = this.root;
        // 盘块初始化
        for (var i = 0; i < _environment_config__WEBPACK_IMPORTED_MODULE_2__["Environment"].diskBlockTotal; i++) {
            this.addFreeDiscBlock(i);
        }
    }
    // 根据路径获取文件
    FileManagerService.prototype.getFile = function (path) {
        path = path.trim();
        var searchDir;
        var dirSearchSeq = path.split('/');
        var dirSearchInd = 0;
        if (/\/\S*/.test(path)) {
            searchDir = this.root;
        }
        else {
            searchDir = this.current;
        }
        var _loop_1 = function () {
            var isWell = false; // 是否找到下一级目录
            var curSearch = dirSearchSeq[dirSearchInd];
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
                var nextSearchDir_1;
                searchDir.sub.forEach(function (dir) {
                    if (dir.name === curSearch) {
                        nextSearchDir_1 = dir;
                        isWell = true;
                        return;
                    }
                });
                searchDir = nextSearchDir_1;
            }
            if (isWell)
                dirSearchInd++;
            else
                return { value: null };
        };
        while (dirSearchInd < dirSearchSeq.length) {
            var state_1 = _loop_1();
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return searchDir;
    };
    // 根据路径列出文件
    FileManagerService.prototype.listFile = function (path) {
        if (path) {
            return this.getFile(path).sub;
        }
        return this.current.sub;
    };
    /**
     * 新增文件
     * @param file 新增的文件或文件名
     * @param path 路径
     * @param attribute 属性
     * @param size 文件大小
     * @returns 1: 成功 -1: 磁盘空间不足导致的失败 -2: 已用同名的文件导致的失败
     */
    FileManagerService.prototype.addFile = function (file, path, attribute, size) {
        var blockCount = Math.ceil(size / _environment_config__WEBPACK_IMPORTED_MODULE_2__["Environment"].diskBlockSize);
        if (blockCount > this.freeDiskBlockTotal) {
            return -1;
        }
        if ((typeof file).toLocaleLowerCase() === "string") {
            var fileName = file;
            var newFile_1 = new _file_control_block_model__WEBPACK_IMPORTED_MODULE_1__["FileControlBlock"]();
            newFile_1.name = fileName;
            newFile_1.attribute = attribute && 32;
            newFile_1.size = size && 0;
            newFile_1.blockCount = blockCount;
            newFile_1.createTime = new Date();
            newFile_1.updateTime = newFile_1.createTime;
            var isRepeat_1 = false; // 是否重名
            // TODO: 可能有问题
            this.listFile(path).forEach(function (f) {
                if (f.name === newFile_1.name) {
                    isRepeat_1 = true;
                    return;
                }
            });
            if (isRepeat_1)
                return -2;
            for (var i = 0; i < newFile_1.blockCount; i++) {
                // 直接地址
                var block = this.getFreeDiscBlock();
                if (i < newFile_1.iAddr.length) {
                    newFile_1.iAddr[i] = block;
                }
                else if (i - newFile_1.iAddr.length < _environment_config__WEBPACK_IMPORTED_MODULE_2__["Environment"].diskBlockSize / 8) {
                    var signalInd = i - newFile_1.iAddr.length;
                    newFile_1.signalIndirect[signalInd] = block;
                }
                else if (i - newFile_1.iAddr.length - _environment_config__WEBPACK_IMPORTED_MODULE_2__["Environment"].diskBlockSize / 8 < Math.pow(_environment_config__WEBPACK_IMPORTED_MODULE_2__["Environment"].diskBlockSize / 8, 2)) {
                    var doubleInd = i - newFile_1.iAddr.length - _environment_config__WEBPACK_IMPORTED_MODULE_2__["Environment"].diskBlockSize / 8;
                    var tableInd = Math.floor(doubleInd / (_environment_config__WEBPACK_IMPORTED_MODULE_2__["Environment"].diskBlockSize / 8));
                    var ind = doubleInd % (_environment_config__WEBPACK_IMPORTED_MODULE_2__["Environment"].diskBlockSize / 8);
                    if (!newFile_1.doubleIndirect[tableInd]) {
                        newFile_1.doubleIndirect[tableInd] = new Array();
                    }
                    newFile_1.doubleIndirect[tableInd][ind] = block;
                }
                else if (i - newFile_1.iAddr.length - _environment_config__WEBPACK_IMPORTED_MODULE_2__["Environment"].diskBlockSize / 8 - Math.pow(_environment_config__WEBPACK_IMPORTED_MODULE_2__["Environment"].diskBlockSize / 8, 2) < Math.pow(_environment_config__WEBPACK_IMPORTED_MODULE_2__["Environment"].diskBlockSize / 8, 3)) {
                    var tripleInd = i - newFile_1.iAddr.length - _environment_config__WEBPACK_IMPORTED_MODULE_2__["Environment"].diskBlockSize / 8 - Math.pow(_environment_config__WEBPACK_IMPORTED_MODULE_2__["Environment"].diskBlockSize / 8, 2);
                    var firstTableInd = Math.floor(tripleInd / Math.pow(_environment_config__WEBPACK_IMPORTED_MODULE_2__["Environment"].diskBlockSize / 8, 2));
                    var secondTableInd = Math.floor(tripleInd / _environment_config__WEBPACK_IMPORTED_MODULE_2__["Environment"].diskBlockSize / 8) % (_environment_config__WEBPACK_IMPORTED_MODULE_2__["Environment"].diskBlockSize / 8);
                    var ind = tripleInd % (_environment_config__WEBPACK_IMPORTED_MODULE_2__["Environment"].diskBlockSize / 8);
                    if (!newFile_1.tripleIndirect[firstTableInd]) {
                        newFile_1.tripleIndirect[firstTableInd] = new Array();
                    }
                    if (!newFile_1.tripleIndirect[firstTableInd][secondTableInd]) {
                        newFile_1.tripleIndirect[firstTableInd][secondTableInd] = new Array();
                    }
                    newFile_1.tripleIndirect[firstTableInd][secondTableInd][ind] = block;
                }
            }
            this.addFile(newFile_1, path);
        }
        else {
            file = file;
            var parent_1 = this.getFile(path);
            file.parent = parent_1;
            parent_1.sub.push(file);
        }
        return 1;
    };
    // 根据路径删除文件
    FileManagerService.prototype.removeFile = function (path) {
        var _this = this;
        var file = this.getFile(path);
        // 文件夹递归删除文件夹里面所有的文件
        if (file.attribute === 32 && !!file.sub) {
            while (file.sub && file.sub.length > 0) {
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
            file.iAddr.forEach(function (block) {
                if (block != null && block != undefined) {
                    _this.addFreeDiscBlock(block);
                }
            });
            !!file.signalIndirect && file.signalIndirect.forEach(function (block) {
                if (block != null && block != undefined) {
                    _this.addFreeDiscBlock(block);
                }
            });
            !!file.doubleIndirect && file.doubleIndirect.forEach(function (bt) {
                bt.forEach(function (block) {
                    if (block != null && block != undefined) {
                        _this.addFreeDiscBlock(block);
                    }
                });
            });
            !!file.tripleIndirect && file.tripleIndirect.forEach(function (btt) {
                btt.forEach(function (bt) {
                    bt.forEach(function (block) {
                        if (block != null && block != undefined) {
                            _this.addFreeDiscBlock(block);
                        }
                    });
                });
            });
            // 修改目录表
            var parent_2 = file.parent;
            !!parent_2 && parent_2.sub.splice(parent_2.sub.indexOf(file), 1);
        }
    };
    // 获得(分配)一个空闲的盘块号
    FileManagerService.prototype.getFreeDiscBlock = function () {
        if (!this.memoryFreeDiskBlockTable || !this.memoryFreeDiskBlockTable.length) {
            this.memoryFreeDiskBlockTable = this.freeDiskBlockTableStack.pop();
        }
        if (this.memoryFreeDiskBlockTable) {
            var block = this.memoryFreeDiskBlockTable.pop();
            if (block != null && block != undefined) {
                this.freeDiskBlockTotal--;
                return block;
            }
        }
    };
    // 增加(回收)一个空闲的盘块号
    FileManagerService.prototype.addFreeDiscBlock = function (blockInd) {
        if (!this.memoryFreeDiskBlockTable) {
            this.memoryFreeDiskBlockTable = new Array();
            this.memoryFreeDiskBlockTable.push(blockInd);
        }
        else if (this.memoryFreeDiskBlockTable.length >= _environment_config__WEBPACK_IMPORTED_MODULE_2__["Environment"].maxFreeDiskBlockTableItemTotal) {
            this.freeDiskBlockTableStack.push(this.memoryFreeDiskBlockTable);
            var newFreeDiscBlockTable = new Array();
            newFreeDiscBlockTable.push(blockInd);
            this.memoryFreeDiskBlockTable = newFreeDiscBlockTable;
        }
        else {
            this.memoryFreeDiskBlockTable.push(blockInd);
        }
        this.freeDiskBlockTotal++;
    };
    FileManagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FileManagerService);
    return FileManagerService;
}());



/***/ }),

/***/ "./src/app/file/file.module.ts":
/*!*************************************!*\
  !*** ./src/app/file/file.module.ts ***!
  \*************************************/
/*! exports provided: FileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileModule", function() { return FileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _file_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-manager.service */ "./src/app/file/file-manager.service.ts");
/* harmony import */ var _directory_tree_directory_tree_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directory-tree/directory-tree.component */ "./src/app/file/directory-tree/directory-tree.component.ts");
/* harmony import */ var _explorer_explorer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./explorer/explorer.component */ "./src/app/file/explorer/explorer.component.ts");
/* harmony import */ var _disk_status_disk_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./disk-status/disk-status.component */ "./src/app/file/disk-status/disk-status.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FileModule = /** @class */ (function () {
    function FileModule() {
    }
    FileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_directory_tree_directory_tree_component__WEBPACK_IMPORTED_MODULE_3__["DirectoryTreeComponent"], _explorer_explorer_component__WEBPACK_IMPORTED_MODULE_4__["ExplorerComponent"], _disk_status_disk_status_component__WEBPACK_IMPORTED_MODULE_5__["DiskStatusComponent"]],
            providers: [_file_manager_service__WEBPACK_IMPORTED_MODULE_2__["FileManagerService"]],
            exports: [_directory_tree_directory_tree_component__WEBPACK_IMPORTED_MODULE_3__["DirectoryTreeComponent"], _explorer_explorer_component__WEBPACK_IMPORTED_MODULE_4__["ExplorerComponent"]]
        })
    ], FileModule);
    return FileModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\LinJinxing\Desktop\mock-file-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map