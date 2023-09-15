function countEmoji(message, emoji) {
    const result = {};
    let currentRecipients = [];
    let currentApplesAmount = 0;
    let isNameStarted = false;
    let nameArray = [];
    let currentCompareIndex = 0;

    for (let i = 0; i < message.length; i++) {
        let charCode = message.charCodeAt(i);
        const nextCharCode = message.charCodeAt(i + 1);

        //60 = <, 64 = @,
        if ((charCode === 60 && nextCharCode === 64) || (i === message.length - 1)) { // start name or end of text
            if (currentApplesAmount > 0) { // почати новий відлік емоджі
                currentRecipients.forEach(item => result[item] = currentApplesAmount);
                currentRecipients = [];
                currentApplesAmount = 0;
            }

            nameArray = [];
            isNameStarted = true;
            i++;
            continue;
        } else if (message[i] === ' ' && nextCharCode === 47) { //end name
            currentRecipients.push(String.fromCharCode(...nameArray));
            isNameStarted = false;
        }

        if (isNameStarted) {
            if (charCode < 97) charCode += 32; //якщо велика буква
            nameArray.push(charCode);
            continue;
        }

        if (charCode === emoji.charCodeAt(currentCompareIndex)) { //пошук емодзі    58 = :
            // якщо повністю співпала строчка і вона обрамлена двокрапками
            if ((currentCompareIndex === emoji.length - 1) && (nextCharCode === 58 && message.charCodeAt(i - emoji.length))) {
                currentApplesAmount++;
                currentCompareIndex = 0;
            } else {
                currentCompareIndex++;
            }
        }
    }

    return result;
}

// Приклад використання:
const text = '<@Kate />:apple: <@Max /><@alisa /> :like: received:apple::apple:';
const balance = countEmoji(text, 'apple');
console.log(balance);
