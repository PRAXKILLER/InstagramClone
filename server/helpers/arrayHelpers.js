export const shuffleArray = function(array) {
    for (let i = 0; i < array.length; i++) {
        const random = parseInt(Math.floor(Math.random() * array.length));
        let ele = array[i];
        array[i] = array[random];
        array[random] = ele;
    }
}