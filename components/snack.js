export default function createSnack(root) {

    const [h3, span, p] = root.querySelectorAll('#snack');

    return ({ word }) => {

        h3.textContent = word.word;
        span.textContent = word.type;
        p.textContent = word.definition;
    };
}