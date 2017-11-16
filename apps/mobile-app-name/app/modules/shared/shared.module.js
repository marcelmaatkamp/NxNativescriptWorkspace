"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// nativescript
var forms_1 = require("nativescript-angular/forms");
var common_1 = require("nativescript-angular/common");
var router_1 = require("nativescript-angular/router");
// libs
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var SHARED_MODULES = [
    common_1.NativeScriptCommonModule,
    forms_1.NativeScriptFormsModule,
    router_1.NativeScriptRouterModule,
    nativescript_ngx_fonticon_1.TNSFontIconModule
];
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: SHARED_MODULES.slice(),
        exports: SHARED_MODULES.slice()
    })
], SharedModule);
exports.SharedModule = SharedModule;
