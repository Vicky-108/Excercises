let s = "The quick brown fox jumps over the lazy dog.";
var count =0;
var check=0;
var sm="";
for(var i=0;i<s.length;i++){
       if(s[i] != " "){
check+=1;
    }
    else{
        if(check>count)
       
sm=s.slice(i-check,i);

    }
    
    
}console.log(count);
console.log(sm);