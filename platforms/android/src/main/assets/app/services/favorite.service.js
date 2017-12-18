"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var couchbase_service_1 = require("../services/couchbase.service");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
var FavoriteService = (function () {
    function FavoriteService(dishservice, couchbaseService) {
        this.dishservice = dishservice;
        this.couchbaseService = couchbaseService;
        this.docId = "favorites";
        this.favorites = [];
        var doc = this.couchbaseService.getDocument(this.docId);
        if (doc == null) {
            this.couchbaseService.createDocument({ "favorites": [] }, this.docId);
        }
        else {
            this.favorites = doc.favorites;
        }
    }
    FavoriteService.prototype.isFavorite = function (id) {
        return this.favorites.some(function (el) { return el === id; });
    };
    FavoriteService.prototype.addFavorite = function (id) {
        if (!this.isFavorite(id)) {
            this.favorites.push(id);
            this.couchbaseService.updateDocument(this.docId, { "favorites": this.favorites });
        }
        return true;
    };
    FavoriteService.prototype.getFavorites = function () {
        var _this = this;
        return this.dishservice.getDishes()
            .map(function (dishes) { return dishes.filter(function (dish) { return _this.favorites.some(function (el) { return el === dish.id; }); }); });
    };
    FavoriteService.prototype.deleteFavorite = function (id) {
        var index = this.favorites.indexOf(id);
        if (index >= 0) {
            this.favorites.splice(index, 1);
            this.couchbaseService.updateDocument(this.docId, { "favorites": this.favorites });
            return this.getFavorites();
        }
        else {
            console.log('Deleting non-existant favorite', id);
            return Observable_1.Observable.throw('Deleting non-existant favorite');
        }
    };
    FavoriteService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [dish_service_1.DishService,
            couchbase_service_1.CouchbaseService])
    ], FavoriteService);
    return FavoriteService;
}());
exports.FavoriteService = FavoriteService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhdm9yaXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MseURBQXVEO0FBQ3ZELG1FQUFpRTtBQUVqRSw4Q0FBNkM7QUFDN0MsaUNBQStCO0FBSy9CO0lBS0kseUJBQW9CLFdBQXdCLEVBQ3BDLGdCQUFrQztRQUR0QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNwQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSDFDLFVBQUssR0FBVyxXQUFXLENBQUM7UUFJeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFFcEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEQsRUFBRSxDQUFBLENBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxFQUFDLFdBQVcsRUFBRSxFQUFFLEVBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEUsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ2pDLENBQUM7SUFDVCxDQUFDO0lBSUQsb0NBQVUsR0FBVixVQUFXLEVBQVU7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxLQUFLLEVBQUUsRUFBVCxDQUFTLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLEVBQVU7UUFDcEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUM7UUFDbEYsQ0FBQztRQUVMLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsc0NBQVksR0FBWjtRQUFBLGlCQUdDO1FBRkcsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO2FBQzlCLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxFQUFkLENBQWMsQ0FBQyxFQUF6QyxDQUF5QyxDQUFDLEVBQWhFLENBQWdFLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRUQsd0NBQWMsR0FBZCxVQUFlLEVBQVU7UUFDdkIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO1lBQ2hGLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0IsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNsRCxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUM1RCxDQUFDO0lBQ0gsQ0FBQztJQWpEUSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7eUNBTXdCLDBCQUFXO1lBQ2xCLG9DQUFnQjtPQU5qQyxlQUFlLENBa0QzQjtJQUFELHNCQUFDO0NBQUEsQUFsREQsSUFrREM7QUFsRFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXNoIH0gZnJvbSAnLi4vc2hhcmVkL2Rpc2gnO1xuaW1wb3J0IHsgRGlzaFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kaXNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ291Y2hiYXNlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvdWNoYmFzZS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmF2b3JpdGVTZXJ2aWNlIHtcblxuICAgIGZhdm9yaXRlczogQXJyYXk8bnVtYmVyPjtcbiAgICBkb2NJZDogc3RyaW5nID0gXCJmYXZvcml0ZXNcIjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlzaHNlcnZpY2U6IERpc2hTZXJ2aWNlLFxuICAgIHByaXZhdGUgY291Y2hiYXNlU2VydmljZTogQ291Y2hiYXNlU2VydmljZSkge1xuICAgICAgICB0aGlzLmZhdm9yaXRlcyA9IFtdO1xuXG4gICAgICAgIGxldCBkb2MgPSB0aGlzLmNvdWNoYmFzZVNlcnZpY2UuZ2V0RG9jdW1lbnQodGhpcy5kb2NJZCk7XG4gICAgICAgICAgaWYoIGRvYyA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNvdWNoYmFzZVNlcnZpY2UuY3JlYXRlRG9jdW1lbnQoe1wiZmF2b3JpdGVzXCI6IFtdfSwgdGhpcy5kb2NJZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmZhdm9yaXRlcyA9IGRvYy5mYXZvcml0ZXM7XG4gICAgICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIGlzRmF2b3JpdGUoaWQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5mYXZvcml0ZXMuc29tZShlbCA9PiBlbCA9PT0gaWQpO1xuICAgIH1cblxuICAgIGFkZEZhdm9yaXRlKGlkOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgIGlmICghdGhpcy5pc0Zhdm9yaXRlKGlkKSkge1xuICAgICAgICAgICAgdGhpcy5mYXZvcml0ZXMucHVzaChpZCk7XG4gICAgICAgICAgICB0aGlzLmNvdWNoYmFzZVNlcnZpY2UudXBkYXRlRG9jdW1lbnQodGhpcy5kb2NJZCwge1wiZmF2b3JpdGVzXCI6IHRoaXMuZmF2b3JpdGVzfSk7XG4gICAgICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRGYXZvcml0ZXMoKTogT2JzZXJ2YWJsZTxEaXNoW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzaHNlcnZpY2UuZ2V0RGlzaGVzKClcbiAgICAgICAgICAgIC5tYXAoZGlzaGVzID0+IGRpc2hlcy5maWx0ZXIoZGlzaCA9PiB0aGlzLmZhdm9yaXRlcy5zb21lKGVsID0+IGVsID09PSBkaXNoLmlkKSkpO1xuICAgIH1cblxuICAgIGRlbGV0ZUZhdm9yaXRlKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPERpc2hbXT4ge1xuICAgICAgbGV0IGluZGV4ID0gdGhpcy5mYXZvcml0ZXMuaW5kZXhPZihpZCk7XG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICB0aGlzLmZhdm9yaXRlcy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgICAgIHRoaXMuY291Y2hiYXNlU2VydmljZS51cGRhdGVEb2N1bWVudCh0aGlzLmRvY0lkLCB7XCJmYXZvcml0ZXNcIjogdGhpcy5mYXZvcml0ZXN9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmF2b3JpdGVzKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0RlbGV0aW5nIG5vbi1leGlzdGFudCBmYXZvcml0ZScsIGlkKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coJ0RlbGV0aW5nIG5vbi1leGlzdGFudCBmYXZvcml0ZScpO1xuICAgICAgfVxuICAgIH1cbn1cbiJdfQ==