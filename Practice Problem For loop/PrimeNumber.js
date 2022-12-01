let num = 8;

let count;

for (let i=2; i<num; i++){

count=(num%i==0);
    count++;
    break;
}
if(count==1){
    console.log(num+" Is Prime Number ")
}else{
    console.log(num+" Is not Prime Number")
}