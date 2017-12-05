$(document).ready(function() 
{    $("#results").click(function() {                

if (!$("input[@name=q1]:checked").val() ||            
!$("input[@name=q2]:checked").val() ||            
!$("input[@name=q3]:checked").val() ||            
!$("input[@name=q4]:checked").val() ||            
!$("input[@name=q5]:checked").val() ||            
!$("input[@name=q6]:checked").val() ||            
!$("input[@name=q7]:checked").val() ||            
!$("input[@name=q8]:checked").val() ||            
!$("input[@name=q9]:checked").val() ||            
!$("input[@name=q10]:checked").val()            
) {            
alert("You're not done yet!");        
}        

else {            
var prob1name = "1";            
var prob2name = "2";            
var prob3name = "3";            
var prob4name = "4";            
var prob5name = "5";            
var prob6name = "6";            
var prob7name = "7";            
var prob8name = "8";            
var prob9name = "9";            
var prob10name = "10";            
var prob11name = "None";            
            

var prob1 = ($("input[@name=q1]:checked").val() != "a"); 
           
var prob2 = ($("input[@name=q2]:checked").val() != "b");  

var prob3 = ($("input[@name=q3]:checked").val() != "c");  

var prob4 = ($("input[@name=q4]:checked").val() != "d");  

var prob5 = ($("input[@name=q5]:checked").val() != "a"); 

var prob6 = ($("input[@name=q6]:checked").val() != "b");  

var prob7 = ($("input[@name=q7]:checked").val() != "c"); 

var prob8 = ($("input[@name=q8]:checked").val() != "d");  

var prob9 = ($("input[@name=q9]:checked").val() != "a"); 

var prob10 = ($("input[@name=q10]:checked").val() != "b");  

var prob11 = (!prob1 && !prob2 && !prob3 && !prob4 && !prob5 && !prob6 && !prob7 && !prob8 && !prob9 && !prob10); var categories = [];                        

if (prob1) { categories.push(prob1name) };            
if (prob2) { categories.push(prob2name) };            
if (prob3) { categories.push(prob3name) };            
if (prob4) { categories.push(prob4name) };            
if (prob5) { categories.push(prob5name) };            
if (prob6) { categories.push(prob6name) };            
if (prob7) { categories.push(prob7name) };            
if (prob8) { categories.push(prob8name) };            
if (prob9) { categories.push(prob9name) };            
if (prob10) { categories.push(prob10name) };            
if (prob11) { categories.push(prob11name) };                        

var probStr = 'You answered the following questions incorrectly: ' + categories.join(', ') + '';                     
$("#categorylist").text(probStr);                        
$("#categorylist").show("slow");            

if (prob1) { $("#category1").show("slow"); };            
if (prob2) { $("#category2").show("slow"); };            
if (prob3) { $("#category3").show("slow"); };            
if (prob4) { $("#category4").show("slow"); };            
if (prob5) { $("#category5").show("slow"); };            
if (prob6) { $("#category6").show("slow"); };            
if (prob7) { $("#category7").show("slow"); };            
if (prob8) { $("#category8").show("slow"); };            
if (prob9) { $("#category9").show("slow"); };            
if (prob10) { $("#category10").show("slow"); };            
if (prob11) { $("#category11").show("slow"); };
{ $("#closing").show("slow"); };
}
    });});