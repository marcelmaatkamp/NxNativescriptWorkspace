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
var ItemsModule = /** @class */ (function () {
    function ItemsModule() {
    }
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
    return ItemsModule;
}());
exports.ItemsModule = ItemsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQTJEO0FBRzNELGVBQWU7QUFDZixzREFBdUU7QUFFdkUsTUFBTTtBQUNOLHlEQUF1RDtBQUN2RCwyQ0FBK0U7QUFFbEUsUUFBQSxNQUFNLEdBQVc7SUFDNUI7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSwyQkFBYztLQUMxQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLEtBQUs7UUFDWCxTQUFTLEVBQUUsZ0NBQW1CO0tBQy9CO0NBQ0YsQ0FBQztBQWNGO0lBQUE7SUFBMEIsQ0FBQztJQUFkLFdBQVc7UUFadkIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLDRCQUFZO2dCQUNaLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxjQUFNLENBQUM7YUFDMUM7WUFDRCxZQUFZLEVBQ1AsdUJBQVUsUUFDZDtZQUNELE9BQU8sRUFBRTtnQkFDUCx1QkFBZ0I7YUFDakI7U0FDRixDQUFDO09BQ1csV0FBVyxDQUFHO0lBQUQsa0JBQUM7Q0FBQSxBQUEzQixJQUEyQjtBQUFkLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8vIG5hdGl2ZXNjcmlwdFxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuLy8gYXBwXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBDT01QT05FTlRTLCBJdGVtc0NvbXBvbmVudCwgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogSXRlbXNDb21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICc6aWQnLFxuICAgIGNvbXBvbmVudDogSXRlbURldGFpbENvbXBvbmVudFxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU2hhcmVkTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLkNPTVBPTkVOVFNcbiAgXSxcbiAgc2NoZW1hczogW1xuICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc01vZHVsZSB7fVxuIl19