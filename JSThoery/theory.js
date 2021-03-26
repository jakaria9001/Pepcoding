// // variables:
// let a = "Jakar";
// console.log(a);

// // loop:
// for(let i=0;i<10;i++)
//     console.log(i+' ');

// // function:
// function oddeven( num ){
//     if(num%2) console.log("Odd");
//     else console.log("Even");
// }
// oddeven(15);

// // array:
// let arr = [1 , 2 , 3 , 4];
// // for(let i=0;i<arr.length;i++)
// console.log(arr)
// arr.push("Jakar")
// console.log(arr)
// arr.pop()
// arr[7]='Jakks'
// console.log(arr)
// arr.pop()
// console.log(arr)
// let arr1 = new Array(10);
// console.log(arr1)
// // 2D array : 
// let mat = [[2,5,6],[7,6,5]];
// console.log(mat)

// // Add 2 to all the elements of an array : (map method)

let arr = [1,2,3,4];
console.log(arr);
// for(let i=0;i<arr.length;i++)
//     arr[i]+=2;
// console.log(arr);
function print(data, index, arr){
    // console.log(data, index, arr);
    // if(index==3)
    //     return data+2;
    return data+2;
}
arr = arr.map(print);
console.log(arr);
// filter : used to remove particular values like remove odd numbers
