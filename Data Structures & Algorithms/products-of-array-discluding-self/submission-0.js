class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = []
        for(let i = 0; i < nums.length; i++){
            let sum = 1
            for(let j = 0; j < nums.length; j++){
                if(i !== j){
                    sum = sum * nums[j]
                }
            }
            res[i] = sum;
        }
        return res;
    }
}
