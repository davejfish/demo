import { getUser, signOut } from '../services/auth-service.js';
import { protectPage } from '../utils.js';
import createUser from '../components/User.js';
import createSnack from '../components/snack.js';
import { getWord } from '../services/getWords.js';
import { getProfile } from '../services/getProfile.js';
import { enforceProfile } from '../utils.js';

// State
import state from '../state.js';
import { addWord } from '../services/addWords.js';


// Action Handlers
async function handlePageLoad() {
    state.user = getUser();
    protectPage(state.user);

    const response = await getProfile(state.user.id);
    if (response.error) {
        // eslint-disable-next-line no-console
        console.log(response.error);
        return;
    }
    state.profile = response.data;

    enforceProfile(state.profile);

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

async function handleAddWord() {
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get('id'));

    const dataToAdd = {
        word_id: id,
        profile_id: state.profile.id
    };

    const response = await addWord(dataToAdd);
    if (response.error) {
        // eslint-disable-next-line no-console
        console.log(response.error);
        return;
    }
    
    
    state.profile = response.data;
}

const Snack = createSnack(document.querySelector('.single-word'), handleAddWord);

function display() {
    User({ user: state.user });
    Snack({ word: state.word, user: state.user });
}

handlePageLoad();
