"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// libs
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
// app
var services_1 = require("./services");
var services_2 = require("../items/services");
var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                fa: './assets/font-awesome.min.css'
            })
        ],
        providers: services_1.CORE_PROVIDERS.concat(services_2.ITEMS_PROVIDERS)
    })
], CoreModule);
exports.CoreModule = CoreModule;
