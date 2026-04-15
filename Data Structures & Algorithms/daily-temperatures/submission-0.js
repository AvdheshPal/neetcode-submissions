class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = [];
        for(let i = 0; i < temperatures.length; i++){
            let bada = null;
            for(let j = i + 1; j < temperatures.length; j++){
                if(temperatures[j] > temperatures[i]){
                     bada = j
                     break
                }
            }

            if(bada) {
                res.push(bada - i)
            }else {
                res.push(0)
            }
           
        }
        return res;

    }
}
