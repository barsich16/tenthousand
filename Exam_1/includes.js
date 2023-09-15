function customIncludes(text, matchStr, index = 0) {
    if (index < 0) {
        index = 0;
    }

    if (index + matchStr.length > text.length) { //якщо підстрока не поміститься в строку
        return false;
    }

    for (let i = index; i <= text.length - matchStr.length; i++) {
        let isExact = true;
        for (let j = 0; j < matchStr.length; j++) {
            if (text[i + j] !== matchStr[j]) {
                isExact = false;
                break;
            }
        }
        if (isExact) {
            return true;
        }
    }

    return false;
}

const checkResult = (value1, value2, value3) => {
    console.log(customIncludes(value1, value2, value3), value1.includes(value2, value3));
}

checkResult("Just an example", "example");
checkResult("Just an example", "Example");
checkResult("Just an example", "example", 7);
checkResult("Just an example", "example", 51);
checkResult("Just an example", "example", 8);
checkResult("Just an example", "example", -1);
checkResult("Just an example", "Just an example");