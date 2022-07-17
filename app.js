import { getUser, signOut } from './services/auth-service.js';
import { enforceProfile, getRandomNum, protectPage } from './utils.js';
import createUser from './components/User.js';
import createAddWords from './components/addWords.js';
import { getWords } from './services/getWords.js';
import { getProfile } from './services/getProfile.js';
import { addWord } from './services/addWords.js';

// State
import state from './state.js';

// Action Handlers
async function handlePageLoad() {
    state.user = getUser();
    protectPage(state.user);

    const response = await getProfile(state.user.id);
    state.profile = response.data;

    enforceProfile(state.profile);

    const { data, error, count } = await getWords();
    
    if (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        return;
    }

    state.words = data;
    state.totalWords = count;

    handleGetWords();

    display();
}

async function handleSignOut() {
    signOut();
}

function handleGetWords() {
    const { start, end } = getRandomNum(Number(state.totalWords));
    state.snacks = state.words.slice(start, end);
}

async function handleAddWord(id) {

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

// Components 
const User = createUser(
    document.querySelector('#user'),
    { handleSignOut }
);

const AddWords = createAddWords(document.querySelector('.words'), handleAddWord);

function display() {
    User({ user: state.user });
    AddWords({ snacks: state.snacks, profile: state.profile });
}

handlePageLoad();
