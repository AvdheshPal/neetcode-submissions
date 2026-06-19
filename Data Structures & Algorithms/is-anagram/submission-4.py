class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        freqS = {};
        for el in s:
            if freqS.get(el):
                freqS[el] = freqS[el] + 1
            else :
                freqS[el] = 1;
        
        for el in t:
            if freqS.get(el):
                if freqS.get(el) > 1:
                    freqS[el] = freqS[el] - 1;
                else :
                    del freqS[el]
            else :
                return False
        return len(freqS) == 0;