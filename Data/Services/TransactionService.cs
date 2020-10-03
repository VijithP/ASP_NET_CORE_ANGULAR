using System;
using System.Collections.Generic;
using DRL.Data;
using System.Linq;

namespace DRL.Data
{
    public class TransactionService : ITransactionService
    {
        string ITransactionService.DeleteTransaction(int trasaction)
        {
            var transactionData=TransactionData.transaction.FirstOrDefault(cust=>cust.TransactionID==trasaction);
            TransactionData.transaction.Remove(transactionData);
            return "success";
        }

        List<Transaction> ITransactionService.GetAllTransaction()
        {
            return TransactionData.transaction;
        }

        Transaction ITransactionService.GetAllTransactionByID(int transaction)
        {
           return TransactionData.transaction.FirstOrDefault(cust=>cust.TransactionID==transaction);
        }

        string ITransactionService.SaveTransaction(Transaction transaction)
        {
            try
            {

                if(transaction.TransactionID == null )
                {

                    int tranID=TransactionData.transaction.Count+101;
                    transaction.TransactionID=tranID;
                    TransactionData.transaction.Add(transaction);
                }

                if(transaction.TransactionID != null)
                {
                    var oldTransaction= TransactionData.transaction.FirstOrDefault(tran=>tran.TransactionID==transaction.TransactionID);
                     oldTransaction.EmpID=transaction.EmpID;
                     oldTransaction.Amount=transaction.Amount;
          
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