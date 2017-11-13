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
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: SHARED_MODULES.slice(),
            exports: SHARED_MODULES.slice()
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFFekMsZUFBZTtBQUNmLG9EQUFxRTtBQUNyRSxzREFBdUU7QUFDdkUsc0RBQXVFO0FBRXZFLE9BQU87QUFDUCx1RUFBOEQ7QUFFOUQsSUFBTSxjQUFjLEdBQUc7SUFDckIsaUNBQXdCO0lBQ3hCLCtCQUF1QjtJQUN2QixpQ0FBd0I7SUFDeEIsNkNBQWlCO0NBQ2xCLENBQUM7QUFVRjtJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQVJ4QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQ0YsY0FBYyxRQUNsQjtZQUNELE9BQU8sRUFDRixjQUFjLFFBQ2xCO1NBQ0YsQ0FBQztPQUNXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUEsQUFBN0IsSUFBNkI7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBuYXRpdmVzY3JpcHRcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbi8vIGxpYnNcbmltcG9ydCB7IFROU0ZvbnRJY29uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XG5cbmNvbnN0IFNIQVJFRF9NT0RVTEVTID0gW1xuICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gIFROU0ZvbnRJY29uTW9kdWxlXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgLi4uU0hBUkVEX01PRFVMRVNcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLlNIQVJFRF9NT0RVTEVTXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHsgfVxuIl19