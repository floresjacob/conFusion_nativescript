"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var drawer_page_1 = require("../shared/drawer/drawer.page");
var MenuComponent = (function (_super) {
    __extends(MenuComponent, _super);
    function MenuComponent(dishService, changeDetectorRef, BaseURL) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.dishService = dishService;
        _this.changeDetectorRef = changeDetectorRef;
        _this.BaseURL = BaseURL;
        return _this;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishService.getDishes()
            .subscribe(function (dishes) { return _this.dishes = dishes; }, function (errmess) { return _this.errMess = errmess; });
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'app-menu',
            moduleId: module.id,
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.css']
        }),
        __param(2, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [dish_service_1.DishService,
            core_1.ChangeDetectorRef, Object])
    ], MenuComponent);
    return MenuComponent;
}(drawer_page_1.DrawerPage));
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RTtBQUc3RSx5REFBdUQ7QUFFdkQsNERBQTBEO0FBUzFEO0lBQW1DLGlDQUFVO0lBSzNDLHVCQUFvQixXQUF3QixFQUNsQyxpQkFBbUMsRUFDaEIsT0FBTztRQUZwQyxZQUdJLGtCQUFNLGlCQUFpQixDQUFDLFNBQ3pCO1FBSmlCLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2xDLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDaEIsYUFBTyxHQUFQLE9BQU8sQ0FBQTs7SUFFbEMsQ0FBQztJQUVILGdDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO2FBQzNCLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFwQixDQUFvQixFQUN2QyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQVEsT0FBTyxFQUEzQixDQUEyQixDQUFDLENBQUM7SUFDNUMsQ0FBQztJQWZVLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNyQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3BDLENBQUM7UUFRRyxXQUFBLGFBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTt5Q0FGYSwwQkFBVztZQUNoQix3QkFBaUI7T0FObEMsYUFBYSxDQWlCekI7SUFBRCxvQkFBQztDQUFBLEFBakJELENBQW1DLHdCQUFVLEdBaUI1QztBQWpCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuaW1wb3J0IHsgRGlzaFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kaXNoLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBEcmF3ZXJQYWdlIH0gZnJvbSAnLi4vc2hhcmVkL2RyYXdlci9kcmF3ZXIucGFnZSc7XG5pbXBvcnQgeyBEaXNoIH0gZnJvbSAnLi4vc2hhcmVkL2Rpc2gnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbWVudScsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL21lbnUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tZW51LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IGV4dGVuZHMgRHJhd2VyUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGRpc2hlczogRGlzaFtdO1xuXG4gIGVyck1lc3M6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpc2hTZXJ2aWNlOiBEaXNoU2VydmljZSxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOkNoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoJ0Jhc2VVUkwnKSBwcml2YXRlIEJhc2VVUkwpIHtcbiAgICAgIHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcbiAgICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kaXNoU2VydmljZS5nZXREaXNoZXMoKVxuICAgIC5zdWJzY3JpYmUoZGlzaGVzID0+IHRoaXMuZGlzaGVzID0gZGlzaGVzLFxuICAgICAgZXJybWVzcyA9PiB0aGlzLmVyck1lc3MgPSA8YW55PmVycm1lc3MpO1xuICB9XG5cbn1cbiJdfQ==