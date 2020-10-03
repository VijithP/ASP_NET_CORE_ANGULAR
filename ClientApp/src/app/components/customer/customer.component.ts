import { Component, OnInit } from '@angular/core';
import { CustomerService } from "../../services/customer.service"
import { from, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { observable } from 'rxjs'
import { Store } from '@ngrx/store';
// import { AppState } from 'src/app/store/app.state';
// import * as customerActions from '../../store/customer.action'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {


  public customerList: Customer[];

 public customerList$:Observable<any>;


   constructor(private _customerService: CustomerService, private router: Router) { }

  // constructor(private store: Store<AppState>, private router: Router) {
  //   this.customerList$=this.store

  //   //this.customerList$=this.store.select({ type: '[Movies Page] Load Movies' });
  //  }


  ngOnInit(): void {

    // Create a new Observable that will deliver the above sequence
    const sequence = new Observable(this.sequenceSubscriber);

    // execute the Observable and print the result of each notification
    sequence.subscribe({
      next(num) { console.log(num); },
      complete() { console.log('Finished sequence'); }
    });

    this._customerService.getCustomer().subscribe(data => {
      this.customerList = data;
      console.log(this.customerList);
    })


  }
  showCustomer(customerID: number) {

    this.router.navigate(["/show-customer/" + customerID]);
  }

  editCustomer(customerID: number) {
    this.router.navigate(["/update-customer/" + customerID]);
  }
  deleteCustomer(customerID: number) {
    this.router.navigate(["/delete-customer/" + customerID]);
  }

  sequenceSubscriber(observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
    return { unsubscribe() { } };
  }

}
