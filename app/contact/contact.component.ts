import { Component, OnInit, Inject, ChangeDetectorRef  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import 'rxjs/add/operator/switchMap';

import { DrawerPage } from '../shared/drawer/drawer.page';

@Component({
  selector: 'app-dishdetail',
    moduleId: module.id,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends DrawerPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private routerExtensions: RouterExtensions,
    private changeDetectorRef:ChangeDetectorRef,
    @Inject('BaseURL') private BaseURL) {
      super(changeDetectorRef);
     }

  ngOnInit() {
  }

  goBack(): void {
    this.routerExtensions.back();
  }
}
