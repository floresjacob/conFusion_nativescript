"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
var leader_service_1 = require("../services/leader.service");
var drawer_page_1 = require("../shared/drawer/drawer.page");
var AboutComponent = (function (_super) {
    __extends(AboutComponent, _super);
    function AboutComponent(leaderService, route, routerExtensions, changeDetectorRef, BaseURL) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.leaderService = leaderService;
        _this.route = route;
        _this.routerExtensions = routerExtensions;
        _this.changeDetectorRef = changeDetectorRef;
        _this.BaseURL = BaseURL;
        return _this;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leaderService.getLeaders()
            .subscribe(function (leaders) { return _this.leaders = leaders; }, function (errmess) { return _this.errMess = errmess; });
    };
    AboutComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'app-dishdetail',
            moduleId: module.id,
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.css']
        }),
        __param(4, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [leader_service_1.LeaderService,
            router_1.ActivatedRoute,
            router_2.RouterExtensions,
            core_1.ChangeDetectorRef, Object])
    ], AboutComponent);
    return AboutComponent;
}(drawer_page_1.DrawerPage));
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQThFO0FBQzlFLDBDQUF5RDtBQUN6RCxzREFBK0Q7QUFDL0QsdUNBQXFDO0FBR3JDLDZEQUEyRDtBQUMzRCw0REFBMEQ7QUFRMUQ7SUFBb0Msa0NBQVU7SUFJNUMsd0JBQ1UsYUFBNEIsRUFDNUIsS0FBcUIsRUFDckIsZ0JBQWtDLEVBQ2xDLGlCQUFtQyxFQUNoQixPQUFPO1FBTHBDLFlBTUksa0JBQU0saUJBQWlCLENBQUMsU0FDeEI7UUFOTSxtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixXQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDaEIsYUFBTyxHQUFQLE9BQU8sQ0FBQTs7SUFFakMsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO2FBQzlCLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUF0QixDQUFzQixFQUMxQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQVEsT0FBTyxFQUEzQixDQUEyQixDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVKLCtCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQXJCVSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNyQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3JDLENBQUM7UUFVRyxXQUFBLGFBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTt5Q0FKSyw4QkFBYTtZQUNyQix1QkFBYztZQUNILHlCQUFnQjtZQUNoQix3QkFBaUI7T0FSbEMsY0FBYyxDQXNCMUI7SUFBRCxxQkFBQztDQUFBLEFBdEJELENBQW9DLHdCQUFVLEdBc0I3QztBQXRCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIENoYW5nZURldGVjdG9yUmVmICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwJztcblxuaW1wb3J0IHsgTGVhZGVyIH0gZnJvbSAnLi4vc2hhcmVkL2xlYWRlcic7XG5pbXBvcnQgeyBMZWFkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbGVhZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRHJhd2VyUGFnZSB9IGZyb20gJy4uL3NoYXJlZC9kcmF3ZXIvZHJhd2VyLnBhZ2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZGlzaGRldGFpbCcsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2Fib3V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWJvdXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFib3V0Q29tcG9uZW50IGV4dGVuZHMgRHJhd2VyUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGxlYWRlcnM6IExlYWRlcltdO1xuICBlcnJNZXNzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBsZWFkZXJTZXJ2aWNlOiBMZWFkZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOkNoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoJ0Jhc2VVUkwnKSBwcml2YXRlIEJhc2VVUkwpIHtcbiAgICAgIHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcbiAgICAgfVxuXG4gICAgIG5nT25Jbml0KCkge1xuICAgICAgIHRoaXMubGVhZGVyU2VydmljZS5nZXRMZWFkZXJzKClcbiAgICAgICAuc3Vic2NyaWJlKGxlYWRlcnMgPT4gdGhpcy5sZWFkZXJzID0gbGVhZGVycyxcbiAgICAgICAgIGVycm1lc3MgPT4gdGhpcy5lcnJNZXNzID0gPGFueT5lcnJtZXNzKTtcbiAgICAgfVxuXG4gIGdvQmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuICB9XG59XG4iXX0=