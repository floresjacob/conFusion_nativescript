"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var favorite_service_1 = require("../services/favorite.service");
var angular_1 = require("nativescript-telerik-ui/listview/angular");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var dialogs_1 = require("ui/dialogs");
var drawer_page_1 = require("../shared/drawer/drawer.page");
var nativescript_toasty_1 = require("nativescript-toasty");
var FavoritesComponent = (function (_super) {
    __extends(FavoritesComponent, _super);
    function FavoritesComponent(favoriteservice, changeDetectorRef, BaseURL) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.favoriteservice = favoriteservice;
        _this.changeDetectorRef = changeDetectorRef;
        _this.BaseURL = BaseURL;
        return _this;
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.favoriteservice.getFavorites()
            .subscribe(function (favorites) { return _this.favorites = new observable_array_1.ObservableArray(favorites); }, function (errmess) { return _this.errMess = errmess; });
    };
    FavoritesComponent.prototype.deleteFavorite = function (id) {
        var _this = this;
        console.log('delete', id);
        var options = {
            title: "Confirm Delete",
            message: 'Do you want to delete Dish ' + id,
            okButtonText: "Yes",
            cancelButtonText: "No",
            neutralButtonText: "Cancel"
        };
        dialogs_1.confirm(options).then(function (result) {
            if (result) {
                _this.favorites = null;
                _this.favoriteservice.deleteFavorite(id)
                    .subscribe(function (favorites) {
                    var toast = new nativescript_toasty_1.Toasty("Deleted Dish " + id, "short", "bottom");
                    toast.show();
                    _this.favorites = new observable_array_1.ObservableArray(favorites);
                }, function (errmess) { return _this.errMess = errmess; });
            }
            else {
                console.log('Delete cancelled');
            }
        });
    };
    FavoritesComponent.prototype.onCellSwiping = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var currentItemView = args.object;
        var currentView;
        if (args.data.x > 200) {
        }
        else if (args.data.x < -200) {
        }
    };
    FavoritesComponent.prototype.onSwipeCellStarted = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args['object'];
        var leftItem = swipeView.getViewById('mark-view');
        var rightItem = swipeView.getViewById('delete-view');
        swipeLimits.left = leftItem.getMeasuredWidth();
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
    };
    FavoritesComponent.prototype.onSwipeCellFinished = function (args) {
    };
    FavoritesComponent.prototype.onLeftSwipeClick = function (args) {
        console.log('Left swipe click');
        this.listViewComponent.listView.notifySwipeToExecuteFinished();
    };
    FavoritesComponent.prototype.onRightSwipeClick = function (args) {
        this.deleteFavorite(args.object.bindingContext.id);
        this.listViewComponent.listView.notifySwipeToExecuteFinished();
    };
    __decorate([
        core_1.ViewChild('myListView'),
        __metadata("design:type", angular_1.RadListViewComponent)
    ], FavoritesComponent.prototype, "listViewComponent", void 0);
    FavoritesComponent = __decorate([
        core_1.Component({
            selector: 'app-favorites',
            moduleId: module.id,
            templateUrl: './favorites.component.html',
            styleUrls: ['./favorites.component.css']
        }),
        __param(2, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [favorite_service_1.FavoriteService,
            core_1.ChangeDetectorRef, Object])
    ], FavoritesComponent);
    return FavoritesComponent;
}(drawer_page_1.DrawerPage));
exports.FavoritesComponent = FavoritesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhdm9yaXRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0Y7QUFDeEYsaUVBQStEO0FBRy9ELG9FQUFnRjtBQUNoRiwyRUFBeUU7QUFFekUsc0NBQXFDO0FBQ3JDLDREQUEwRDtBQUMxRCwyREFBNkM7QUFRN0M7SUFBd0Msc0NBQVU7SUFPOUMsNEJBQW9CLGVBQWdDLEVBQ3hDLGlCQUFvQyxFQUNqQixPQUFPO1FBRnRDLFlBR1Esa0JBQU0saUJBQWlCLENBQUMsU0FDL0I7UUFKbUIscUJBQWUsR0FBZixlQUFlLENBQWlCO1FBQ3hDLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDakIsYUFBTyxHQUFQLE9BQU8sQ0FBQTs7SUFFdEMsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFO2FBQzlCLFNBQVMsQ0FBQyxVQUFBLFNBQVMsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxrQ0FBZSxDQUFDLFNBQVMsQ0FBQyxFQUEvQyxDQUErQyxFQUNuRSxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUF0QixDQUFzQixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELDJDQUFjLEdBQWQsVUFBZSxFQUFVO1FBQXpCLGlCQTZCRDtRQTVCQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUV4QixJQUFJLE9BQU8sR0FBRztZQUNWLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsT0FBTyxFQUFFLDZCQUE2QixHQUFFLEVBQUU7WUFDMUMsWUFBWSxFQUFFLEtBQUs7WUFDbkIsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixpQkFBaUIsRUFBRSxRQUFRO1NBQzlCLENBQUM7UUFFRixpQkFB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LFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDM0MsQ0FBQztRQVVPLFdBQUEsYUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO3lDQUZlLGtDQUFlO1lBQ3JCLHdCQUFpQjtPQVJ2QyxrQkFBa0IsQ0F1RjlCO0lBQUQseUJBQUM7Q0FBQSxBQXZGRCxDQUF3Qyx3QkFBVSxHQXVGakQ7QUF2RlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgVmlld0NoaWxkLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmF2b3JpdGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZmF2b3JpdGUuc2VydmljZSc7XG5pbXBvcnQgeyBEaXNoIH0gZnJvbSAnLi4vc2hhcmVkL2Rpc2gnO1xuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvbGlzdHZpZXcnO1xuaW1wb3J0IHsgUmFkTGlzdFZpZXdDb21wb25lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9saXN0dmlldy9hbmd1bGFyJztcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcbmltcG9ydCB7IEN1c3RvbUxheW91dFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlldy92aWV3LmQudHMnO1xuaW1wb3J0IHsgY29uZmlybSB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBEcmF3ZXJQYWdlIH0gZnJvbSAnLi4vc2hhcmVkL2RyYXdlci9kcmF3ZXIucGFnZSc7XG5pbXBvcnQgeyBUb2FzdHkgfSBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3R5JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtZmF2b3JpdGVzJyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9mYXZvcml0ZXMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2Zhdm9yaXRlcy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmF2b3JpdGVzQ29tcG9uZW50IGV4dGVuZHMgRHJhd2VyUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBmYXZvcml0ZXM6IE9ic2VydmFibGVBcnJheTxEaXNoPjtcbiAgICBlcnJNZXNzOiBzdHJpbmc7XG5cbiAgICBAVmlld0NoaWxkKCdteUxpc3RWaWV3JykgbGlzdFZpZXdDb21wb25lbnQ6IFJhZExpc3RWaWV3Q29tcG9uZW50O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmYXZvcml0ZXNlcnZpY2U6IEZhdm9yaXRlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIEBJbmplY3QoJ0Jhc2VVUkwnKSBwcml2YXRlIEJhc2VVUkwpIHtcbiAgICAgICAgICAgIHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5mYXZvcml0ZXNlcnZpY2UuZ2V0RmF2b3JpdGVzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZmF2b3JpdGVzID0+IHRoaXMuZmF2b3JpdGVzID0gbmV3IE9ic2VydmFibGVBcnJheShmYXZvcml0ZXMpLFxuICAgICAgICAgICAgICAgIGVycm1lc3MgPT4gdGhpcy5lcnJNZXNzID0gZXJybWVzcyk7XG4gICAgfVxuXG4gICAgZGVsZXRlRmF2b3JpdGUoaWQ6IG51bWJlcikge1xuICAgIGNvbnNvbGUubG9nKCdkZWxldGUnLCBpZCk7XG5cbiAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm0gRGVsZXRlXCIsXG4gICAgICAgICAgbWVzc2FnZTogJ0RvIHlvdSB3YW50IHRvIGRlbGV0ZSBEaXNoICcrIGlkLFxuICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJZZXNcIixcbiAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vXCIsXG4gICAgICAgICAgbmV1dHJhbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcbiAgICAgIH07XG5cbiAgICAgIGNvbmZpcm0ob3B0aW9ucykudGhlbigocmVzdWx0OiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgaWYocmVzdWx0KSB7XG5cbiAgICAgICAgICAgIHRoaXMuZmF2b3JpdGVzID0gbnVsbDtcblxuICAgICAgICAgICAgdGhpcy5mYXZvcml0ZXNlcnZpY2UuZGVsZXRlRmF2b3JpdGUoaWQpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShmYXZvcml0ZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdG9hc3QgPSBuZXcgVG9hc3R5KFwiRGVsZXRlZCBEaXNoIFwiKyBpZCwgXCJzaG9ydFwiLCBcImJvdHRvbVwiKTtcbiAgICAgICAgICAgICAgICAgIHRvYXN0LnNob3coKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZmF2b3JpdGVzID0gbmV3IE9ic2VydmFibGVBcnJheShmYXZvcml0ZXMpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJybWVzcyA9PiB0aGlzLmVyck1lc3MgPSBlcnJtZXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRGVsZXRlIGNhbmNlbGxlZCcpO1xuICAgICAgICAgIH1cbiAgICAgIH0pO1xuXG4gIH1cblxuICAgIHB1YmxpYyBvbkNlbGxTd2lwaW5nKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIHZhciBzd2lwZUxpbWl0cyA9IGFyZ3MuZGF0YS5zd2lwZUxpbWl0cztcbiAgICAgICAgdmFyIGN1cnJlbnRJdGVtVmlldyA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICB2YXIgY3VycmVudFZpZXc7XG5cbiAgICAgICAgaWYoYXJncy5kYXRhLnggPiAyMDApIHtcblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFyZ3MuZGF0YS54IDwgLTIwMCkge1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25Td2lwZUNlbGxTdGFydGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIHZhciBzd2lwZUxpbWl0cyA9IGFyZ3MuZGF0YS5zd2lwZUxpbWl0cztcbiAgICAgICAgdmFyIHN3aXBlVmlldyA9IGFyZ3NbJ29iamVjdCddO1xuXG4gICAgICAgIHZhciBsZWZ0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZCgnbWFyay12aWV3Jyk7XG4gICAgICAgIHZhciByaWdodEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQoJ2RlbGV0ZS12aWV3Jyk7XG4gICAgICAgIHN3aXBlTGltaXRzLmxlZnQgPSBsZWZ0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKClcbiAgICAgICAgc3dpcGVMaW1pdHMucmlnaHQgPSByaWdodEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpO1xuICAgICAgICBzd2lwZUxpbWl0cy50aHJlc2hvbGQgPSBsZWZ0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCkvMjtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Td2lwZUNlbGxGaW5pc2hlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIG9uTGVmdFN3aXBlQ2xpY2soYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0xlZnQgc3dpcGUgY2xpY2snKTtcbiAgICAgICAgdGhpcy5saXN0Vmlld0NvbXBvbmVudC5saXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uUmlnaHRTd2lwZUNsaWNrKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIHRoaXMuZGVsZXRlRmF2b3JpdGUoYXJncy5vYmplY3QuYmluZGluZ0NvbnRleHQuaWQpO1xuICAgICAgICB0aGlzLmxpc3RWaWV3Q29tcG9uZW50Lmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcbiAgICB9XG59XG4iXX0=