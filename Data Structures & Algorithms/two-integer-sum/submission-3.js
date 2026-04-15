class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for(let i = 0; i < nums.length; i++){
            let el = nums[i];
            if(map.has(target - el)) return [map.get(target - el), i]
            else {
                map.set(el, i)
            }
        }
        return []
    }
}
