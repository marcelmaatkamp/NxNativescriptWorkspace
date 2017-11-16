"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// nativescript
var tnsApp = require("tns-core-modules/application");
var tnsUtils = require("tns-core-modules/utils/utils");
var platform_1 = require("tns-core-modules/platform");
var enums_1 = require("tns-core-modules/ui/enums");
var router_2 = require("nativescript-angular/router");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
// libs
var Subject_1 = require("rxjs/Subject");
/**
 * This service can be used for low level app wiring
 * for best practice purposes, this service sets up:
 * - app version
 * - orientation handling including a Subject the app can observe
 * - deviceType to help component bindings
 * - example of global app event wiring for resume/suspend
 * - injection of TNSFontIconService to ensure font icons are loaded on boot
 */
var AppService = (function () {
    function AppService(_router, _ngRouter, _ngZone, 
        // ensures font icon's are initialized on app boot
        _fonticon) {
        this._router = _router;
        this._ngRouter = _ngRouter;
        this._ngZone = _ngZone;
        this._fonticon = _fonticon;
        this._orientation$ = new Subject_1.Subject();
        // initialize core services
        this._initAppVersion();
        this._initOrientation();
        this._initAppEvents();
    }
    Object.defineProperty(AppService.prototype, "orientation", {
        get: function () {
            return this._orientation;
        },
        set: function (value) {
            console.log('setting orientation:', value);
            this._orientation = value;
            this._orientation$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppService.prototype, "orientation$", {
        get: function () {
            return this._orientation$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppService.prototype, "deviceType", {
        get: function () {
            return this._deviceType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppService.prototype, "appVersion", {
        get: function () {
            return this._appVersion;
        },
        enumerable: true,
        configurable: true
    });
    AppService.prototype._initAppVersion = function () {
        var versionName;
        var buildNumber;
        if (tnsApp.android) {
            var pi = tnsApp.android.context.getPackageManager().getPackageInfo(tnsApp.android.context.getPackageName(), 0);
            versionName = pi.versionName;
            buildNumber = pi.versionCode.toString();
        }
        else if (tnsApp.ios) {
            versionName = NSBundle.mainBundle.objectForInfoDictionaryKey('CFBundleShortVersionString');
            buildNumber = NSBundle.mainBundle.objectForInfoDictionaryKey('CFBundleVersion');
        }
        this._appVersion = "v" + versionName + " (" + buildNumber + ")";
        console.log('App version:', this._appVersion);
    };
    AppService.prototype._initAppEvents = function () {
        // For the future - may want to use these
        tnsApp.on(tnsApp.resumeEvent, function () {
            console.log('tnsApp.resumeEvent');
        });
        tnsApp.on(tnsApp.suspendEvent, function () {
            console.log('tnsApp.suspendEvent');
        });
    };
    AppService.prototype._initOrientation = function () {
        var _this = this;
        this._deviceType = platform_1.device.deviceType;
        console.log('deviceType:', this._deviceType);
        console.log('initializing orientation handling.');
        // set initial orientation
        this.orientation = getOrientation();
        console.log('current orientation:', this.orientation);
        // handle orientation changes
        tnsApp.on(tnsApp.orientationChangedEvent, function (e) {
            // sometimes e.newValue will be undefined, ignore those
            if (e.newValue && _this.orientation !== e.newValue) {
                console.log("Old: " + _this.orientation + "; New: " + e.newValue);
                _this._ngZone.run(function () {
                    _this.orientation = getOrientation();
                });
            }
        });
    };
    return AppService;
}());
AppService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_2.RouterExtensions,
        router_1.Router,
        core_1.NgZone,
        nativescript_ngx_fonticon_1.TNSFontIconService])
], AppService);
exports.AppService = AppService;
var getOrientation = function () {
    if (platform_1.isIOS) {
        var deviceOrientation = tnsUtils.ios.getter(UIDevice, UIDevice.currentDevice).orientation;
        return deviceOrientation === 3 /* LandscapeLeft */ ||
            deviceOrientation === 4 /* LandscapeRight */
            ? enums_1.DeviceOrientation.landscape
            : enums_1.DeviceOrientation.portrait;
    }
    else {
        var orientation_1 = getContext()
            .getResources()
            .getConfiguration().orientation;
        switch (orientation_1) {
            case 1 /* ORIENTATION_PORTRAIT (0x00000001) */:
                return enums_1.DeviceOrientation.portrait;
            case 2 /* ORIENTATION_LANDSCAPE (0x00000002) */:
                return enums_1.DeviceOrientation.landscape;
            default:
                /* ORIENTATION_UNDEFINED (0x00000000) */
                return enums_1.DeviceOrientation.portrait;
        }
    }
};
var getContext = function () {
    var ctx = java.lang.Class
        .forName('android.app.AppGlobals')
        .getMethod('getInitialApplication', null)
        .invoke(null, null);
    if (ctx) {
        return ctx;
    }
    return java.lang.Class
        .forName('android.app.ActivityThread')
        .getMethod('currentApplication', null)
        .invoke(null, null);
};
