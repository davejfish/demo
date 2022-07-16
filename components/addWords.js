export default function createAddWords(ul) {
    const [word1, word2, word3, word4] = ul.querySelectorAll('.word');
    const [a1, a2, a3, a4] = ul.querySelectorAll('a');

    return (snacks) => {
        word1.textContent = snacks.snacks[0].word;
        word2.textContent = snacks.snacks[1].word;
        word3.textContent = snacks.snacks[2].word;
        word4.textContent = snacks.snacks[3].word;

        a1.addEventListener('click', (e) => {
            e.preventDefault();
        
            window.location.assign(
                `./word/?id=${snacks.snacks[0].id}`
            );

        });

        a2.addEventListener('click', (e) => {
            e.preventDefault();

            window.location.assign(
                `./word/?id=${snacks.snacks[1].id}`
            );

        });

        a3.addEventListener('click', (e) => {
            e.preventDefault();

            window.location.assign(
                `./word/?id=${snacks.snacks[2].id}`
            );

        });

        a4.addEventListener('click', (e) => {
            e.preventDefault();

            window.location.assign(
                `./word/?id=${snacks.snacks[3].id}`
            );

        });
    };
}

