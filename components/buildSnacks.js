export default function createBuildSnacks(ul) {
    ul.innerHTML = '';

    return ({ linkedWords, profile }) => {
        for (let word of linkedWords) {
            if (word.profile_id === profile.id) {
                const li = createCard(word);
                ul.append(li);
            }
        }

        const username = document.querySelector('#username');
        const favWord = document.querySelector('#favWord');
        username.textContent = `username: ${profile.username}`;
        favWord.textContent = `favorite word: ${profile.fav_word}`;
    };
}

function createCard(word) {
    const h3 = document.createElement('h3');
    h3.classList.add('word');
    h3.textContent = word.words.word;

    const span = document.createElement('span');
    span.textContent = word.words.type;

    const p = document.createElement('p');
    p.textContent = word.words.definition;

    const button = document.createElement('button');
    button.textContent = 'remove';

    const li = document.createElement('li');
    li.append(h3, span, p, button);
    li.classList.add('word-card');

    return li;
}