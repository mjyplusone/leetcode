/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {    
    houses = houses.sort((num1, num2) => num1 - num2);
    heaters = heaters.sort((num1, num2) => num1 - num2);
    
    var dis, radius = 0;
    for (let i = 0; i < houses.length; i++) {
        let front = -Infinity, behind = Infinity, index = 0;
        for (let j = 0; j < heaters.length && heaters[j] <= houses[i]; j++) {
            front = heaters[j];
            index = j;
        }
        for (let j = index; j < heaters.length; j++) {
            if (heaters[j] >= houses[i]) {
                behind = heaters[j];
                break;
            }
        }
        dis = Math.min(houses[i] - front, behind - houses[i]);
        radius = Math.max(radius, dis);
    }
    
    return radius;
}