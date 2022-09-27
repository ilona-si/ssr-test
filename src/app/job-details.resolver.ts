import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JobDetailsResolver implements Resolve<any> {

  constructor(private httpClient: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const url = 'https://www.efinancialcareers.co.uk/rest-api/documents/fe22706c-ec95-47b0-9ecf-ae42f2be19fe';
    return this.httpClient.get(url)
      .pipe(
        map(resp => {
          console.log(resp);
          return {piu: resp}
        }),
        catchError(err => {
          console.log(err);
          return throwError(err);
        }),
      );
  }
}
