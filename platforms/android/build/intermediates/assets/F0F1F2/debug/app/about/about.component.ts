import { Component, OnInit, Inject, ChangeDetectorRef  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import 'rxjs/add/operator/switchMap';

import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { DrawerPage } from '../shared/drawer/drawer.page';

@Component({
  selector: 'app-dishdetail',
    moduleId: module.id,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent extends DrawerPage implements OnInit {
  leaders: Leader[];
  errMess: string;

  constructor(
    private leaderService: LeaderService,
    private route: ActivatedRoute,
    private routerExtensions: RouterExtensions,
    private changeDetectorRef:ChangeDetectorRef,
    @Inject('BaseURL') private BaseURL) {
      super(changeDetectorRef);
     }

     ngOnInit() {
       this.leaderService.getLeaders()
       .subscribe(leaders => this.leaders = leaders,
         errmess => this.errMess = <any>errmess);
     }

  goBack(): void {
    this.routerExtensions.back();
  }
}
