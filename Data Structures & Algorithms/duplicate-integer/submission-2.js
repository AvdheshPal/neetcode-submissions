class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = new Map();
        for(let el of nums){
           if(map.has(el)) return true
           map.set(el, 1);
        }
        return false;
    }
}
