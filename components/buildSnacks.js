export default function createBuildSnacks(ul, handleBuildSnacks) {
    ul.innerHTML = '';

    return () => {
        handleBuildSnacks();
    };
}