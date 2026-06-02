class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for(let el of strs){
            let key = this.short(el);
            if(map.has(key)){
                let val = [...map.get(this.short(el)), el]
                map.set(key, val)
            }else {
                map.set(key, [el])
            }
        }
        return [...map.values()]
    }

    short(str){
       return str.trim().split('').sort((a, b)=> a.localeCompare(b)).join('')
    }
}
