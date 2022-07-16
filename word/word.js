import { getUser, signOut } from '../services/auth-service.js';
import { protectPage } from '../utils.js';
import createUser from '../components/User.js';
import createSnack from '../components/snack.js';
import { getWord } from '../services/getWords.js';

// State
import state from '../state.js';


// Action Handlers
async function handlePageLoad() {
    state.user = getUser();
    protectPage(state.user);

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const { data, error } = await getWord(Number(id));

    if (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        return;
    }

    state.word = data;

    display();
}

async function handleSignOut() {
    signOut();
}

// Components 
const User = createUser(
    document.querySelector('#user'),
    { handleSignOut }
);

const Snack = createSnack(document.querySelector('.single-word'));

function display() {
    User({ user: state.user });
    Snack({ word: state.word });
}

handlePageLoad();
