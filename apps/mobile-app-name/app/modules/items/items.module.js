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
var router_1 = require("nativescript-angular/router");
// app
var shared_module_1 = require("../shared/shared.module");
var components_1 = require("./components");
exports.routes = [
    {
        path: '',
        component: components_1.ItemsComponent
    },
    {
        path: ':id',
        component: components_1.ItemDetailComponent
    }
];
var ItemsModule = (function () {
    function ItemsModule() {
    }
    return ItemsModule;
}());
ItemsModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            router_1.NativeScriptRouterModule.forChild(exports.routes)
        ],
        declarations: components_1.COMPONENTS.slice(),
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], ItemsModule);
exports.ItemsModule = ItemsModule;
