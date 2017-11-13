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
var router_1 = require("nativescript-angular/router");
// app
var shared_module_1 = require("./modules/shared/shared.module");
var routes = [
    {
        path: '',
        redirectTo: '/items',
        pathMatch: 'full'
    },
    {
        path: 'items',
        loadChildren: './modules/items/items.module#ItemsModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, router_1.NativeScriptRouterModule.forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLFVBQVU7QUFDVixzQ0FBeUM7QUFHekMsZUFBZTtBQUNmLHNEQUF1RTtBQUV2RSxNQUFNO0FBQ04sZ0VBQThEO0FBRTlELElBQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsUUFBUTtRQUNwQixTQUFTLEVBQUUsTUFBTTtLQUNsQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE9BQU87UUFDYixZQUFZLEVBQUUsMENBQTBDO0tBQ3pEO0NBQ0YsQ0FBQztBQUtGO0lBQUE7SUFBK0IsQ0FBQztJQUFuQixnQkFBZ0I7UUFINUIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsNEJBQVksRUFBRSxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbEUsQ0FBQztPQUNXLGdCQUFnQixDQUFHO0lBQUQsdUJBQUM7Q0FBQSxBQUFoQyxJQUFnQztBQUFuQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuLy8gbmF0aXZlc2NyaXB0XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG4vLyBhcHBcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgcmVkaXJlY3RUbzogJy9pdGVtcycsXG4gICAgcGF0aE1hdGNoOiAnZnVsbCdcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdpdGVtcycsXG4gICAgbG9hZENoaWxkcmVuOiAnLi9tb2R1bGVzL2l0ZW1zL2l0ZW1zLm1vZHVsZSNJdGVtc01vZHVsZSdcbiAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1NoYXJlZE1vZHVsZSwgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7fVxuIl19