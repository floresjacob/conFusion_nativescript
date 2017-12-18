"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var page_1 = require("ui/page");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var CommentComponent = (function () {
    function CommentComponent(changeDetectorRef, formBuilder, page, params) {
        this.changeDetectorRef = changeDetectorRef;
        this.formBuilder = formBuilder;
        this.page = page;
        this.params = params;
        this.isDateTime = false;
        this.commentForm = this.formBuilder.group({
            author: ['', forms_1.Validators.required],
            rating: 5,
            comment: ['', forms_1.Validators.required],
        });
    }
    CommentComponent.prototype.ngOnInit = function () {
    };
    CommentComponent.prototype.onRatingChecked = function (args) {
        var rating = args.object;
        this.commentForm.patchValue({ rating: rating });
    };
    CommentComponent.prototype.onNameChecked = function (args) {
        var textField = args.object;
        this.commentForm.patchValue({ author: textField.text });
    };
    CommentComponent.prototype.onCommentChecked = function (args) {
        var textField = args.object;
        this.commentForm.patchValue({ comment: textField.text });
    };
    CommentComponent.prototype.onSubmit = function () {
        var date = new Date();
        var isoDate = date.toISOString();
        console.log(this.commentForm.value);
        var comment = this.commentForm.value;
        comment["date"] = (isoDate);
        this.params.closeCallback(comment);
    };
    CommentComponent = __decorate([
        core_1.Component({
            selector: 'app-reservation',
            moduleId: module.id,
            templateUrl: './comment.component.html'
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            forms_1.FormBuilder,
            page_1.Page,
            modal_dialog_1.ModalDialogParams])
    ], CommentComponent);
    return CommentComponent;
}());
exports.CommentComponent = CommentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21tZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFxRTtBQUdyRSx3Q0FBb0U7QUFHcEUsZ0NBQStCO0FBQy9CLGtFQUFzRTtBQU90RTtJQUlJLDBCQUFvQixpQkFBb0MsRUFDNUMsV0FBd0IsRUFDeEIsSUFBVSxFQUNWLE1BQXlCO1FBSGpCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDNUMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBTnJDLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFReEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUN0QyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDakMsTUFBTSxFQUFFLENBQUM7WUFDVCxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7U0FDckMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELG1DQUFRLEdBQVI7SUFDQSxDQUFDO0lBQ0QsMENBQWUsR0FBZixVQUFnQixJQUFJO1FBQ2hCLElBQUksTUFBTSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0Qsd0NBQWEsR0FBYixVQUFjLElBQUk7UUFDZCxJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRXZDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCwyQ0FBZ0IsR0FBaEIsVUFBaUIsSUFBSTtRQUNqQixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRXZDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBRTdELENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ25DLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUEzQ1EsZ0JBQWdCO1FBTDVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1NBQzFDLENBQUM7eUNBS3lDLHdCQUFpQjtZQUMvQixtQkFBVztZQUNsQixXQUFJO1lBQ0YsZ0NBQWlCO09BUDVCLGdCQUFnQixDQTRDNUI7SUFBRCx1QkFBQztDQUFBLEFBNUNELElBNENDO0FBNUNZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAndWkvdGV4dC1maWVsZCc7XG5pbXBvcnQgeyBTbGlkZXIgfSBmcm9tICd1aS9zbGlkZXInO1xuaW1wb3J0IHsgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tICd1aS9kYXRlLXBpY2tlcic7XG5pbXBvcnQgeyBUaW1lUGlja2VyIH0gZnJvbSAndWkvdGltZS1waWNrZXInO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1yZXNlcnZhdGlvbicsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29tbWVudC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ29tbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXNEYXRlVGltZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGNvbW1lbnRGb3JtOiBGb3JtR3JvdXA7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgcHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7XG5cbiAgICAgICAgdGhpcy5jb21tZW50Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgYXV0aG9yOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgcmF0aW5nOiA1LFxuICAgICAgICAgICAgY29tbWVudDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG4gICAgb25SYXRpbmdDaGVja2VkKGFyZ3MpIHtcbiAgICAgICAgbGV0IHJhdGluZyA9IDxTbGlkZXI+YXJncy5vYmplY3Q7XG4gICAgICAgIHRoaXMuY29tbWVudEZvcm0ucGF0Y2hWYWx1ZSh7IHJhdGluZzogcmF0aW5nIH0pO1xuICAgIH1cbiAgICBvbk5hbWVDaGVja2VkKGFyZ3MpIHtcbiAgICAgICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XG5cbiAgICAgICAgdGhpcy5jb21tZW50Rm9ybS5wYXRjaFZhbHVlKHsgYXV0aG9yOiB0ZXh0RmllbGQudGV4dCB9KTtcbiAgICB9XG5cbiAgICBvbkNvbW1lbnRDaGVja2VkKGFyZ3MpIHtcbiAgICAgICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XG5cbiAgICAgICAgdGhpcy5jb21tZW50Rm9ybS5wYXRjaFZhbHVlKHsgY29tbWVudDogdGV4dEZpZWxkLnRleHQgfSk7XG5cbiAgICB9XG5cbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgaXNvRGF0ZSA9IGRhdGUudG9JU09TdHJpbmcoKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb21tZW50Rm9ybS52YWx1ZSlcbiAgICAgICAgbGV0IGNvbW1lbnQgPSB0aGlzLmNvbW1lbnRGb3JtLnZhbHVlO1xuICAgICAgICBjb21tZW50W1wiZGF0ZVwiXSA9IChpc29EYXRlKTtcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhjb21tZW50KTtcbiAgICB9XG59XG4iXX0=