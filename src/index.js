module.exports = function toReadable(number) {
    const unit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    const dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let result = '';
    let k = 0;
    let arr = [];
    //console.log('number: ' + number);
    if (number <= 20) {
        result = unit[number];
    } else {
        while (number >= 1) {
            arr[k] = (number - number % 1) % 10;
            number /= 10;
            k++;
        }
        //console.log('arr[] ' + arr);
        for (let index = 0; index < arr.length; index++) {
            let element = arr[index];
            // console.log(element);
            if (index === 0 && element !== 0) {
                result = unit[element];
            } else if (index === 1 && element > 1 && result !== '') {
                result = `${dozens[element-1]} ${result}`;
            } else if (index === 1 && element > 1 && result === '') {
                result = `${dozens[element-1]}`;
            } else if (index === 1 && element === 1) {
                let y = `${arr[1]}${arr[0]}`;
                // console.log('y ' + y);
                result = `${unit[y]}`;
            } else if (index === 2 && result !== '') {
                result = `${unit[element]} hundred ${result}`;
            } else if (index === 2 && result === '') {
                result = `${unit[element]} hundred`;
            }
            //console.log('result ' + result);  
        }
    }
    return result;
}