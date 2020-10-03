import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl:string="api/customer/";
  constructor(private http:HttpClient) { }

  getCustomer()
  {
    console.log(this.baseUrl);

    return this.http.get<Customer[]>(this.baseUrl+"getcustomer");

  }
  saveCustomer(customer: Customer)
  {
    console.log(this.baseUrl);

    return this.http.post(this.baseUrl+"SaveCustomer/",customer);

  }
  getCustomerById(id :number)
  {
    debugger;
    return this.http.get<Customer>(this.baseUrl+"ShowCustomer/"+id);
  }
deleteCustomer(id:number)
{
  debugger;
  return this.http.delete(this.baseUrl+'deletecustomer/'+id);
}





}
