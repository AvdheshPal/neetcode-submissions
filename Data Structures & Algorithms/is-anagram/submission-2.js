class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
         if(s.length !== t.length) return false;
        const freq = new Map();
        for(let el of s){
            freq.set(el, (freq.get(el) || 0) + 1)
        }
        
        for(let el of t){
            if (freq.has(el)){
                if(freq.get(el) > 1) freq.set(el, freq.get(el) - 1)
                else freq.delete(el)
            }
        }

        return freq.size === 0;
    }
}
