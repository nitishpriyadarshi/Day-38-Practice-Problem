var year = 1990;

if ((year%4==0) && (year%100==0)){
    console.log(year+ " Is Leap Year");
}else if(year%400==0){
    console.log(year+" Is Leap Year");
}else{
console.log(year+" Not A Leap Year");
}