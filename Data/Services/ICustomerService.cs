using System;
using System.Collections.Generic;
using DRL.Data;
namespace DRL.Data
{
   public interface ICustomerService
    {
        List<Customer> GetAllCustomer();

        Customer GetAllCustomerByID(int CustomerID);

        string SaveCustomer(Customer customer);

        string DeleteCustomer(int customer);


    }
}