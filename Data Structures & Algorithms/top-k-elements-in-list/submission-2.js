class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();
        for (let el of nums) {
            freq.set(el, (freq.get(el) || 0) + 1);
        }
        const bucket = Array.from({ length: nums.length + 1 }, () => []);
        const res = [];

        console.log(freq);

        for (let [key, val] of freq.entries()) {
            bucket[val].push(key);
        }

        for(let i = bucket.length - 1; i > 0; i--){
            if(bucket[i]){
                res.push(...bucket[i])
            }
            if(res.length === k) return res;
        }
        return res;
    }
}
