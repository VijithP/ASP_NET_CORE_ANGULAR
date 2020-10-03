using System;
using System.Collections.Generic;
using DRL.Data;
namespace DRL.Data
{

    public class Data
    {

        public static List<Customer> customer =>AllCustomer;

        static List<Customer> AllCustomer=new List<Customer>(){
            new Customer()
            {
                CustomerID=101,Name="John",Address="Address1", Gender="Male",DOB=new DateTime (1990,08,01),BloodGroup=null
            }
            ,new Customer()
            {
                CustomerID=102,Name="Mathew",Address="Address2", Gender="Female",DOB=new DateTime (1990,08,10),BloodGroup=null
            }

        };

    }

 public class TransactionData
    {

        public static List<Transaction> transaction =>AllTransaction;

        static List<Transaction> AllTransaction=new List<Transaction>(){
            new Transaction()
            {
                TransactionID=101,EmpID=1001,Amount=500
            }
            ,new Transaction()
            {
                TransactionID=102,EmpID=2001,Amount=600

            }

        };

    }



}