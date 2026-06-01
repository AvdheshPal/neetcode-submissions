class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }
        let map = new Map();
        for(let el of s){
            map.set(el ,(map.get(el) || 0) + 1)
        }

        for(let el of t){
            if(map.has(el)){
                if(map.get(el) > 1){
                    map.set(el, map.get(el) -1)
                }else{
                    map.delete(el)
                }
            }
        }
        return Boolean(!map.size);
    }
}
