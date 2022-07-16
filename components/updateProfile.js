export default function createUpdateProfile(form, handleUpdateProfile) {

    return () => {
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
    };
}