class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        dict = {};
        for el in nums:
            if (dict.get(el)):
                dict[el] = dict[el] + 1;
            else :
                dict[el] = 1;

        for key in dict:
            if dict.get(key) >= 2:
                return True
        return False
        