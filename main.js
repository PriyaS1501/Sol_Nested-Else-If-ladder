let marks = 30;
let message = undefined;

if (typeof(marks) === "number")
{
  if (marks >= 0 && marks <= 100)
  {
    if(marks>=35 && marks<50){
        message = "passed";
    }
    else if (marks>=50 && marks<60){
        message= "second class";
    }
    else if (marks>=60 && marks<75){
        message = "first class";
    }
    else if (marks>=75 && marks<=100){
        message = "first class with distinction";
    }
    else {
        message = "failed";
    }
  }
  else {
      message = "please enter marks between 0 to 100";
  }
}
else{
 message="Please enter number value only";
}

console.log(message); // true body print
