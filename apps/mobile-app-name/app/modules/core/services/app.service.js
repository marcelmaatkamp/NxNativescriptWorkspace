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
var AppService = /** @class */ (function () {
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
    AppService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_2.RouterExtensions,
            router_1.Router,
            core_1.NgZone,
            nativescript_ngx_fonticon_1.TNSFontIconService])
    ], AppService);
    return AppService;
}());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLFVBQVU7QUFDVixzQ0FBbUQ7QUFDbkQsMENBQXdEO0FBRXhELGVBQWU7QUFDZixxREFBdUQ7QUFDdkQsdURBQXlEO0FBQ3pELHNEQUFxRTtBQUNyRSxtREFBOEQ7QUFDOUQsc0RBQStEO0FBQy9ELHVFQUErRDtBQUUvRCxPQUFPO0FBQ1Asd0NBQXVDO0FBRXZDOzs7Ozs7OztHQVFHO0FBRUg7SUFTRSxvQkFDVSxPQUF5QixFQUN6QixTQUFpQixFQUNqQixPQUFlO1FBQ3ZCLGtEQUFrRDtRQUMxQyxTQUE2QjtRQUo3QixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUN6QixjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFFZixjQUFTLEdBQVQsU0FBUyxDQUFvQjtRQVIvQixrQkFBYSxHQUFpQixJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQVVsRCwyQkFBMkI7UUFDM0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsc0JBQVcsbUNBQVc7YUFBdEI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDO2FBRUQsVUFBdUIsS0FBSztZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUM7OztPQU5BO0lBUUQsc0JBQVcsb0NBQVk7YUFBdkI7WUFDRSxNQUFNLENBQUMsSUFBSSxD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QVMsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUM7U0FDeEMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ1IsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1NBQ25CLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQztTQUNyQyxTQUFTLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDO1NBQ3JDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDeEIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vLyBuYXRpdmVzY3JpcHRcbmltcG9ydCAqIGFzIHRuc0FwcCBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uJztcbmltcG9ydCAqIGFzIHRuc1V0aWxzIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHsgZGV2aWNlLCBpc0lPUywgaXNBbmRyb2lkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBEZXZpY2VPcmllbnRhdGlvbiB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZW51bXMnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcblxuLy8gbGlic1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5cbi8qKlxuICogVGhpcyBzZXJ2aWNlIGNhbiBiZSB1c2VkIGZvciBsb3cgbGV2ZWwgYXBwIHdpcmluZ1xuICogZm9yIGJlc3QgcHJhY3RpY2UgcHVycG9zZXMsIHRoaXMgc2VydmljZSBzZXRzIHVwOlxuICogLSBhcHAgdmVyc2lvblxuICogLSBvcmllbnRhdGlvbiBoYW5kbGluZyBpbmNsdWRpbmcgYSBTdWJqZWN0IHRoZSBhcHAgY2FuIG9ic2VydmVcbiAqIC0gZGV2aWNlVHlwZSB0byBoZWxwIGNvbXBvbmVudCBiaW5kaW5nc1xuICogLSBleGFtcGxlIG9mIGdsb2JhbCBhcHAgZXZlbnQgd2lyaW5nIGZvciByZXN1bWUvc3VzcGVuZFxuICogLSBpbmplY3Rpb24gb2YgVE5TRm9udEljb25TZXJ2aWNlIHRvIGVuc3VyZSBmb250IGljb25zIGFyZSBsb2FkZWQgb24gYm9vdFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwU2VydmljZSB7XG4gIC8vIGZ1bmRhbWVudGFsc1xuICBwcml2YXRlIF9hcHBWZXJzaW9uOiBzdHJpbmc7XG5cbiAgLy8gb3JpZW50YXRpb24gaGVscGVyXG4gIHByaXZhdGUgX29yaWVudGF0aW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgX29yaWVudGF0aW9uJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBfZGV2aWNlVHlwZTogJ1Bob25lJyB8ICdUYWJsZXQnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIF9uZ1JvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIC8vIGVuc3VyZXMgZm9udCBpY29uJ3MgYXJlIGluaXRpYWxpemVkIG9uIGFwcCBib290XG4gICAgcHJpdmF0ZSBfZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZVxuICApIHtcbiAgICAvLyBpbml0aWFsaXplIGNvcmUgc2VydmljZXNcbiAgICB0aGlzLl9pbml0QXBwVmVyc2lvbigpO1xuICAgIHRoaXMuX2luaXRPcmllbnRhdGlvbigpO1xuICAgIHRoaXMuX2luaXRBcHBFdmVudHMoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgb3JpZW50YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX29yaWVudGF0aW9uO1xuICB9XG5cbiAgcHVibGljIHNldCBvcmllbnRhdGlvbih2YWx1ZSkge1xuICAgIGNvbnNvbGUubG9nKCdzZXR0aW5nIG9yaWVudGF0aW9uOicsIHZhbHVlKTtcbiAgICB0aGlzLl9vcmllbnRhdGlvbiA9IHZhbHVlO1xuICAgIHRoaXMuX29yaWVudGF0aW9uJC5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgb3JpZW50YXRpb24kKCkge1xuICAgIHJldHVybiB0aGlzLl9vcmllbnRhdGlvbiQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRldmljZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RldmljZVR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFwcFZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcFZlcnNpb247XG4gIH1cblxuICBwcml2YXRlIF9pbml0QXBwVmVyc2lvbigpIHtcbiAgICBsZXQgdmVyc2lvbk5hbWU6IHN0cmluZztcbiAgICBsZXQgYnVpbGROdW1iZXI6IHN0cmluZztcblxuICAgIGlmICh0bnNBcHAuYW5kcm9pZCkge1xuICAgICAgY29uc3QgcGkgPSB0bnNBcHAuYW5kcm9pZC5jb250ZXh0LmdldFBhY2thZ2VNYW5hZ2VyKCkuZ2V0UGFja2FnZUluZm8odG5zQXBwLmFuZHJvaWQuY29udGV4dC5nZXRQYWNrYWdlTmFtZSgpLCAwKTtcbiAgICAgIHZlcnNpb25OYW1lID0gcGkudmVyc2lvbk5hbWU7XG4gICAgICBidWlsZE51bWJlciA9IHBpLnZlcnNpb25Db2RlLnRvU3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0bnNBcHAuaW9zKSB7XG4gICAgICB2ZXJzaW9uTmFtZSA9IE5TQnVuZGxlLm1haW5CdW5kbGUub2JqZWN0Rm9ySW5mb0RpY3Rpb25hcnlLZXkoJ0NGQnVuZGxlU2hvcnRWZXJzaW9uU3RyaW5nJyk7XG4gICAgICBidWlsZE51bWJlciA9IE5TQnVuZGxlLm1haW5CdW5kbGUub2JqZWN0Rm9ySW5mb0RpY3Rpb25hcnlLZXkoJ0NGQnVuZGxlVmVyc2lvbicpO1xuICAgIH1cbiAgICB0aGlzLl9hcHBWZXJzaW9uID0gYHYke3ZlcnNpb25OYW1lfSAoJHtidWlsZE51bWJlcn0pYDtcbiAgICBjb25zb2xlLmxvZygnQXBwIHZlcnNpb246JywgdGhpcy5fYXBwVmVyc2lvbik7XG4gIH1cblxuICBwcml2YXRlIF9pbml0QXBwRXZlbnRzKCkge1xuICAgIC8vIEZvciB0aGUgZnV0dXJlIC0gbWF5IHdhbnQgdG8gdXNlIHRoZXNlXG4gICAgdG5zQXBwLm9uKHRuc0FwcC5yZXN1bWVFdmVudCwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3Ruc0FwcC5yZXN1bWVFdmVudCcpO1xuICAgIH0pO1xuICAgIHRuc0FwcC5vbih0bnNBcHAuc3VzcGVuZEV2ZW50LCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygndG5zQXBwLnN1c3BlbmRFdmVudCcpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdE9yaWVudGF0aW9uKCkge1xuICAgIHRoaXMuX2RldmljZVR5cGUgPSBkZXZpY2UuZGV2aWNlVHlwZTtcbiAgICBjb25zb2xlLmxvZygnZGV2aWNlVHlwZTonLCB0aGlzLl9kZXZpY2VUeXBlKTtcbiAgICBjb25zb2xlLmxvZygnaW5pdGlhbGl6aW5nIG9yaWVudGF0aW9uIGhhbmRsaW5nLicpO1xuXG4gICAgLy8gc2V0IGluaXRpYWwgb3JpZW50YXRpb25cbiAgICB0aGlzLm9yaWVudGF0aW9uID0gZ2V0T3JpZW50YXRpb24oKTtcbiAgICBjb25zb2xlLmxvZygnY3VycmVudCBvcmllbnRhdGlvbjonLCB0aGlzLm9yaWVudGF0aW9uKTtcblxuICAgIC8vIGhhbmRsZSBvcmllbnRhdGlvbiBjaGFuZ2VzXG4gICAgdG5zQXBwLm9uKHRuc0FwcC5vcmllbnRhdGlvbkNoYW5nZWRFdmVudCwgZSA9PiB7XG4gICAgICAvLyBzb21ldGltZXMgZS5uZXdWYWx1ZSB3aWxsIGJlIHVuZGVmaW5lZCwgaWdub3JlIHRob3NlXG4gICAgICBpZiAoZS5uZXdWYWx1ZSAmJiB0aGlzLm9yaWVudGF0aW9uICE9PSBlLm5ld1ZhbHVlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBPbGQ6ICR7dGhpcy5vcmllbnRhdGlvbn07IE5ldzogJHtlLm5ld1ZhbHVlfWApO1xuICAgICAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gZ2V0T3JpZW50YXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgZ2V0T3JpZW50YXRpb24gPSBmdW5jdGlvbigpIHtcbiAgaWYgKGlzSU9TKSB7XG4gICAgY29uc3QgZGV2aWNlT3JpZW50YXRpb24gPSB0bnNVdGlscy5pb3MuZ2V0dGVyKFVJRGV2aWNlLCBVSURldmljZS5jdXJyZW50RGV2aWNlKS5vcmllbnRhdGlvbjtcblxuICAgIHJldHVybiBkZXZpY2VPcmllbnRhdGlvbiA9PT0gVUlEZXZpY2VPcmllbnRhdGlvbi5MYW5kc2NhcGVMZWZ0IHx8XG4gICAgICBkZXZpY2VPcmllbnRhdGlvbiA9PT0gVUlEZXZpY2VPcmllbnRhdGlvbi5MYW5kc2NhcGVSaWdodFxuICAgICAgPyBEZXZpY2VPcmllbnRhdGlvbi5sYW5kc2NhcGVcbiAgICAgIDogRGV2aWNlT3JpZW50YXRpb24ucG9ydHJhaXQ7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgb3JpZW50YXRpb24gPSBnZXRDb250ZXh0KClcbiAgICAgIC5nZXRSZXNvdXJjZXMoKVxuICAgICAgLmdldENvbmZpZ3VyYXRpb24oKS5vcmllbnRhdGlvbjtcbiAgICBzd2l0Y2ggKG9yaWVudGF0aW9uKSB7XG4gICAgICBjYXNlIDEgLyogT1JJRU5UQVRJT05fUE9SVFJBSVQgKDB4MDAwMDAwMDEpICovOlxuICAgICAgICByZXR1cm4gRGV2aWNlT3JpZW50YXRpb24ucG9ydHJhaXQ7XG4gICAgICBjYXNlIDIgLyogT1JJRU5UQVRJT05fTEFORFNDQVBFICgweDAwMDAwMDAyKSAqLzpcbiAgICAgICAgcmV0dXJuIERldmljZU9yaWVudGF0aW9uLmxhbmRzY2FwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8qIE9SSUVOVEFUSU9OX1VOREVGSU5FRCAoMHgwMDAwMDAwMCkgKi9cbiAgICAgICAgcmV0dXJuIERldmljZU9yaWVudGF0aW9uLnBvcnRyYWl0O1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZ2V0Q29udGV4dCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBjdHggPSBqYXZhLmxhbmcuQ2xhc3NcbiAgICAuZm9yTmFtZSgnYW5kcm9pZC5hcHAuQXBwR2xvYmFscycpXG4gICAgLmdldE1ldGhvZCgnZ2V0SW5pdGlhbEFwcGxpY2F0aW9uJywgbnVsbClcbiAgICAuaW52b2tlKG51bGwsIG51bGwpO1xuICBpZiAoY3R4KSB7XG4gICAgcmV0dXJuIGN0eDtcbiAgfVxuXG4gIHJldHVybiBqYXZhLmxhbmcuQ2xhc3NcbiAgICAuZm9yTmFtZSgnYW5kcm9pZC5hcHAuQWN0aXZpdHlUaHJlYWQnKVxuICAgIC5nZXRNZXRob2QoJ2N1cnJlbnRBcHBsaWNhdGlvbicsIG51bGwpXG4gICAgLmludm9rZShudWxsLCBudWxsKTtcbn07XG4iXX0=