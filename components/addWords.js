export default function createAddWords(ul) {
    const [word1, word2, word3, word4] = ul.querySelectorAll('.word');
    const [a1, a2, a3, a4] = ul.querySelectorAll('a');

    return (snacks) => {
        word1.textContent = snacks.snacks[0].word;
        word2.textContent = snacks.snacks[1].word;
        word3.textContent = snacks.snacks[2].word;
        word4.textContent = snacks.snacks[3].word;
    
        a1.href = './word/';
        a2.href = './word/';
        a3.href = './word/';
        a4.href = './word/';
    };
}