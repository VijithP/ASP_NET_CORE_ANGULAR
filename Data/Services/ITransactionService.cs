using System;
using System.Collections.Generic;
using DRL.Data;
namespace DRL.Data
{
   public interface ITransactionService
    {
        List<Transaction> GetAllTransaction();

        Transaction GetAllTransactionByID(int TransactionID);

        string SaveTransaction(Transaction transaction);

        string DeleteTransaction(int trasaction);


    }
}