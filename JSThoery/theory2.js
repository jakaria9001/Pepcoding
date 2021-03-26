
// Decimal To Binary:

function decToBinary(num){
    let ans ="";
    while(num){
        let rem = num%2;
        ans = rem + ans;
        num = Math.floor(num/2);
    }
    return ans;

}
// console.log(decToBinary(23));

function binToDec(num){
    let power = 0;
    let ans = 0;
    for(let i=num.length-1; i>-1 ;i--){
        let ch = parseInt(num[i]);

        ans = ans + ch*Math.pow(2,power);
        power++;
    }
    return ans;
}
// console.log(binToDec("1010"));
function rev(word){
    let st = 0, en = word.length-1;
    while(st<=en){
        var tmp = word[st];
        word[st] = word[en];
        word[en] = tmp;
        st++; en--;
    }
    return word;
}
function camelCase(string){
    words = string.split(' '); // ' '
    for(let i=0;i<words.length;i++){
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(' ');
}
function wordReverse(sentance){
    words = string.split(' ');
    for(let i=0;i<words.length;i++){
        words[i] = rev(words[i]);
    }
    return words.join(' ');
}
function isPalindrome(str){
    let st = 0, en = str.length-1;
    while(st<=en){
        if(str[st]!=str[en])
            return false;
        st++;
        en--;
    }
    return true;
}


// substr : 
let string = "jakaria hussain is a good boy";

// console.log(string.substring(2,3));
// console.log(p.toUpperCase());

console.log(camelCase(string)); //1
// console.log(wordReverse(string)); //2
// console.log(isPalindrome("aba")); //3



// Objects In JS : (same as hashMap In Java) 

let obj = {
    "hello" : 1,
    "hello2" : 2,
    "hello3" : 3
}
// console.log(obj)
// console.log(obj['hello'])
// console.log(Object.keys(obj))

function freqOfChar(str){

    let obj = { };
    for(let i=0;i<str.length; i++){
        obj[str[i]] = obj[str[i]]==undefined ?  1 : obj[str[i]]+1;
    }

    return obj;
}

// console.log(freqOfChar("Jakaria Hussain")); // 4

function firstNonRepChar(str){
    let obj = freqOfChar(str);

    for(let i=0;i<str.length;i++){
        if(obj[str[i]]==1)
            return str[i];
    }
    return -1;
}
// console.log(firstNonRepChar("abcacddbc")); //5
