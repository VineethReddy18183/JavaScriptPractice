let count = 0;
const vowelFunc = (string)=>
{
    for(let char of string)
    {
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u')
        {
            count = count+1
        }
    }
    return count;
}
console.log(vowelFunc("hello"));
