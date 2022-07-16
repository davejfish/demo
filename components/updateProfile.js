export default function createUpdateProfile(form, handleUpdateProfile) {

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formdata = new FormData(form);
        const data = {
            username: formdata.get('username'),
            fav_word: formdata.get('fav-word')
        };

        handleUpdateProfile(data);
        form.reset();
    });

    return ({ profile }) => {
        if (profile) {
            const [username, favWord] = form.querySelector('span');
            console.log(username, favWord);
            username.textContent = `username: ${profile.username}`;
            favWord.textContent = `favorite word: ${profile.fav_word}`;
        }
    };
}