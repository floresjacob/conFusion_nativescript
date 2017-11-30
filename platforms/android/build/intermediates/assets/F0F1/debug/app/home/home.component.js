"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var promotion_service_1 = require("../services/promotion.service");
var leader_service_1 = require("../services/leader.service");
var drawer_page_1 = require("../shared/drawer/drawer.page");
var HomeComponent = (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent(dishservice, promotionservice, leaderservice, changeDetectorRef, BaseURL) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.dishservice = dishservice;
        _this.promotionservice = promotionservice;
        _this.leaderservice = leaderservice;
        _this.changeDetectorRef = changeDetectorRef;
        _this.BaseURL = BaseURL;
        return _this;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishservice.getFeaturedDish()
            .subscribe(function (dish) { return _this.dish = dish; }, function (errmess) { return _this.dishErrMess = errmess; });
        this.promotionservice.getFeaturedPromotion()
            .subscribe(function (promotion) { return _this.promotion = promotion; }, function (errmess) { return _this.promoErrMess = errmess; });
        this.leaderservice.getFeaturedLeader()
            .subscribe(function (leader) { return _this.leader = leader; }, function (errmess) { return _this.leaderErrMess = errmess; });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            moduleId: module.id,
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        __param(4, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [dish_service_1.DishService,
            promotion_service_1.PromotionService,
            leader_service_1.LeaderService,
            core_1.ChangeDetectorRef, Object])
    ], HomeComponent);
    return HomeComponent;
}(drawer_page_1.DrawerPage));
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RTtBQUc3RSx5REFBdUQ7QUFFdkQsbUVBQWlFO0FBRWpFLDZEQUEyRDtBQUMzRCw0REFBMEQ7QUFRMUQ7SUFBbUMsaUNBQVU7SUFTM0MsdUJBQW9CLFdBQXdCLEVBQ2xDLGdCQUFrQyxFQUNsQyxhQUE0QixFQUM1QixpQkFBbUMsRUFDaEIsT0FBTztRQUpwQyxZQUtJLGtCQUFNLGlCQUFpQixDQUFDLFNBQ3pCO1FBTmlCLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2xDLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNoQixhQUFPLEdBQVAsT0FBTyxDQUFBOztJQUVsQyxDQUFDO0lBRUgsZ0NBQVEsR0FBUjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUU7YUFDOUIsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQWhCLENBQWdCLEVBQ2xDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsR0FBUSxPQUFPLEVBQS9CLENBQStCLENBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLEVBQUU7YUFDekMsU0FBUyxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLEVBQTFCLENBQTBCLEVBQ2hELFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxPQUFPLEVBQWhDLENBQWdDLENBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFO2FBQ25DLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFwQixDQUFvQixFQUN2QyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLEdBQVEsT0FBTyxFQUFqQyxDQUFpQyxDQUFFLENBQUM7SUFDckQsQ0FBQztJQTNCVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDckIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNwQyxDQUFDO1FBY0csV0FBQSxhQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7eUNBSmEsMEJBQVc7WUFDaEIsb0NBQWdCO1lBQ25CLDhCQUFhO1lBQ1Ysd0JBQWlCO09BWmxDLGFBQWEsQ0E2QnpCO0lBQUQsb0JBQUM7Q0FBQSxBQTdCRCxDQUFtQyx3QkFBVSxHQTZCNUM7QUE3Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEaXNoIH0gZnJvbSAnLi4vc2hhcmVkL2Rpc2gnO1xuaW1wb3J0IHsgRGlzaFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kaXNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvbW90aW9uIH0gZnJvbSAnLi4vc2hhcmVkL3Byb21vdGlvbic7XG5pbXBvcnQgeyBQcm9tb3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcHJvbW90aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGVhZGVyIH0gZnJvbSAnLi4vc2hhcmVkL2xlYWRlcic7XG5pbXBvcnQgeyBMZWFkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbGVhZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRHJhd2VyUGFnZSB9IGZyb20gJy4uL3NoYXJlZC9kcmF3ZXIvZHJhd2VyLnBhZ2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaG9tZScsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGV4dGVuZHMgRHJhd2VyUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZGlzaDogRGlzaDtcbiAgcHJvbW90aW9uOiBQcm9tb3Rpb247XG4gIGxlYWRlcjogTGVhZGVyO1xuICBkaXNoRXJyTWVzczogc3RyaW5nO1xuICBwcm9tb0Vyck1lc3M6IHN0cmluZztcbiAgbGVhZGVyRXJyTWVzczogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlzaHNlcnZpY2U6IERpc2hTZXJ2aWNlLFxuICAgIHByaXZhdGUgcHJvbW90aW9uc2VydmljZTogUHJvbW90aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGxlYWRlcnNlcnZpY2U6IExlYWRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjpDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KCdCYXNlVVJMJykgcHJpdmF0ZSBCYXNlVVJMKSB7XG4gICAgICBzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XG4gICAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGlzaHNlcnZpY2UuZ2V0RmVhdHVyZWREaXNoKClcbiAgICAgICAuc3Vic2NyaWJlKGRpc2ggPT4gdGhpcy5kaXNoID0gZGlzaCxcbiAgICAgICAgZXJybWVzcyA9PiB0aGlzLmRpc2hFcnJNZXNzID0gPGFueT5lcnJtZXNzICk7XG4gICAgdGhpcy5wcm9tb3Rpb25zZXJ2aWNlLmdldEZlYXR1cmVkUHJvbW90aW9uKClcbiAgICAgIC5zdWJzY3JpYmUocHJvbW90aW9uID0+IHRoaXMucHJvbW90aW9uID0gcHJvbW90aW9uLFxuICAgICAgICBlcnJtZXNzID0+IHRoaXMucHJvbW9FcnJNZXNzID0gPGFueT5lcnJtZXNzICk7XG4gICAgdGhpcy5sZWFkZXJzZXJ2aWNlLmdldEZlYXR1cmVkTGVhZGVyKClcbiAgICAgIC5zdWJzY3JpYmUobGVhZGVyID0+IHRoaXMubGVhZGVyID0gbGVhZGVyLFxuICAgICAgICBlcnJtZXNzID0+IHRoaXMubGVhZGVyRXJyTWVzcyA9IDxhbnk+ZXJybWVzcyApO1xuICB9XG5cbn1cbiJdfQ==