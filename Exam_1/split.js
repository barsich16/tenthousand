function customSplit(text, divider) {
    let result = [];
    let currentPart = '';
    let isMatched = false;

    if (!divider) {
        return [text];
    }

    for (let i = 0; i < text.length; i++) {
        isMatched = true;
        for (let j = 0; j < divider.length; j++) {
            if (text[i + j] !== divider[j]) {
                isMatched = false;
                break;
            }
        }

        if (isMatched) {
            result.push(currentPart);
            currentPart = '';
            i += divider.length - 1;
        } else {
            currentPart += text[i];
        }
    }

    result.push(currentPart);

    return result;
}

const checkResult = (text, divider) => {
    console.log(customSplit(text, divider), text.split(divider));
}

checkResult("My first example", " ");
checkResult("Mydivseconddivexample", "div");
checkResult("My third example");