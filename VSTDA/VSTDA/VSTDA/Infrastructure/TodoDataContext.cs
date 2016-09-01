using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace TodoItem.Infrastructure
{
    public class TodoDataContext : DbContext
    {
        public TodoDataContext() :base("TodoDatabase")
        {

        }

        //this class is implemented as a database class
        public IDbSet<TodoItem.Models.Todo> Todoes {get; set;}
    }
}