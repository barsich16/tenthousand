function countBalance(message) {
    const result = {};
    let currentRecipient = '';
    let currentAmount = 0;
    let isNameStarted = false;
    let nameArray = [];

    for (let i = 0; i < message.length; i++) {
        let charCode = message.charCodeAt(i);
        let nextCharCode = message.charCodeAt(i + 1);

        //60 = <, 64 = @,
        if ((charCode === 60 && nextCharCode === 64) || (i === message.length - 1)) {  // start name or end of text
            if (currentAmount > 0 && currentRecipient.length > 0) {
                result[currentRecipient] = currentAmount;              //записування результату
            }

            currentRecipient = '';
            currentAmount = 0;
            nameArray = [];

            isNameStarted = true;
            i++;
            continue;
        } else if (message[i] === ' ' && nextCharCode === 47) {  //end name
            currentRecipient = String.fromCharCode(...nameArray);
            isNameStarted = false;
        }

        if (isNameStarted) {
            if (charCode < 97) charCode += 32;      //якщо велика буква
            nameArray.push(charCode);
        } else if (charCode >= 48 && charCode <= 57) {  //числа
            currentAmount = currentAmount * 10 + (charCode - 48);
        }
    }

    return result;
}

// Приклад використання:
const text = 'Hello <@Kate />, you did your work well and I sent you 1000 USDT. <@Dmitry /> was working at the weekend so I sent you 350 USDT. <@Max /> won 600 USDT';
const balance = countBalance(text);
console.log(balance);