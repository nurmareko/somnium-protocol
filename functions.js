document.addEventListener('DOMContentLoaded', async () => {
    const messageBox = document.getElementById('messageBox');

    await wait(1500);
    for (const message of utopiaMessages) {
        const p = document.createElement('p');
        messageBox.appendChild(p);
        for (const character of message) {
            p.textContent += character;
            await wait(40);
        }
        await wait(1400);
    }
    const inputLine = document.createElement('p');
    const promptSymbol = document.createTextNode('~> ');
    inputLine.appendChild(promptSymbol);
    const input = document.createElement('input');
    input.autofocus = true;
    input.addEventListener('keypress', checkInput);
    inputLine.appendChild(input);
    messageBox.appendChild(inputLine);
});

const loadMessage = async (messages) => {
    const messageBox = document.getElementById('messageBox');

    await wait(1400);
    for (const message of messages) {
        const p = document.createElement('p');
        messageBox.appendChild(p);
        for (const character of message) {
            p.textContent += character;
            await wait(40);
        }
        await wait(1400);
    }
}

const wait = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
