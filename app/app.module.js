"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var angular_2 = require("nativescript-telerik-ui/listview/angular");
var forms_1 = require("nativescript-angular/forms");
var forms_2 = require("@angular/forms");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var home_component_1 = require("./home/home.component");
var menu_component_1 = require("./menu/menu.component");
var dishdetail_component_1 = require("./dishdetail/dishdetail.component");
var drawer_component_1 = require("./shared/drawer/drawer.component");
var contact_component_1 = require("./contact/contact.component");
var about_component_1 = require("./about/about.component");
var favorites_component_1 = require("./favorites/favorites.component");
var reservation_component_1 = require("./reservation/reservation.component");
var reservationmodal_component_1 = require("./reservationmodal/reservationmodal.component");
var comment_component_1 = require("./comment/comment.component");
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
                forms_1.NativeScriptFormsModule,
                forms_2.ReactiveFormsModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                menu_component_1.MenuComponent,
                dishdetail_component_1.DishdetailComponent,
                drawer_component_1.DrawerComponent,
                contact_component_1.ContactComponent,
                about_component_1.AboutComponent,
                favorites_component_1.FavoritesComponent,
                reservation_component_1.ReservationComponent,
                reservationmodal_component_1.ReservationModalComponent,
                comment_component_1.CommentComponent
            ],
            providers: [
                { provide: 'BaseURL', useValue: baseurl_1.baseURL },
                dish_service_1.DishService,
                promotion_service_1.PromotionService,
                leader_service_1.LeaderService,
                process_httpmsg_service_1.ProcessHTTPMsgService,
                favorite_service_1.FavoriteService
            ],
            entryComponents: [
                reservationmodal_component_1.ReservationModalComponent,
                comment_component_1.CommentComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLGtEQUFtRTtBQUNuRSxzRUFBNEY7QUFDNUYsdUVBQThEO0FBQzlELG9FQUF3RjtBQUN4RixvREFBcUU7QUFDckUsd0NBQXFEO0FBRXJELGlEQUErQztBQUMvQyw2Q0FBaUQ7QUFDakQsd0RBQXNEO0FBQ3RELHdEQUFzRDtBQUN0RCwwRUFBd0U7QUFDeEUscUVBQW1FO0FBQ25FLGlFQUErRDtBQUMvRCwyREFBeUQ7QUFDekQsdUVBQXFFO0FBQ3JFLDZFQUEyRTtBQUMzRSw0RkFBMEY7QUFDMUYsaUVBQStEO0FBRS9ELGtFQUFnRTtBQUNoRSw0REFBMEQ7QUFDMUQsd0RBQXNEO0FBQ3RELDhFQUEyRTtBQUMzRSxnRUFBOEQ7QUFFOUQsNENBQTJDO0FBRTNDLDJFQUEyRTtBQUMzRSx3RUFBd0U7QUFFeEUsNkVBQTZFO0FBQzdFLHNFQUFzRTtBQWtEdEU7SUFIQTs7TUFFRTtJQUNGO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBaERyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLDhCQUFnQjtnQkFDaEIsNkJBQXNCO2dCQUN0Qix3Q0FBOEI7Z0JBQzlCLHNDQUE0QjtnQkFDNUIsNkNBQWlCLENBQUMsT0FBTyxDQUFDO29CQUN4QixJQUFJLEVBQUUsOEJBQThCO2lCQUNyQyxDQUFDO2dCQUNGLCtCQUF1QjtnQkFDdkIsMkJBQW1CO2FBQ3RCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLDhCQUFhO2dCQUNiLDhCQUFhO2dCQUNiLDBDQUFtQjtnQkFDbkIsa0NBQWU7Z0JBQ2Ysb0NBQWdCO2dCQUNoQixnQ0FBYztnQkFDZCx3Q0FBa0I7Z0JBQ2xCLDRDQUFvQjtnQkFDcEIsc0RBQXlCO2dCQUN6QixvQ0FBZ0I7YUFDbkI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsRUFBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxpQkFBTyxFQUFDO2dCQUN2QywwQkFBVztnQkFDWCxvQ0FBZ0I7Z0JBQ2hCLDhCQUFhO2dCQUNiLCtDQUFxQjtnQkFDckIsa0NBQWU7YUFDbEI7WUFDRCxlQUFlLEVBQUU7Z0JBQ2Ysc0RBQXlCO2dCQUN6QixvQ0FBZ0I7YUFDakI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1lbnVDb21wb25lbnQgfSBmcm9tIFwiLi9tZW51L21lbnUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEaXNoZGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vZGlzaGRldGFpbC9kaXNoZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIi4vc2hhcmVkL2RyYXdlci9kcmF3ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDb250YWN0Q29tcG9uZW50IH0gZnJvbSBcIi4vY29udGFjdC9jb250YWN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tIFwiLi9hYm91dC9hYm91dC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZhdm9yaXRlc0NvbXBvbmVudCB9IGZyb20gXCIuL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZXNlcnZhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcmVzZXJ2YXRpb24vcmVzZXJ2YXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IFJlc2VydmF0aW9uTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi9yZXNlcnZhdGlvbm1vZGFsL3Jlc2VydmF0aW9ubW9kYWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDb21tZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tbWVudC9jb21tZW50LmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBQcm9tb3Rpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvcHJvbW90aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7IExlYWRlclNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9sZWFkZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgRGlzaFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9kaXNoLnNlcnZpY2VcIjtcbmltcG9ydCB7IFByb2Nlc3NIVFRQTXNnU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3Byb2Nlc3MtaHR0cG1zZy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGYXZvcml0ZVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9mYXZvcml0ZS5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IGJhc2VVUkwgfSBmcm9tIFwiLi9zaGFyZWQvYmFzZXVybFwiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSFRUUCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBUTlNGb250SWNvbk1vZHVsZS5mb3JSb290KHtcbiAgICAgICAgICAnZmEnOiAnLi9mb250cy9mb250LWF3ZXNvbWUubWluLmNzcydcbiAgICAgICAgfSksXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgTWVudUNvbXBvbmVudCxcbiAgICAgICAgRGlzaGRldGFpbENvbXBvbmVudCxcbiAgICAgICAgRHJhd2VyQ29tcG9uZW50LFxuICAgICAgICBDb250YWN0Q29tcG9uZW50LFxuICAgICAgICBBYm91dENvbXBvbmVudCxcbiAgICAgICAgRmF2b3JpdGVzQ29tcG9uZW50LFxuICAgICAgICBSZXNlcnZhdGlvbkNvbXBvbmVudCxcbiAgICAgICAgUmVzZXJ2YXRpb25Nb2RhbENvbXBvbmVudCxcbiAgICAgICAgQ29tbWVudENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtwcm92aWRlOiAnQmFzZVVSTCcsIHVzZVZhbHVlOiBiYXNlVVJMfSxcbiAgICAgICAgRGlzaFNlcnZpY2UsXG4gICAgICAgIFByb21vdGlvblNlcnZpY2UsXG4gICAgICAgIExlYWRlclNlcnZpY2UsXG4gICAgICAgIFByb2Nlc3NIVFRQTXNnU2VydmljZSxcbiAgICAgICAgRmF2b3JpdGVTZXJ2aWNlXG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgIFJlc2VydmF0aW9uTW9kYWxDb21wb25lbnQsXG4gICAgICBDb21tZW50Q29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19