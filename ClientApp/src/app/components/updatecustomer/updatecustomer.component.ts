import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit {


  customerDetails:Customer;
  updateCustomerForm: FormGroup;

  constructor(private _customerService:CustomerService,private fb:FormBuilder, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    debugger;
    this._customerService.getCustomerById(this.route.snapshot.params.id).subscribe(data => {
      this.customerDetails = data;

      this.updateCustomerForm = this.fb.group({
        CustomerID:[data.customerID],
        Name: [data.name, Validators.required],
        Address: [data.address, Validators.required],
        Gender: [data.gender, Validators.required],
        DOB:[data.dob ],
        BloodGroup:[data.bloodGroup]
       
  
      })

    })


  }
  saveCustomer() {
    this._customerService.saveCustomer(this.updateCustomerForm.value).subscribe(data => {
      debugger;
      this.router.navigate(["/customer"]);

    })
  }


}
