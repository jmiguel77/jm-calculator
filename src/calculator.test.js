import calculate from './calculator';

test('should exist module with function', () => {
    const result = calculate('1+2');
    expect(result !== null).toBeTruthy();
});

test('should add two digits', () => {
    const result = calculate('1+2');
    expect(result === 3).toBeTruthy();
});

test('should add numbers with several digits', () => {
    const result = calculate('333+22');
    expect(result === 355).toBeTruthy();
});

test('should add numbers with decimals', () => {
    const result = calculate('3.1+2.1');
    expect(result === 5.2).toBeTruthy();
});

test('should add several digits', () => {
    const result = calculate('1+2+3+4+5');
    expect(result === 15).toBeTruthy();
});

test('should add and substract several digits', () => {
    const result = calculate('1+2+3+4+5-7');
    expect(result === 8).toBeTruthy();
});

test('should multiply', () => {
    const result = calculate('4*2');
    expect(result === 8).toBeTruthy();
});

test('should divide', () => {
    const result = calculate('8/2');
    expect(result === 4).toBeTruthy();
});

test('should return mod', () => {
    const result = calculate('8%2');
    expect(result === 0).toBeTruthy();
});
