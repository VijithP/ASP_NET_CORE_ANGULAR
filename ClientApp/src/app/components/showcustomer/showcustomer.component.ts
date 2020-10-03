import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showcustomer',
  templateUrl: './showcustomer.component.html',
  styleUrls: ['./showcustomer.component.css']
})
export class ShowcustomerComponent implements OnInit {

  customerDetails: Customer;
  constructor(private _customerService: CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    debugger;
    this._customerService.getCustomerById(this.route.snapshot.params.id).subscribe(data => {
      this.customerDetails = data;
      console.log(this.customerDetails);
    })
  }
 

}
