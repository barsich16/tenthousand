function customParseInt(str) {
    const type = typeof str;

    if (type === 'number') {
        return str;
    } else if (type === 'string') {
        str = str.trim();
    } else if (type === 'object') {
        str = String(str);
    } else return NaN;

    let result = 0, sign = 1;

    if (str[0] === '-') {
        sign = -1;
        str = str.slice(1);
    }

    if (!str) return NaN; //якщо строка складається лише з мінуса

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char >= '0' && char <= '9') {
            const digitValue = char.charCodeAt(0) - '0'.charCodeAt(0);
            result = result * 10 + digitValue;
        } else if (i === 0) { //якщо символ є першим
            return NaN;
        } else { //якщо символ стоїть після числа
            break;
        }
    }

    return result * sign;
}

const checkResult = (value) => {
    console.log(customParseInt(value), parseInt(value));
}

// Приклади використання:
checkResult("12345");     // 12345
checkResult("-678");      // -678
checkResult("42abc");  // NaN
checkResult("abc42");     // NaN (недопустимі символи перед числом)
checkResult("-");         // NaN (порожній рядок)
checkResult("");          // NaN (рядок із символами, які не є цифрами)
checkResult(42);
checkResult("   34");
checkResult("  e34");
checkResult("42  ");
checkResult("42  e");
checkResult(true);
checkResult(null);
checkResult(undefined);
checkResult({});
checkResult([]);
checkResult({a: 21});
checkResult([43, 44]);