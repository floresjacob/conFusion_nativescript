"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var page_1 = require("ui/page");
var ReservationModalComponent = (function () {
    function ReservationModalComponent(params, page) {
        this.params = params;
        this.page = page;
        this.guestArray = [1, 2, 3, 4, 5, 6];
        this.isDateTime = false;
        if (params.context === "guest") {
            this.isDateTime = false;
        }
        else if (params.context === "date-time") {
            this.isDateTime = true;
        }
    }
    ReservationModalComponent.prototype.ngOnInit = function () {
        if (this.isDateTime) {
            var datePicker = this.page.getViewById('datePicker');
            var currentdate = new Date();
            datePicker.year = currentdate.getFullYear();
            datePicker.month = currentdate.getMonth() + 1;
            datePicker.day = currentdate.getDate();
            datePicker.minDate = currentdate;
            datePicker.maxDate = new Date(2045, 4, 12);
            var timePicker = this.page.getViewById('timePicker');
            timePicker.hour = currentdate.getHours();
            timePicker.minute = currentdate.getMinutes();
        }
    };
    ReservationModalComponent.prototype.submit = function () {
        if (this.isDateTime) {
            var datePicker = this.page.getViewById('datePicker');
            var selectedDate = datePicker.date;
            var timePicker = this.page.getViewById('timePicker');
            var selectedTime = timePicker.time;
            var reserveTime = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), selectedTime.getHours(), selectedTime.getMinutes());
            this.params.closeCallback(reserveTime.toISOString());
        }
        else {
            var picker = this.page.getViewById('guestPicker');
            this.params.closeCallback(this.guestArray[picker.selectedIndex]);
        }
    };
    ReservationModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './reservationmodal.component.html'
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams,
            page_1.Page])
    ], ReservationModalComponent);
    return ReservationModalComponent;
}());
exports.ReservationModalComponent = ReservationModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXJ2YXRpb25tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXNlcnZhdGlvbm1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxrRUFBc0U7QUFJdEUsZ0NBQStCO0FBTS9CO0lBTUksbUNBQW9CLE1BQXlCLEVBQ2pDLElBQVU7UUFERixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUNqQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBTHRCLGVBQVUsR0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFOUIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUtwQixFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQztJQUNULENBQUM7SUFFRCw0Q0FBUSxHQUFSO1FBRUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxVQUFVLEdBQTJCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFhLFlBQVksQ0FBQyxDQUFDO1lBRXpGLElBQUksV0FBVyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7WUFDbkMsVUFBVSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDNUMsVUFBVSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzlDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3ZDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO1lBQ2pDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUUzQyxJQUFJLFVBQVUsR0FBMkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQWEsWUFBWSxDQUFDLENBQUM7WUFDekYsVUFBVSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDekMsVUFBVSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDakQsQ0FBQztJQUNMLENBQUM7SUFFTSwwQ0FBTSxHQUFiO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxVQUFVLEdBQTJCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFhLFlBQVksQ0FBQyxDQUFDO1lBQ3pGLElBQUksWUFBWSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDbkMsSUFBSSxVQUFVLEdBQTJCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFhLFlBQVksQ0FBQyxDQUFDO1lBQ3pGLElBQUksWUFBWSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDbkMsSUFBSSxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxFQUN6QixZQUFZLENBQUMsUUFBUSxFQUFFLEVBQ3ZCLFlBQVksQ0FBQyxPQUFPLEVBQUUsRUFDdEIsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUN2QixZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUN6RCxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLE1BQU0sR0FBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQWEsYUFBYSxDQUFDLENBQUM7WUFDM0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQTtRQUNwRSxDQUFDO0lBQ0wsQ0FBQztJQXBEUSx5QkFBeUI7UUFKckMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsbUNBQW1DO1NBQ25ELENBQUM7eUNBTzhCLGdDQUFpQjtZQUMzQixXQUFJO09BUGIseUJBQXlCLENBcURyQztJQUFELGdDQUFDO0NBQUEsQUFyREQsSUFxREM7QUFyRFksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tICd1aS9kYXRlLXBpY2tlcic7XG5pbXBvcnQgeyBUaW1lUGlja2VyIH0gZnJvbSAndWkvdGltZS1waWNrZXInO1xuaW1wb3J0IHsgTGlzdFBpY2tlciB9IGZyb20gJ3VpL2xpc3QtcGlja2VyJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcmVzZXJ2YXRpb25tb2RhbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUmVzZXJ2YXRpb25Nb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBndWVzdEFycmF5PVsxLCAyLCAzLCA0LCA1LCA2XTtcbiAgICBndWVzdHM6IG51bWJlcjtcbiAgICBpc0RhdGVUaW1lOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSkge1xuXG4gICAgICAgICAgICBpZihwYXJhbXMuY29udGV4dCA9PT0gXCJndWVzdFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0RhdGVUaW1lID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHBhcmFtcy5jb250ZXh0ID09PSBcImRhdGUtdGltZVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0RhdGVUaW1lID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgICBpZiAodGhpcy5pc0RhdGVUaW1lKSB7XG4gICAgICAgICAgICBsZXQgZGF0ZVBpY2tlcjogRGF0ZVBpY2tlciA9IDxEYXRlUGlja2VyPnRoaXMucGFnZS5nZXRWaWV3QnlJZDxEYXRlUGlja2VyPignZGF0ZVBpY2tlcicpO1xuXG4gICAgICAgICAgICBsZXQgY3VycmVudGRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgZGF0ZVBpY2tlci55ZWFyID0gY3VycmVudGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIGRhdGVQaWNrZXIubW9udGggPSBjdXJyZW50ZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICAgICAgICAgIGRhdGVQaWNrZXIuZGF5ID0gY3VycmVudGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgZGF0ZVBpY2tlci5taW5EYXRlID0gY3VycmVudGRhdGU7XG4gICAgICAgICAgICBkYXRlUGlja2VyLm1heERhdGUgPSBuZXcgRGF0ZSgyMDQ1LCA0LCAxMik7XG5cbiAgICAgICAgICAgIGxldCB0aW1lUGlja2VyOiBUaW1lUGlja2VyID0gPFRpbWVQaWNrZXI+dGhpcy5wYWdlLmdldFZpZXdCeUlkPFRpbWVQaWNrZXI+KCd0aW1lUGlja2VyJyk7XG4gICAgICAgICAgICB0aW1lUGlja2VyLmhvdXIgPSBjdXJyZW50ZGF0ZS5nZXRIb3VycygpO1xuICAgICAgICAgICAgdGltZVBpY2tlci5taW51dGUgPSBjdXJyZW50ZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3VibWl0KCkge1xuICAgICAgICBpZiAodGhpcy5pc0RhdGVUaW1lKSB7XG4gICAgICAgICAgICBsZXQgZGF0ZVBpY2tlcjogRGF0ZVBpY2tlciA9IDxEYXRlUGlja2VyPnRoaXMucGFnZS5nZXRWaWV3QnlJZDxEYXRlUGlja2VyPignZGF0ZVBpY2tlcicpO1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkRGF0ZSA9IGRhdGVQaWNrZXIuZGF0ZTtcbiAgICAgICAgICAgIGxldCB0aW1lUGlja2VyOiBUaW1lUGlja2VyID0gPFRpbWVQaWNrZXI+dGhpcy5wYWdlLmdldFZpZXdCeUlkPFRpbWVQaWNrZXI+KCd0aW1lUGlja2VyJyk7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRUaW1lID0gdGltZVBpY2tlci50aW1lO1xuICAgICAgICAgICAgbGV0IHJlc2VydmVUaW1lID0gbmV3IERhdGUoc2VsZWN0ZWREYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWREYXRlLmdldE1vbnRoKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWREYXRlLmdldERhdGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRpbWUuZ2V0SG91cnMoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRpbWUuZ2V0TWludXRlcygpKTtcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzZXJ2ZVRpbWUudG9JU09TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgcGlja2VyID0gPExpc3RQaWNrZXI+IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxMaXN0UGlja2VyPignZ3Vlc3RQaWNrZXInKTtcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2sodGhpcy5ndWVzdEFycmF5W3BpY2tlci5zZWxlY3RlZEluZGV4XSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==