class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let arr = [];
        let stack = [];

        for(let ind in position){
            arr[ind] = [position[ind],speed[ind]]
        }

        arr = arr.sort((a , b) => b[0] - a[0]);
        
        for(let i = 0; i < arr.length; i++){
            const [p , s] = arr[i];
            const d = target - p;
            const t = d / s;
            if(stack.length > 0){
                if(t > stack[stack.length - 1]){
                    stack.push(t)
                }
            }
            else stack.push(t)
        }

        return stack.length;
    }
}
