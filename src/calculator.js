const calculate = (text) => {
    const characters = text.split('');
    let total = 0.0;
    let operation = '';
    let operand = '';
    characters.forEach((digit) => {
        if (isNumeric(digit) || '.' === digit) {
            operand += digit;
        } else {
            if (total === 0) {
                total = parseFloat(operand);
            } else {
                total = handleOperation(total, parseFloat(operand), operation);
            }
            operand = '';
            operation = digit;
        }
    });
    total = handleOperation(total, parseFloat(operand), operation);
    return total;
};

const handleOperation = (first, second, operation) => {
    let result = 0.0;
    if ('+' === operation) {
        result = first + second;
    } else if ('-' === operation) {
        result = first - second;
    } else if ('*' === operation) {
        result = first * second;
    } else if ('/' === operation) {
        result = first / second;
    } else if ('%' === operation) {
        result = first % second;
    }
    return result;
};

const isNumeric = (value) => {
    return !isNaN(value) && !isNaN(parseFloat(value));
};

export default calculate;
