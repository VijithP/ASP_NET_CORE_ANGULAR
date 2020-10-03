
using Microsoft.AspNetCore.Mvc;
using DRL.Data;

namespace DRL.Controllers
{
    [ApiController]
    //[Route("[controller]")]

    [Route("api/[controller]")]
    public class CustomerController : Controller
    {

        private ICustomerService _customerService;
        public CustomerController(ICustomerService customerService)
        {
            _customerService = customerService;
        }

        [HttpPost("SaveCustomer")]
        public IActionResult SaveCustomerDetails([FromBody] Customer customer)
        {
            string result = _customerService.SaveCustomer(customer);
            return Ok();


        }



        [HttpGet("GetCustomer")]
        public IActionResult GetCustomerDetails()
        {
            var customersList = _customerService.GetAllCustomer();
            return Ok(customersList);

        }


        [HttpDelete("DeleteCustomer/{id}")]
        public IActionResult DeleteCustomerDetails(int id)
        {
            string result=_customerService.DeleteCustomer(id);
            return Ok("Customer is Deleted");
        }


        [HttpGet("ShowCustomer/{id}")]
        public IActionResult ShowCustomerDetails(int id)
        {           
            var result=_customerService.GetAllCustomerByID(id);
            return Ok(result);
        }



    }
}