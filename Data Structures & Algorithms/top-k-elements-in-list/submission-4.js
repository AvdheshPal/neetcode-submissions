class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for(let i of nums){
            map.set(i , (map.get(i) || 0) + 1)
        }

        let arr = []
        
        for(let [key , val] of map.entries()){
            if(arr[val]){
                arr[val].push(key)
            }else{
                arr[val] = [key]
            }
            
        }

        console.log({map, arr})

        let res = []

        for(let i = arr.length - 1; i >= 0; i--){
            if(res.length === k) return res
            if(arr[i]){
                res.push(...arr[i])
            }
        }

        return res
    }
}
