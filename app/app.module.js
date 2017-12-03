"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var angular_2 = require("nativescript-telerik-ui/listview/angular");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var home_component_1 = require("./home/home.component");
var menu_component_1 = require("./menu/menu.component");
var dishdetail_component_1 = require("./dishdetail/dishdetail.component");
var drawer_component_1 = require("./shared/drawer/drawer.component");
var contact_component_1 = require("./contact/contact.component");
var about_component_1 = require("./about/about.component");
var favorites_component_1 = require("./favorites/favorites.component");
var promotion_service_1 = require("./services/promotion.service");
var leader_service_1 = require("./services/leader.service");
var dish_service_1 = require("./services/dish.service");
var process_httpmsg_service_1 = require("./services/process-httpmsg.service");
var favorite_service_1 = require("./services/favorite.service");
var baseurl_1 = require("./shared/baseurl");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
var AppModule = (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                http_1.NativeScriptHttpModule,
                angular_1.NativeScriptUISideDrawerModule,
                angular_2.NativeScriptUIListViewModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                    'fa': './fonts/font-awesome.min.css'
                }),
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                menu_component_1.MenuComponent,
                dishdetail_component_1.DishdetailComponent,
                drawer_component_1.DrawerComponent,
                contact_component_1.ContactComponent,
                about_component_1.AboutComponent,
                favorites_component_1.FavoritesComponent
            ],
            providers: [
                { provide: 'BaseURL', useValue: baseurl_1.baseURL },
                dish_service_1.DishService,
                promotion_service_1.PromotionService,
                leader_service_1.LeaderService,
                process_httpmsg_service_1.ProcessHTTPMsgService,
                favorite_service_1.FavoriteService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLGtEQUFtRTtBQUNuRSxzRUFBNEY7QUFDNUYsdUVBQThEO0FBQzlELG9FQUF3RjtBQUV4RixpREFBK0M7QUFDL0MsNkNBQWlEO0FBQ2pELHdEQUFzRDtBQUN0RCx3REFBc0Q7QUFDdEQsMEVBQXdFO0FBQ3hFLHFFQUFtRTtBQUNuRSxpRUFBK0Q7QUFDL0QsMkRBQXlEO0FBQ3pELHVFQUFxRTtBQUVyRSxrRUFBZ0U7QUFDaEUsNERBQTBEO0FBQzFELHdEQUFzRDtBQUN0RCw4RUFBMkU7QUFDM0UsZ0VBQThEO0FBRTlELDRDQUEyQztBQUUzQywyRUFBMkU7QUFDM0Usd0VBQXdFO0FBRXhFLDZFQUE2RTtBQUM3RSxzRUFBc0U7QUF5Q3RFO0lBSEE7O01BRUU7SUFDRjtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXZDckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiw4QkFBZ0I7Z0JBQ2hCLDZCQUFzQjtnQkFDdEIsd0NBQThCO2dCQUM5QixzQ0FBNEI7Z0JBQzVCLDZDQUFpQixDQUFDLE9BQU8sQ0FBQztvQkFDeEIsSUFBSSxFQUFFLDhCQUE4QjtpQkFDckMsQ0FBQzthQUNMO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLDhCQUFhO2dCQUNiLDhCQUFhO2dCQUNiLDBDQUFtQjtnQkFDbkIsa0NBQWU7Z0JBQ2Ysb0NBQWdCO2dCQUNoQixnQ0FBYztnQkFDZCx3Q0FBa0I7YUFDckI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsRUFBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxpQkFBTyxFQUFDO2dCQUN2QywwQkFBVztnQkFDWCxvQ0FBZ0I7Z0JBQ2hCLDhCQUFhO2dCQUNiLCtDQUFxQjtnQkFDckIsa0NBQWU7YUFDbEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvbGlzdHZpZXcvYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSBcIi4vbWVudS9tZW51LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRGlzaGRldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2Rpc2hkZXRhaWwvZGlzaGRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IERyYXdlckNvbXBvbmVudCB9IGZyb20gXCIuL3NoYXJlZC9kcmF3ZXIvZHJhd2VyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29udGFjdENvbXBvbmVudCB9IGZyb20gXCIuL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSBcIi4vYWJvdXQvYWJvdXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGYXZvcml0ZXNDb21wb25lbnQgfSBmcm9tIFwiLi9mYXZvcml0ZXMvZmF2b3JpdGVzLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBQcm9tb3Rpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvcHJvbW90aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7IExlYWRlclNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9sZWFkZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgRGlzaFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9kaXNoLnNlcnZpY2VcIjtcbmltcG9ydCB7IFByb2Nlc3NIVFRQTXNnU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3Byb2Nlc3MtaHR0cG1zZy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGYXZvcml0ZVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9mYXZvcml0ZS5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IGJhc2VVUkwgfSBmcm9tIFwiLi9zaGFyZWQvYmFzZXVybFwiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSFRUUCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBUTlNGb250SWNvbk1vZHVsZS5mb3JSb290KHtcbiAgICAgICAgICAnZmEnOiAnLi9mb250cy9mb250LWF3ZXNvbWUubWluLmNzcydcbiAgICAgICAgfSksXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgICBNZW51Q29tcG9uZW50LFxuICAgICAgICBEaXNoZGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBEcmF3ZXJDb21wb25lbnQsXG4gICAgICAgIENvbnRhY3RDb21wb25lbnQsXG4gICAgICAgIEFib3V0Q29tcG9uZW50LFxuICAgICAgICBGYXZvcml0ZXNDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7cHJvdmlkZTogJ0Jhc2VVUkwnLCB1c2VWYWx1ZTogYmFzZVVSTH0sXG4gICAgICAgIERpc2hTZXJ2aWNlLFxuICAgICAgICBQcm9tb3Rpb25TZXJ2aWNlLFxuICAgICAgICBMZWFkZXJTZXJ2aWNlLFxuICAgICAgICBQcm9jZXNzSFRUUE1zZ1NlcnZpY2UsXG4gICAgICAgIEZhdm9yaXRlU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==