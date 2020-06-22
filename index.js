// Code your solutions in this file
function writeCards(arr, what) {

    for (let i = 0; i < arr.length; i++) {
        arr[i] = `Thank you, ${arr[i]}, for the wonderful ${what} gift!`
    }
    return arr
}

function countDown(number) {
    let num = 0;

    while (num <= number) {
        console.log(number)
        number -= 1
    }
}