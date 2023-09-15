function parseBalance(message) {
    let balance = 0;

    for (let i = 0; i < message.length; i++) {
        const charCode = message.charCodeAt(i);

        if (charCode >= 48 && charCode <= 57) {
            balance = balance * 10 + (charCode - 48);
        } else if (message[i] === ' ' && balance > 0) {
            break;
        }
    }

    return balance;
}

// Приклад використання:
const text = 'My wallet balance is 14960 USDT';
const balance = parseBalance(text);
console.log(balance); // '14960'