// const checkPalindrome = (value) => {

//     //const value = 'madame'
//     // find the length of a string
//     const len = value.length;

//     // loop through half of the string
//     for (let i = 0; i < len / 2; i++) {

//         // check if first and last string are same
//         if (value[i] !== value[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }
// const set = checkPalindrome('madame')
// console.log(set)

// var num = 353, temp = 0, r;
// var original = num

// while(num!=0){
//     r = num%10
//     temp = temp * 10 + r
//     num = parseInt(num/10)
//     //console.log(num)
// }

// if(original == temp)
// {
//     console.log('palindrome')
// }

const n = 5
var n1 = 0, n2 = 1, nt

for(let i=1; i<=n;i++){
    console.log(n1)
    nt = n1 + n2
    n1 = n2 
    n2 = nt
}

