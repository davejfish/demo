export default function createSnack(root, handleAddWord) {

    const [h3, span, p] = root.querySelectorAll('.snack');

    return ({ word, user }) => {

        h3.textContent = word.word;
        span.textContent = word.type;
        p.textContent = word.definition;

        const addButton = root.querySelector('button');
        addButton.addEventListener('click', async () => {
            await handleAddWord(word, user.id);
            location.replace('/');
        });
    };
}