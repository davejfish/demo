import { getUser, signOut } from '../services/auth-service.js';
import { protectPage } from '../utils.js';
import createUser from '../components/User.js';
import { getProfile } from '../services/getProfile.js';
import { enforceProfile } from '../utils.js';

// State
import state from '../state.js';

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

function display() {
    User({ user: state.user });

}

handlePageLoad();
