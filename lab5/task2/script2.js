let num = '12345';
let result = 1;
for(let ch in num){
    result *= num[ch];
}
alert(result);