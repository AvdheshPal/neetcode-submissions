class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = [];
        let sum = 1
        for (let i = 0; i < nums.length; i++) {
            sum *= (nums[i - 1] === undefined ? 1 : nums[i - 1]);
            prefix.push(sum)
        }


        let postfix = [];
        let sum2 = 1
        for (let i = nums.length - 1; i >= 0; i--) {
            sum2 *= (nums[i +1] === undefined ? 1 : nums[i +1])
            postfix[i] = sum2
        }

        let result = []

        for (let i = 0; i < nums.length; i++) {
            result.push(postfix[i] * prefix[i])
        }

        return result
    }
}
