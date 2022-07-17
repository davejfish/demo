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
            const name = form.querySelector('.input1');
            const favWord = form.querySelector('.input2');
    
            name.value = profile.username;
            favWord.value = profile.fav_word;
        }
    };
}