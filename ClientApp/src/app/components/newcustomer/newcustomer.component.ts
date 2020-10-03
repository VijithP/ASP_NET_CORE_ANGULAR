import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterOutlet, Router } from '@angular/router';
@Component({
  selector: 'app-newcustomer',
  templateUrl: './newcustomer.component.html',
  styleUrls: ['./newcustomer.component.css']
})
export class NewcustomerComponent implements OnInit {

  addCustomerForm: FormGroup;
  constructor(private _customerService: CustomerService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.addCustomerForm = this.fb.group({
      CustomerID:[null],
      Name: [null, Validators.required],
      Address: [null, Validators.required],
      Gender: [null, Validators.required],
      DOB:[null],
      BloodGroup:[null]
      //,
      //DOB: [null, Validators.required]

    })
  }
  saveCustomer() {
    console.log(this.addCustomerForm.value);
    this._customerService.saveCustomer(this.addCustomerForm.value).subscribe(data => {
      debugger;
      this.router.navigate(["/customer"]);

    })
  }


}
