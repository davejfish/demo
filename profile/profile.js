import { getUser, signOut } from '../services/auth-service.js';
import { protectPage } from '../utils.js';
import createUser from '../components/User.js';
import { getProfile } from '../services/getProfile.js';
import { enforceProfile } from '../utils.js';

// State
import state from '../state.js';
import createBuildSnacks from '../components/buildSnacks.js';
import { getLinkedTable } from '../services/addWords.js';

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

    state.linkedWords = await getLinkedTable();
    

    enforceProfile(state.profile);

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

const BuildSnacks = createBuildSnacks(document.querySelector('.words'));

function display() {
    User({ user: state.user });
    BuildSnacks({ linkedWords: state.linkedWords, profile: state.profile });
}

handlePageLoad();
