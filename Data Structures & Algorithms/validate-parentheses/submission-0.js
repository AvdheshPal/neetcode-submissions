class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        for(let el of s){
            if(el === "[" || el === "{" || el === "("){
                stack.push(el);
            }else if((el == "]" && stack[stack.length - 1] == "[") || (el == "}" && stack[stack.length - 1] == "{") || (el == ")" && stack[stack.length - 1] == "(")){
                stack.pop();
            }
            else return false;
        }

        return stack.length == 0;
    }
}
