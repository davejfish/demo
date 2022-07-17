export default function createAddWords(ul, handleAddWord) {
    const [word1, word2, word3, word4] = ul.querySelectorAll('.word');
    const [a1, a2, a3, a4] = ul.querySelectorAll('a');
    const basket = document.querySelector('.basket');

    return ({ snacks }) => {
        
        word1.textContent = snacks[0].word;
        word1.draggable = true;
        word1.setAttribute('id', snacks[0].id);
        word1.addEventListener('dragstart', dragStart);
        
        word2.textContent = snacks[1].word;
        word2.draggable = true;
        word2.setAttribute('id', snacks[1].id);
        word2.addEventListener('dragstart', dragStart);
        
        word3.textContent = snacks[2].word;
        word3.draggable = true;
        word3.setAttribute('id', snacks[2].id);
        word3.addEventListener('dragstart', dragStart);
        
        word4.textContent = snacks[3].word;
        word4.draggable = true;
        word4.setAttribute('id', snacks[3].id);
        word4.addEventListener('dragstart', dragStart);

        basket.addEventListener('dragenter', dragEnter);
        basket.addEventListener('dragover', dragOver);
        basket.addEventListener('dragleave', dragLeave);
        basket.addEventListener('drop', drop);

        a1.addEventListener('click', (e) => {
            e.preventDefault();
        
            window.location.assign(
                `./word/?id=${snacks[0].id}`
            );

        });

        a2.addEventListener('click', (e) => {
            e.preventDefault();

            window.location.assign(
                `./word/?id=${snacks[1].id}`
            );

        });

        a3.addEventListener('click', (e) => {
            e.preventDefault();

            window.location.assign(
                `./word/?id=${snacks[2].id}`
            );

        });

        a4.addEventListener('click', (e) => {
            e.preventDefault();

            window.location.assign(
                `./word/?id=${snacks[3].id}`
            );

        });

        function dragStart(e) {
            // rice id
            e.dataTransfer.setData('text/plain', e.target.id);
        }

        function dragEnter(e) {
            e.preventDefault();
        }

        function dragOver(e) {
            e.preventDefault();
        }

        function dragLeave(e) {
            e.preventDefault();
        }

        function drop(e) {
            const id = e.dataTransfer.getData('text/plain');
            handleAddWord(Number(id));
        }
    };
}

