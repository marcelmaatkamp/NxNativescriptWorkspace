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
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
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
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxVQUFVO0FBQ1Ysc0NBQWtGO0FBRWxGLGVBQWU7QUFDZixnRkFBOEU7QUFDOUUsa0RBQW1FO0FBQ25FLHNEQUFvRTtBQUVwRSxNQUFNO0FBQ04sMERBQXdEO0FBQ3hELGdFQUE4RDtBQUM5RCw2Q0FBaUQ7QUFDakQsaURBQStDO0FBd0IvQztJQUhBOztNQUVFO0lBQ0Y7SUFBd0IsQ0FBQztJQUFaLFNBQVM7UUF0QnJCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLDZCQUFzQjtnQkFDdEIsd0JBQVU7Z0JBQ1YsNEJBQVk7Z0JBQ1osOEJBQWdCO2FBQ2pCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULDJFQUEyRTtnQkFDM0U7b0JBQ0UsT0FBTyxFQUFFLDRCQUFxQjtvQkFDOUIsUUFBUSxFQUFFLDhCQUFxQjtpQkFDaEM7YUFDRjtZQUNELFlBQVksRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDNUIsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUN6QixPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM1QixDQUFDO1FBQ0Y7O1VBRUU7T0FDVyxTQUFTLENBQUc7SUFBRCxnQkFBQztDQUFBLEFBQXpCLElBQXlCO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIG5hdGl2ZXNjcmlwdFxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBOU01vZHVsZUZhY3RvcnlMb2FkZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG4vLyBhcHBcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvY29yZS9jb3JlLm1vZHVsZSc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLnJvdXRpbmcnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgIENvcmVNb2R1bGUsXG4gICAgU2hhcmVkTW9kdWxlLFxuICAgIEFwcFJvdXRpbmdNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLy8gdGhpcyBhbGxvd3Mgc3RhbmRhcmQgQW5ndWxhciByb3V0ZSBsYXp5IGxvYWQgc3ludGF4IGFjcm9zcyB3aG9sZSBwcm9qZWN0XG4gICAge1xuICAgICAgcHJvdmlkZTogTmdNb2R1bGVGYWN0b3J5TG9hZGVyLFxuICAgICAgdXNlQ2xhc3M6IE5TTW9kdWxlRmFjdG9yeUxvYWRlclxuICAgIH1cbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50XSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4iXX0=