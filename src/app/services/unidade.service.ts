import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Unidade } from '../domain/models/unidade';

@Injectable({
  providedIn: 'root'
})

export class UnidadeService {
  url = "https://localhost:7175/api/unidades";

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getAll(): Observable<Unidade[]> {
    return this.httpClient.get<Unidade[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getById(id: number): Observable<Unidade> {
    return this.httpClient.get<Unidade>(this.url + "/" + id)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    }
    else {
      errorMessage = `Código do erro: ${error.status}, mensagem: ${error.message}.`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}