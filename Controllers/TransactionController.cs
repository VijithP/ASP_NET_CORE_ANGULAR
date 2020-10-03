
using Microsoft.AspNetCore.Mvc;
using DRL.Data;

namespace DRL.Controllers
{
    [ApiController]
    //[Route("[controller]")]

    [Route("api/[controller]")]
    public class TransactionController : Controller
    {

        private ITransactionService _transactionService;
        public TransactionController(ITransactionService transactionService)
        {
            _transactionService = transactionService;
        }

        [HttpPost("SaveTransaction")]
        public IActionResult SaveTransactionDetails([FromBody] Transaction Transaction)
        {
            string result = _transactionService.SaveTransaction(Transaction);
            return Ok();


        }



        [HttpGet("GetTransaction")]
        public IActionResult GetTransactionDetails()
        {
            var TransactionsList = _transactionService.GetAllTransaction();
            return Ok(TransactionsList);

        }


        [HttpDelete("DeleteTransaction/{id}")]
        public IActionResult DeleteTransactionDetails(int id)
        {
            string result=_transactionService.DeleteTransaction(id);
            return Ok("Transaction is Deleted");
        }


        [HttpGet("ShowTransaction/{id}")]
        public IActionResult ShowTransactionDetails(int id)
        {           
            var result=_transactionService.GetAllTransactionByID(id);
            return Ok(result);
        }



    }
}