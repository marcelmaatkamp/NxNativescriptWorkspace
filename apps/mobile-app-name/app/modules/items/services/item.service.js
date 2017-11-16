"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * This is organized in this module just for good housekeeping
 * However it is provided via the CoreModule to ensure it's
 * a singleton the entire app can use.
 * If your module service is *only* used in this module
 * you can have the service provided by this module.
 * In this case however, we want this service to be a true singleton
 * which can be injected into any component/service anywhere and
 * it will be the same instance therefore this is provided by the CoreModule.
 */
var ItemService = (function () {
    function ItemService() {
        this.items = new Array({ id: 1, name: 'Ter Stegen', role: 'Goalkeeper' }, { id: 3, name: 'Piqué', role: 'Defender' }, { id: 4, name: 'I. Rakitic', role: 'Midfielder' }, { id: 5, name: 'Sergio', role: 'Midfielder' }, { id: 6, name: 'Denis Suárez', role: 'Midfielder' }, { id: 7, name: 'Arda', role: 'Midfielder' }, { id: 8, name: 'A. Iniesta', role: 'Midfielder' }, { id: 9, name: 'Suárez', role: 'Forward' }, { id: 10, name: 'Messi', role: 'Forward' }, { id: 11, name: 'Neymar', role: 'Forward' }, { id: 12, name: 'Rafinha', role: 'Midfielder' }, { id: 13, name: 'Cillessen', role: 'Goalkeeper' }, { id: 14, name: 'Mascherano', role: 'Defender' }, { id: 17, name: 'Paco Alcácer', role: 'Forward' }, { id: 18, name: 'Jordi Alba', role: 'Defender' }, { id: 19, name: 'Digne', role: 'Defender' }, { id: 20, name: 'Sergi Roberto', role: 'Midfielder' }, { id: 21, name: 'André Gomes', role: 'Midfielder' }, { id: 22, name: 'Aleix Vidal', role: 'Midfielder' }, { id: 23, name: 'Umtiti', role: 'Defender' }, { id: 24, name: 'Mathieu', role: 'Defender' }, { id: 25, name: 'Masip', role: 'Goalkeeper' });
    }
    ItemService.prototype.getItems = function () {
        return this.items;
    };
    ItemService.prototype.getItem = function (id) {
        return this.items.filter(function (item) { return item.id === id; })[0];
    };
    return ItemService;
}());
ItemService = __decorate([
    core_1.Injectable()
], ItemService);
exports.ItemService = ItemService;
