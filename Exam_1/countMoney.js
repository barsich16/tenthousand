function countMoney(message) {
    let balance = 0;
    let currentValue = 0;

    for (let i = 0; i < message.length; i++) {
        const charCode = message.charCodeAt(i);

        if (charCode >= 48 && charCode <= 57) {
            currentValue = currentValue * 10 + (charCode - 48);
        } else if (message[i] === ' ' && currentValue > 0) {
            if (balance !== 0) {
                balance -= currentValue;  // якщо витрати
            } else {
                balance = currentValue;  //якщо основна сума
            }
            currentValue = 0;
        }
    }

    return balance;
}

// Приклад використання:
const text = 'My wallet balance is 14690 USDT. I paid 750 USDT for plane tickets and 921 USDT for a flat';
const balance = countMoney(text);
console.log(balance); // 13019