export default function createSnack(root, handleAddWord, handleDeleteSnack) {

    const [h3, span, p] = root.querySelectorAll('.snack');

    return ({ word, user, snacks }) => {

        h3.textContent = word.word;
        span.textContent = word.type;
        p.textContent = word.definition;

        const addButton = root.querySelector('button');

        for (let snack of snacks) {
            if (snack.word_id === word.id) {
                addButton.textContent = 'remove';
                addButton.addEventListener('click', async () => {
                    await handleDeleteSnack(snack.id);
                    location.replace('/');
                });
                return;
            }
        }
        addButton.textContent = 'add';
        addButton.addEventListener('click', async () => {
            await handleAddWord(word, user.id);
            location.replace('/');
        });
        
    };
}