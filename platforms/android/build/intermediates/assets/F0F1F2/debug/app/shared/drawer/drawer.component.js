"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("ui/dialogs");
var application_settings_1 = require("application-settings");
var DrawerComponent = (function () {
    function DrawerComponent() {
    }
    DrawerComponent.prototype.displayLoginDialog = function () {
        var options = {
            title: "Login",
            message: 'Type Your Login Credentials',
            userName: application_settings_1.getString("userName", ""),
            password: application_settings_1.getString("password", ""),
            okButtonText: "Login",
            cancelButtonText: "Cancel"
        };
        dialogs_1.login(options)
            .then(function (loginResult) {
            application_settings_1.setString("userName", loginResult.userName);
            application_settings_1.setString("password", loginResult.password);
        }, function () {
            console.log('Login cancelled');
        });
    };
    DrawerComponent = __decorate([
        core_1.Component({
            selector: 'drawer-content',
            templateUrl: './shared/drawer/drawer.component.html',
        }),
        __metadata("design:paramtypes", [])
    ], DrawerComponent);
    return DrawerComponent;
}());
exports.DrawerComponent = DrawerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFDeEMsc0NBQWdEO0FBQ2hELDZEQUE0RDtBQU01RDtJQUVJO0lBQ0EsQ0FBQztJQUVELDRDQUFrQixHQUFsQjtRQUNJLElBQUksT0FBTyxHQUFHO1lBQ1YsS0FBSyxFQUFFLE9BQU87WUFDZCxPQUFPLEVBQUUsNkJBQTZCO1lBQ3RDLFFBQVEsRUFBRSxnQ0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7WUFDbkMsUUFBUSxFQUFFLGdDQUFTLENBQUMsVUFBVSxFQUFDLEVBQUUsQ0FBQztZQUNsQyxZQUFZLEVBQUUsT0FBTztZQUNyQixnQkFBZ0IsRUFBRSxRQUFRO1NBQzdCLENBQUE7UUFFRCxlQUFLLENBQUMsT0FBTyxDQUFDO2FBQ1QsSUFBSSxDQUFDLFVBQUMsV0FBd0I7WUFDM0IsZ0NBQVMsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLGdDQUFTLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxDQUFDLEVBQ0Q7WUFBUSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBdEJRLGVBQWU7UUFKM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLHVDQUF1QztTQUN2RCxDQUFDOztPQUNXLGVBQWUsQ0F3QjNCO0lBQUQsc0JBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQXhCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgbG9naW4sIExvZ2luUmVzdWx0IH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IGdldFN0cmluZywgc2V0U3RyaW5nIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZHJhd2VyLWNvbnRlbnQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zaGFyZWQvZHJhd2VyL2RyYXdlci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERyYXdlckNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBkaXNwbGF5TG9naW5EaWFsb2coKSB7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGU6IFwiTG9naW5cIixcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdUeXBlIFlvdXIgTG9naW4gQ3JlZGVudGlhbHMnLFxuICAgICAgICAgICAgdXNlck5hbWU6IGdldFN0cmluZyhcInVzZXJOYW1lXCIsIFwiXCIpLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IGdldFN0cmluZyhcInBhc3N3b3JkXCIsXCJcIiksXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiTG9naW5cIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcbiAgICAgICAgfVxuXG4gICAgICAgIGxvZ2luKG9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbigobG9naW5SZXN1bHQ6IExvZ2luUmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0U3RyaW5nKFwidXNlck5hbWVcIiwgbG9naW5SZXN1bHQudXNlck5hbWUpO1xuICAgICAgICAgICAgICAgIHNldFN0cmluZyhcInBhc3N3b3JkXCIsIGxvZ2luUmVzdWx0LnBhc3N3b3JkKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoKSA9PiB7IGNvbnNvbGUubG9nKCdMb2dpbiBjYW5jZWxsZWQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=