class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let str1 = s.trim().split('').sort().join('');
        let str2 = t.trim().split('').sort().join('');
        console.log(str1, str2)
        return str1 == str2
    }
}
