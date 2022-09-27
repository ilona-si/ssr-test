import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FabricaService {

  constructor() {
  }

  getData() {
    return of(['london', 'Minsk', 'Bali', 'Moscow'])
      .pipe((delay(3000)));
  }
}
