"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var drawer_page_1 = require("../shared/drawer/drawer.page");
var forms_1 = require("@angular/forms");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var reservationmodal_component_1 = require("../reservationmodal/reservationmodal.component");
var page_1 = require("ui/page");
var enums = require("ui/enums");
var couchbase_service_1 = require("../services/couchbase.service");
var ReservationComponent = (function (_super) {
    __extends(ReservationComponent, _super);
    function ReservationComponent(changeDetectorRef, formBuilder, modalService, vcRef, page, couchbaseService) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.formBuilder = formBuilder;
        _this.modalService = modalService;
        _this.vcRef = vcRef;
        _this.page = page;
        _this.couchbaseService = couchbaseService;
        _this.showForm = true;
        _this.docId = "reservations";
        _this.reservation = _this.formBuilder.group({
            guests: 3,
            smoking: false,
            dateTime: ['', forms_1.Validators.required]
        });
        return _this;
    }
    ReservationComponent.prototype.ngOnInit = function () {
    };
    ReservationComponent.prototype.onSmokingChecked = function (args) {
        var smokingSwitch = args.object;
        if (smokingSwitch.checked) {
            this.reservation.patchValue({ smoking: true });
        }
        else {
            this.reservation.patchValue({ smoking: false });
        }
    };
    ReservationComponent.prototype.onGuestChange = function (args) {
        var textField = args.object;
        this.reservation.patchValue({ guests: textField.text });
    };
    ReservationComponent.prototype.onDateTimeChange = function (args) {
        var textField = args.object;
        this.reservation.patchValue({ dateTime: textField.text });
    };
    ReservationComponent.prototype.createModalView = function (args) {
        var _this = this;
        var options = {
            viewContainerRef: this.vcRef,
            context: args,
            fullscreen: false
        };
        this.modalService.showModal(reservationmodal_component_1.ReservationModalComponent, options)
            .then(function (result) {
            if (args === "guest") {
                _this.reservation.patchValue({ guests: result });
            }
            else if (args === "date-time") {
                _this.reservation.patchValue({ dateTime: result });
            }
        });
    };
    ReservationComponent.prototype.onSubmit = function () {
        var _this = this;
        var doc = this.couchbaseService.getDocument(this.docId);
        var reservations = [];
        if (doc == null) {
            console.log('This is the first reservation');
            this.couchbaseService.createDocument({ "reservations": [] }, this.docId);
        }
        else {
            reservations = doc.reservations;
        }
        console.log(JSON.stringify(this.reservation.value));
        reservations.push(this.reservation.value);
        this.couchbaseService.updateDocument(this.docId, { "reservations": reservations });
        console.log(JSON.stringify(this.couchbaseService.getDocument(this.docId)));
        var reservationView = this.page.getViewById('reservationView');
        var resultView = this.page.getViewById('resultView');
        resultView.animate({
            scale: { x: 0, y: 0 },
            opacity: 0,
        })
            .catch(function (e) {
            console.log(e.message);
        });
        reservationView.animate({
            opacity: 0,
            scale: { x: 0, y: 0 },
            duration: 500,
            curve: enums.AnimationCurve.easeIn
        })
            .then(function () {
            _this.showForm = false;
            resultView.animate({
                opacity: 1,
                scale: { x: 1, y: 1 },
                duration: 500,
                curve: enums.AnimationCurve.easeIn
            });
        })
            .catch(function (e) {
            console.log(e.message);
        });
    };
    ReservationComponent = __decorate([
        core_1.Component({
            selector: 'app-reservation',
            moduleId: module.id,
            templateUrl: './reservation.component.html'
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            forms_1.FormBuilder,
            modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef,
            page_1.Page,
            couchbase_service_1.CouchbaseService])
    ], ReservationComponent);
    return ReservationComponent;
}(drawer_page_1.DrawerPage));
exports.ReservationComponent = ReservationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXJ2YXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzZXJ2YXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStGO0FBQy9GLDREQUEwRDtBQUcxRCx3Q0FBbUU7QUFFbkUsa0VBQTJGO0FBQzNGLDZGQUEyRjtBQUUzRixnQ0FBK0I7QUFHL0IsZ0NBQWtDO0FBQ2xDLG1FQUFpRTtBQU9qRTtJQUEwQyx3Q0FBVTtJQU9oRCw4QkFBb0IsaUJBQW9DLEVBQzVDLFdBQXdCLEVBQ3hCLFlBQWdDLEVBQ2hDLEtBQXVCLEVBQ3ZCLElBQVUsRUFDVixnQkFBa0M7UUFMOUMsWUFNUSxrQkFBTSxpQkFBaUIsQ0FBQyxTQU8vQjtRQWJtQix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzVDLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGtCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxXQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixVQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1Ysc0JBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVI5QyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLFdBQUssR0FBVyxjQUFjLENBQUM7UUFVdkIsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUN0QyxNQUFNLEVBQUUsQ0FBQztZQUNULE9BQU8sRUFBRSxLQUFLO1lBQ2QsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3RDLENBQUMsQ0FBQzs7SUFDWCxDQUFDO0lBRUQsdUNBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCwrQ0FBZ0IsR0FBaEIsVUFBaUIsSUFBSTtRQUNqQixJQUFJLGFBQWEsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3hDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FB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QW9CO1FBTGhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsOEJBQThCO1NBQzlDLENBQUM7eUNBUXlDLHdCQUFpQjtZQUMvQixtQkFBVztZQUNWLGlDQUFrQjtZQUN6Qix1QkFBZ0I7WUFDakIsV0FBSTtZQUNRLG9DQUFnQjtPQVpyQyxvQkFBb0IsQ0FxSGhDO0lBQUQsMkJBQUM7Q0FBQSxBQXJIRCxDQUEwQyx3QkFBVSxHQXFIbkQ7QUFySFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERyYXdlclBhZ2UgfSBmcm9tICcuLi9zaGFyZWQvZHJhd2VyL2RyYXdlci5wYWdlJztcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ3VpL3RleHQtZmllbGQnO1xuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSAndWkvc3dpdGNoJztcbmltcG9ydCB7IFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBSZXNlcnZhdGlvbk1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uL3Jlc2VydmF0aW9ubW9kYWwvcmVzZXJ2YXRpb25tb2RhbC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBBbmltYXRpb24sIEFuaW1hdGlvbkRlZmluaXRpb24gfSBmcm9tIFwidWkvYW5pbWF0aW9uXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuaW1wb3J0ICogYXMgZW51bXMgZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgeyBDb3VjaGJhc2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY291Y2hiYXNlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1yZXNlcnZhdGlvbicsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcmVzZXJ2YXRpb24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFJlc2VydmF0aW9uQ29tcG9uZW50IGV4dGVuZHMgRHJhd2VyUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICByZXNlcnZhdGlvbjogRm9ybUdyb3VwO1xuXG4gICAgc2hvd0Zvcm06IGJvb2xlYW4gPSB0cnVlO1xuICAgIGRvY0lkOiBzdHJpbmcgPSBcInJlc2VydmF0aW9uc1wiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgIHByaXZhdGUgY291Y2hiYXNlU2VydmljZTogQ291Y2hiYXNlU2VydmljZSkge1xuICAgICAgICAgICAgc3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYpO1xuXG4gICAgICAgICAgICB0aGlzLnJlc2VydmF0aW9uID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICAgICAgZ3Vlc3RzOiAzLFxuICAgICAgICAgICAgICAgIHNtb2tpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRhdGVUaW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgIH1cblxuICAgIG9uU21va2luZ0NoZWNrZWQoYXJncykge1xuICAgICAgICBsZXQgc21va2luZ1N3aXRjaCA9IDxTd2l0Y2g+YXJncy5vYmplY3Q7XG4gICAgICAgIGlmIChzbW9raW5nU3dpdGNoLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXJ2YXRpb24ucGF0Y2hWYWx1ZSh7IHNtb2tpbmc6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlc2VydmF0aW9uLnBhdGNoVmFsdWUoeyBzbW9raW5nOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uR3Vlc3RDaGFuZ2UoYXJncykge1xuICAgICAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcblxuICAgICAgICB0aGlzLnJlc2VydmF0aW9uLnBhdGNoVmFsdWUoeyBndWVzdHM6IHRleHRGaWVsZC50ZXh0fSk7XG4gICAgfVxuXG4gICAgb25EYXRlVGltZUNoYW5nZShhcmdzKSB7XG4gICAgICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xuXG4gICAgICAgIHRoaXMucmVzZXJ2YXRpb24ucGF0Y2hWYWx1ZSh7IGRhdGVUaW1lOiB0ZXh0RmllbGQudGV4dH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZU1vZGFsVmlldyhhcmdzKSB7XG5cbiAgICAgICAgbGV0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXG4gICAgICAgICAgICBjb250ZXh0OiBhcmdzLFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoUmVzZXJ2YXRpb25Nb2RhbENvbXBvbmVudCwgb3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhcmdzID09PSBcImd1ZXN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNlcnZhdGlvbi5wYXRjaFZhbHVlKHtndWVzdHM6IHJlc3VsdH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhcmdzID09PSBcImRhdGUtdGltZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXJ2YXRpb24ucGF0Y2hWYWx1ZSh7IGRhdGVUaW1lOiByZXN1bHR9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgICAgbGV0IGRvYyA9IHRoaXMuY291Y2hiYXNlU2VydmljZS5nZXREb2N1bWVudCh0aGlzLmRvY0lkKTtcblxuICAgICAgICBsZXQgcmVzZXJ2YXRpb25zIDogIEFycmF5PG9iamVjdD4gPSBbXTtcblxuICAgICAgICBpZiAoZG9jID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGlzIHRoZSBmaXJzdCByZXNlcnZhdGlvbicpO1xuICAgICAgICAgICAgdGhpcy5jb3VjaGJhc2VTZXJ2aWNlLmNyZWF0ZURvY3VtZW50KHsgXCJyZXNlcnZhdGlvbnNcIjogW10gfSwgdGhpcy5kb2NJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXNlcnZhdGlvbnMgPSBkb2MucmVzZXJ2YXRpb25zO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucmVzZXJ2YXRpb24udmFsdWUpKTtcbiAgICAgICAgcmVzZXJ2YXRpb25zLnB1c2godGhpcy5yZXNlcnZhdGlvbi52YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5jb3VjaGJhc2VTZXJ2aWNlLnVwZGF0ZURvY3VtZW50KHRoaXMuZG9jSWQsIHsgXCJyZXNlcnZhdGlvbnNcIjogcmVzZXJ2YXRpb25zIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuY291Y2hiYXNlU2VydmljZS5nZXREb2N1bWVudCh0aGlzLmRvY0lkKSkpO1xuXG4gICAgICAgIGxldCByZXNlcnZhdGlvblZpZXc6IFZpZXcgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oJ3Jlc2VydmF0aW9uVmlldycpO1xuICAgICAgICBsZXQgcmVzdWx0VmlldzogVmlldyA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PigncmVzdWx0VmlldycpO1xuXG4gICAgICAgIHJlc3VsdFZpZXcuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY2FsZTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJlc2VydmF0aW9uVmlldy5hbmltYXRlKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICBzY2FsZTogeyB4OiAwLCB5OiAwfSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0Zvcm0gPSBmYWxzZTtcbiAgICAgICAgICAgIHJlc3VsdFZpZXcuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICBzY2FsZTogeyB4OiAxLCB5OiAxfSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxufVxuIl19