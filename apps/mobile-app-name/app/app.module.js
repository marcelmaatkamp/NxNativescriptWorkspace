"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
// nativescript
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
// app
var core_module_1 = require("./modules/core/core.module");
var shared_module_1 = require("./modules/shared/shared.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var AppModule = (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            http_1.NativeScriptHttpModule,
            core_module_1.CoreModule,
            shared_module_1.SharedModule,
            app_routing_1.AppRoutingModule
        ],
        providers: [
            // this allows standard Angular route lazy load syntax across whole project
            {
                provide: core_1.NgModuleFactoryLoader,
                useClass: router_1.NSModuleFactoryLoader
            }
        ],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent],
        schemas: [core_1.NO_ERRORS_SCHEMA]
    })
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
], AppModule);
exports.AppModule = AppModule;
