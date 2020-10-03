import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deletecustomer',
  templateUrl: './deletecustomer.component.html',
  styleUrls: ['./deletecustomer.component.css']
})
export class DeletecustomerComponent implements OnInit {

  customerDetails: Customer;
  constructor(private _customerService: CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this._customerService.getCustomerById(this.route.snapshot.params.id).subscribe(data => {
      this.customerDetails = data;
      console.log(this.customerDetails);
    })
  }
  deleteCustomer(id:number)
  {
    
    this._customerService.deleteCustomer(id).subscribe(data=>{
      this.router.navigate(['/customer'])

    })
  }


}
