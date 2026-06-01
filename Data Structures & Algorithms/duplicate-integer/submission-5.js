class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set();
        for(let el of nums){
            set.add(el)
        }
        return set.size !== nums.length;
    }
}
