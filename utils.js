
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