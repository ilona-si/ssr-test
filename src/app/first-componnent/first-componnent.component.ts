import { Component, Inject, Injector, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { RESPONSE } from '@nguniversal/express-engine/tokens';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first-componnent',
  templateUrl: './first-componnent.component.html',
})
export class FirstComponnentComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: string,
              private route: ActivatedRoute,
              private injector: Injector) {
  }

  ngOnInit(): void {
    if (isPlatformServer(this.platformId)) {
      const response = this.injector.get(RESPONSE);
      response.status(404);
    }
  }


}
