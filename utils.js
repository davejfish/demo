
export async function protectPage(user) {
    if (!user) {
        location.replace(getAuthRedirect());
    }
}

export function getAuthRedirect() {
    const redirectUrl = encodeURIComponent(location.href);
    return `/auth/?redirectUrl=${redirectUrl.toString()}`;
}

export function getRandomNum(totalWords) {
    let num = Math.floor(Math.random() * totalWords);

    if (num >= (totalWords - 4)) num = totalWords - 4;

    const nums = {
        start: num,
        end: num + 4
    };

    return nums;
}

export function getWordByID(list, id) {
    for (let word of list) {
        if (word.id === Number(id)) return word;
    }

    return null;
}

export function enforceProfile(profile) {
    if (!profile) {
        location.replace('./editProfile');
    }
}