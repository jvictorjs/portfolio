import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Quote } from './quote.model';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root' // root = singleton, unica instancia
})
export class QuoteService {

    baseUrl = 'https://script.google.com/macros/s/AKfycby9ZWcPcTWaTtvyCK8tv4pJXfe0-VZUo0vacJXF9JGx2xid8Xr2eEOy/exec?getAllQuotes=1' // PRODUÇÃO

    constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

    showMessage(msg: string, isError: boolean = false): void {
        this.snackBar.open(msg, 'X', {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "bottom",
            panelClass: isError ? ['msg-error'] : ['msg-success']
        });
    }

    errorHandler(e: any): Observable<any> {
        console.log(e)
        this.showMessage('⚠ An error occurred.', true)
        return EMPTY
    }

    read(): Observable<Quote[]> {
        return this.http.get<Quote[]>(this.baseUrl)
    }

}