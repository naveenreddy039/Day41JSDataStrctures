//UC1
let n=10;
for(let i=0;i<=n;i++)
{
    let empCheck=Math.floor(Math.random()*100)%4;
    console.log(empCheck);

}

//UC2
function print2largest(arr, arr_size) {
    let i, first, second;
    if (arr_size < 2) {
        console.log(" Invalid Input ");
        return;
    }
    arr.sort();
    for (i = arr_size - 2; i >= 0; i--) {
        if (arr[i] != arr[arr_size - 1]) {
            console.log("The second largest element is " + arr[i]);
            return;
        }
    }

    console.log("There is no second largest element<br>");
}
let arr= [ 12, 35, 1, 10, 34, 1 ];
let num = arr.length;
print2largest(arr, n);

 //UC3
 function primeFactors(n) {
    const factors = [];
    let divisor = 2;
  
    while (n >= 2) {
      if (n % divisor == 0) {
        factors.push(divisor);
        n = n / divisor;
      } else {
        divisor++;
      }
    }
    return factors;
  }
  
  const randomNumber = Math.floor(Math.random() * 10000);
  console.log('Prime factors of', +randomNumber);

 