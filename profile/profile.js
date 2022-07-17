import { getUser, signOut } from '../services/auth-service.js';
import { findByID, protectPage } from '../utils.js';
import createUser from '../components/User.js';
import { getProfile } from '../services/getProfile.js';
import { enforceProfile } from '../utils.js';

// State
import state from '../state.js';
import createBuildSnacks from '../components/buildSnacks.js';
import { deleteSnack, getLinkedTable } from '../services/addWords.js';

// Action Handlers
async function handlePageLoad() {
    state.user = getUser();
    protectPage(state.user);

    const response = await getProfile(state.user.id);
    state.profile = response.data;
    
    if (!state.profile) {
        location.replace('../editProfile');
    }

    state.linkedWords = await getLinkedTable();
    

    enforceProfile(state.profile);

    display();
}

async function handleSignOut() {
    signOut();
}

async function handleDeleteSnack(id) {
    await deleteSnack(Number(id));

    const item = findByID(state.linkedWords, Number(id));
    const index = state.linkedWords.indexOf(item);
    state.linkedWords.splice(index, 1);
    
    display();
}

// Components 
const User = createUser(
    document.querySelector('#user'),
    { handleSignOut }
);

const BuildSnacks = createBuildSnacks(document.querySelector('.words'), handleDeleteSnack);

function display() {
    User({ user: state.user });
    BuildSnacks({ linkedWords: state.linkedWords, profile: state.profile });
}

handlePageLoad();
