import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-js-functions',
  templateUrl: './js-functions.component.html',
  styleUrls: ['./js-functions.component.scss'],
})
export class JsFunctionsComponent {
  langEng!: boolean;
  private subscription!: Subscription;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.subscription = this.sharedService.langEng$.subscribe((value) => {
      this.langEng = value;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
