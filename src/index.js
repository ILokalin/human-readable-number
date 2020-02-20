const HUMAN_NUMBER = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
      HUMAN_NUMBER_TENS = [
        'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
        ],
      HUMAN_NUMBER_HUNDRED = 'hundred';

module.exports = function toReadable (number) {
  if (number > 999) {
    throw 'Too big number';
  }

  let numberSet = String(number).split('').map(item => Number(item));
  let result = [];

  if (number >= 100) {
    result.push(HUMAN_NUMBER[numberSet[0]]);
    result.push(HUMAN_NUMBER_HUNDRED);

    number = number - numberSet[0] * 100;
    numberSet = numberSet.slice(1);
  }


  if (number >= 20) {
    result.push(HUMAN_NUMBER_TENS[numberSet[0] - 2]);
    if (numberSet[1] > 0) {

      result.push(HUMAN_NUMBER[numberSet[1]]);
    }
  } else if (number > 0 || result.length === 0) {
    result.push(HUMAN_NUMBER[Number(numberSet.join(''))]);
  }

  return result.join(' ');
}
