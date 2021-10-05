
for(var i = 1008; i<9990; i = i+18){
if(i.toString().split("").reduce((val, va) => {
    return Number(val)+Number(va);
}) == 18)
 console.log(i);
}
