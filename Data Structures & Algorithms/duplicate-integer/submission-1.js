class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const unique = new Set([...nums]);
        return [...unique].length !== nums.length;
    }
}
