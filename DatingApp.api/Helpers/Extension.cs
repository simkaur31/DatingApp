using System;
using Microsoft.AspNetCore.Http;

namespace DatingApp.api.Helpers
{
    public static class Extension
    {
        public static void AddApplicationHeader(this HttpResponse response,string message)
        {
            response.Headers.Add("Application-error",message);
            response.Headers.Add("Access-Control-Expose-Headers","Application-Error");
            response.Headers.Add("Access-Control-Allow-origin","*");
        }

    public static int CalculateAge(this DateTime TheDateTime)
    {
       var age = DateTime.Today.Year - TheDateTime.Year;
       if (TheDateTime.AddYears(age) > DateTime.Today)
       
           age--;
       
       return age;
    }
    }
}