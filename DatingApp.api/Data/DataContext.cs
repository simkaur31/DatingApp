using DatingApp.api.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.api.Data
{
    public class DataContext : DbContext  //Dbcontext is high level instance by which we can inherit its classes and it is used to query database using entity framework

    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)  {}
       
        public DbSet<Value> Values { get; set; }
    }
}