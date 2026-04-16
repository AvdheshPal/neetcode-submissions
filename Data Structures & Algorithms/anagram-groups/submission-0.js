class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for(let el of strs){
            const key = el.split('').sort((a, b) => a.localeCompare(b)).join('');
            const group = map.get(key) || [];
            group.push(el);
            map.set(key, group);
        }
        return Array.from(map.values());
    }
}
