using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TodoItem.Models
{
    public class Todo
    {
        //properties
        public int Id { get; set; }
        public string Description { get; set; }
        public int Priority { get; set; }
        public bool Completed { get; set; }

        //methods
    }
}