"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var home_component_1 = require("./home/home.component");
var menu_component_1 = require("./menu/menu.component");
var dishdetail_component_1 = require("./dishdetail/dishdetail.component");
var contact_component_1 = require("./contact/contact.component");
var about_component_1 = require("./about/about.component");
var favorites_component_1 = require("./favorites/favorites.component");
var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: home_component_1.HomeComponent },
    { path: "menu", component: menu_component_1.MenuComponent },
    { path: "dishdetail/:id", component: dishdetail_component_1.DishdetailComponent },
    { path: "contact", component: contact_component_1.ContactComponent },
    { path: "about", component: about_component_1.AboutComponent },
    { path: "favorites", component: favorites_component_1.FavoritesComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsd0RBQXNEO0FBQ3RELHdEQUFzRDtBQUN0RCwwRUFBd0U7QUFDeEUsaUVBQStEO0FBQy9ELDJEQUF5RDtBQUN6RCx1RUFBcUU7QUFFckUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQztJQUNuRCxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUM7SUFDeEMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFDO0lBQ3hDLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSwwQ0FBbUIsRUFBRTtJQUN6RCxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFDO0lBQzlDLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBQztJQUN6QyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHdDQUFrQixFQUFDO0NBRXJELENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1lbnVDb21wb25lbnQgfSBmcm9tIFwiLi9tZW51L21lbnUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEaXNoZGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vZGlzaGRldGFpbC9kaXNoZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29udGFjdENvbXBvbmVudCB9IGZyb20gXCIuL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSBcIi4vYWJvdXQvYWJvdXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGYXZvcml0ZXNDb21wb25lbnQgfSBmcm9tIFwiLi9mYXZvcml0ZXMvZmF2b3JpdGVzLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2hvbWVcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIn0sXG4gICAge3BhdGg6IFwiaG9tZVwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnR9LFxuICAgIHtwYXRoOiBcIm1lbnVcIiwgY29tcG9uZW50OiBNZW51Q29tcG9uZW50fSxcbiAgICB7cGF0aDogXCJkaXNoZGV0YWlsLzppZFwiLCBjb21wb25lbnQ6IERpc2hkZXRhaWxDb21wb25lbnQgfSxcbiAgICB7cGF0aDogXCJjb250YWN0XCIsIGNvbXBvbmVudDogQ29udGFjdENvbXBvbmVudH0sXG4gICAge3BhdGg6XCJhYm91dFwiLCBjb21wb25lbnQ6IEFib3V0Q29tcG9uZW50fSxcbiAgICB7cGF0aDogXCJmYXZvcml0ZXNcIiwgY29tcG9uZW50OiBGYXZvcml0ZXNDb21wb25lbnR9LFxuXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIl19