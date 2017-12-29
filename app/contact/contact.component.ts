import { Component, OnInit, Inject, ChangeDetectorRef  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import * as Email from 'nativescript-email';
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
    private fonticon: TNSFontIconService,
    @Inject('BaseURL') private BaseURL) {
      super(changeDetectorRef);
     }

  ngOnInit() {
  }

  goBack(): void {
    this.routerExtensions.back();
  }
  
  sendEmail() {

    Email.available()
      .then((avail: boolean) => {
        if (avail) {
          Email.compose({
            to: ['confusion@food.net'],
            subject: '[ConFusion]: Query',
            body: 'Dear Sir/Madam:'
          });
        }
        else
          console.log('No Email Configured');
      })

  }

}
