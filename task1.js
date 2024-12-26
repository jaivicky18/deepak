//1.Armstrong number = 153
          //1^3+5^3+3^3 = 153
//2.fibonacci series 
          //0,1,1,2,3,5
//3.prime
        //1,2,3,5,7
//4.sum of digits
        //[1,2,3]     
//5.factorials .....6
         //6*5*4*3*2*1=720
//6.count the no of vowels from string
//7.palindrome====>
         //ex=madam-----madam      
/*function value(num) {
    if(num<=1)return false;
    for(a=2;a<num;a++){
        if(num%a===0){
            return false;

        }
    }
    return true;

const value=11;
console.log(`is &{value} is a prime number?`,value(value) );

}*/
function checkprime(num){
    let i,flag=true;
    for(i=2;i<=num-1;i++){
        if(num%i==0){
            flag=false;
            
        }
    }
    if(flag==true)
        console.log(num+"is prime");
    else
    console.log(num+"is not prime");
        
}
checkprime(4);
checkprime(5);
