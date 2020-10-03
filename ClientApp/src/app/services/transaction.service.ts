import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  baseUrl: string = "api/Transaction/";
  constructor(private http: HttpClient) { }

  getTransaction() {
    console.log(this.baseUrl);

    return this.http.get<Transaction[]>(this.baseUrl + "GetTransaction");

  }
  saveTransaction(Transaction: Transaction) {
    console.log(this.baseUrl);

    return this.http.post(this.baseUrl + "SaveTransaction/", Transaction);

  }
  getTransactionById(id: number) {
    debugger;
    return this.http.get<Transaction>(this.baseUrl + "ShowTransaction/" + id);
  }
  deleteTransaction(id: number) {
    debugger;
    return this.http.delete(this.baseUrl + 'deleteTransaction/' + id);
  }


}
