var age;
age = prompt("what is your age");
if(age>=18){
    alert("you are allowed")
}else {
   if(confirm("you have parent permission"))
   alert("ypu are allowed");
   else
   alert("you are not allowed");
}