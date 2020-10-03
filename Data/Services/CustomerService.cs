using System;
using System.Collections.Generic;
using DRL.Data;
using System.Linq;

namespace DRL.Data
{
    public class CustomerService : ICustomerService
    {
        string ICustomerService.DeleteCustomer(int customer)
        {
            var customerData=Data.customer.FirstOrDefault(cust=>cust.CustomerID==customer);
            Data.customer.Remove(customerData);
            return "success";
        }

        List<Customer> ICustomerService.GetAllCustomer()
        {
            return Data.customer;
        }

        Customer ICustomerService.GetAllCustomerByID(int CustomerID)
        {
           return Data.customer.FirstOrDefault(cust=>cust.CustomerID==CustomerID);
        }

        string ICustomerService.SaveCustomer(Customer customer)
        {
            try
            {

                if(customer.CustomerID == null & customer.Name!=null)
                {

                    int custID=Data.customer.Count+101;
                    customer.CustomerID=custID;
                    Data.customer.Add(customer);
                }

                if(customer.CustomerID != null)
                {
                    var oldCustomer= Data.customer.FirstOrDefault(cust=>cust.CustomerID==customer.CustomerID);
                     oldCustomer.Name=customer.Name;
                     oldCustomer.Address=customer.Address;
                     oldCustomer.DOB=customer.DOB;
                     oldCustomer.Gender=customer.Gender;

                }

                return "success";

            }
            catch (Exception e)
            {
                return e.ToString();
            }

        }
    }
}