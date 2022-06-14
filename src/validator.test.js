import validate from './validator';

test('should exist module with function', () => {
    const result = validate('1+2');
    expect(result !== undefined).toBeTruthy();
});

test('should validate correct formula', () => {
    let result = validate('1+2');
    expect(result).toBeTruthy();

    result = validate('1.1+2.2');
    expect(result).toBeTruthy();

    result = validate('1-2');
    expect(result).toBeTruthy();

    result = validate('1*2');
    expect(result).toBeTruthy();

    result = validate('1/2');
    expect(result).toBeTruthy();

    result = validate('1%2');
    expect(result).toBeTruthy();
});

test('should not validate incorrect formula', () => {
    const result = validate('1+++2');
    expect(result).toBeFalsy();
});
