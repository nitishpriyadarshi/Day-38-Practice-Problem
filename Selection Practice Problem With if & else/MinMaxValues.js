let a = Math.floor(Math.random()*100);
let b = Math.floor(Math.random()*100);
let c = Math.floor(Math.random()*100);
let d = Math.floor(Math.random()*100);

let result1 = a+b-c+d;
let result2 = a-b-c*d;
let result3 = a/b-c*d;
let result4 = a-b+c+d;
let result5 = a/b-c+d;

console.log("a+b-c+d = "+result1+"\na-b-c*d = "+result2+"\na/b-c*d = "+result3+"\na-b+c+d = "+result4+"\na/b-c+d = "+result5)

let minimum = 0;
let maximum = 0;

if(result1>result2 && result1 >result3 && result1 >result4 && result1> result5){
    maximum =result1;
}else if(result2>result1 && result2 >result3 && result2 > result4 && result2  > result5){
    maximum =result2;
}else if(result3 >result1 && result3 > result2 && result3 >result4 && result3>result5){
    maximum = result3;
}else if(result4 >result1 && result4 > result2 && result4 >result3 && result4 > result5){
    maximum = result4;
}else{
    maximum =result5;
}

console.log("Maximum :"+maximum);


if(result1<result2 && result1 <result3 && result1 <result4 && result1< result5){
    minimum =result1;
}else if(result2 < result1 && result2 < result3 && result2 < result4 && result2  < result5){
    minimum =result2;
}else if(result3 < result1 && result3 < result2 && result3 < result4 && result3 < result5){
    minimum = result3;
}else if(result4 < result1 && result4 < result2 && result4 < result3 && result4 < result5){
    minimum = result4;
}else{
    minimum =result5;
}

console.log("Minimum :"+minimum)