using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2.Models
{
    public class GradeCalcModel
    {
        //Make sure each input is entered
        [Required]
        //Make sure each input can only be a number between 0 and 100
        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100.")]
        public int Assignment { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100.")]
        public int GroupProject { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100.")]
        public int Quiz { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100.")]
        public int Exam { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100.")]
        public int Intex { get; set; }
    }
}