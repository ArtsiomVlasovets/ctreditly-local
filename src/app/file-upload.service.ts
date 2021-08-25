import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FileUploadService {
  headers = new HttpHeaders();

  constructor(private http: HttpClient) { 
  this.headers = this.headers
  .set(
    'Authorization',
    'API_User_Auth ' +
    'JGNyZWRpdGx5d2ViYXBpOmUxMGFkYzM5NDliYTU5YWJiZTU2ZTA1N2YyMGY4ODNl'
  )
  .set('API_Key', '5A2A6A7E-F86F-4877-83D3-9')
  .set('APP_Type', '1')
  .set('APP_Code', 'CR1T1')
  .set('Accept-Language', 'en')

}
  addUser(type: number, file: File): Observable<any> {
    var formData: any = new FormData();
    formData.append("File", file);
    formData.append("DocType", type+"");
    let headers = this.headers.set('Token', localStorage.getItem('sessionToken') ? localStorage.getItem('sessionToken') : localStorage.getItem('token'));
    return this.http.post('http://193.122.75.138:4000/api/upload/profileupload', formData, {
      reportProgress: true,
      observe: 'events',
      headers
    }).pipe(
      catchError(this.errorMgmt)
    )
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}