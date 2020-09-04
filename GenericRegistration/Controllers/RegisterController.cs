using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using GenericRegistration.Models;
using System.Net.Http;
using System.Runtime.CompilerServices;

namespace GenericRegistration.Controllers
{
    public class RegisterController : Controller
    {
        HttpClient client = new HttpClient();
        // GET: Register
        [HttpGet]
        public ActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Register(Register register)
        {
            return Content($"Register {register.email}");
        }
    }
}