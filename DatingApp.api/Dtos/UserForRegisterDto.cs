using System.ComponentModel.DataAnnotations;

namespace DatingApp.api.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
         public string username { get; set; }
         
         [Required]
         [StringLength(8,MinimumLength=4,ErrorMessage="You Must specify password between 4 to 5 chracters")]
         public string password { get; set; }
    }
}