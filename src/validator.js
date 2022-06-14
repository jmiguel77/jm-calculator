const isValidFormula = (text) => {
    return (/^\s*([-+]?)(\d+)(?:\s*([-+*\/\%\.])\s*((?:\s[-+])?\d+)\s*)+$/.test(text));
};

export default isValidFormula;
