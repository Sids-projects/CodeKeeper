import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-js-loop',
  templateUrl: './js-loop.component.html',
  styleUrls: ['./js-loop.component.scss'],
})
export class JsLoopComponent {
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
