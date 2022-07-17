import { getUser, signOut } from '../services/auth-service.js';
import { protectPage } from '../utils.js';
import createUser from '../components/User.js';
import createUpdateProfile from '../components/updateProfile.js';
import { updateProfile, upsertProfile } from '../services/getProfile.js';
import { getProfile } from '../services/getProfile.js';

// State
import state from '../state.js';


// Action Handlers
async function handlePageLoad() {
    state.user = getUser();
    protectPage(state.user);

    const response = await getProfile(state.user.id);
    state.profile = response.data;

    display();
}

async function handleSignOut() {
    signOut();
}

async function handleUpdateProfile(props) {
    const dataToUpdate = {
        username: props.username,
        fav_word: props.fav_word,
        profile_id: state.user.id,
    };

    const response = await updateProfile(dataToUpdate);
    if (response.error) {
        state.profile = await upsertProfile(dataToUpdate);
    }
    else {
        state.profile = response.data;
    }

    location.replace('../');

}

// Components 
const User = createUser(
    document.querySelector('#user'),
    { handleSignOut }
);

const UpdateProfile = createUpdateProfile(document.querySelector('.update-profile'), handleUpdateProfile);

function display() {
    User({ user: state.user });
    UpdateProfile({ profile: state.profile });
}

handlePageLoad();
