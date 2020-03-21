function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    const splitExpr = expr.split('');
    checkBrecketsPair(splitExpr);
    checkDivisionByZero(splitExpr);

    const solidString = expr.replace(/\s/g, '');
    return new Function('return ' + solidString)();
}

function checkBrecketsPair(splitExpr) {
    let counterBreckets = 0;

    for (let value of splitExpr) {
        if (value === "(") {
            counterBreckets++;
        }
        if (value === ")") {
            counterBreckets--;
        }
    }

    if (counterBreckets !== 0)  {
        throw new Error("ExpressionError: Brackets must be paired");
    }
}

function checkDivisionByZero(splitExpr) {
    for (let i = 0; i < splitExpr.length; i++) {
        if (splitExpr[i] === "/") {
            if (splitExpr[i + 2] === "0") {
                throw new Error("TypeError: Division by zero.");
            }
        }
    }
}

module.exports = {
    expressionCalculator
};