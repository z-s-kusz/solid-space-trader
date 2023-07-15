const storeUser = (name: string, authToken: string) => {
    const user = {
        name,
        authToken,
    };
    const userJSON = JSON.stringify(user);
    localStorage.setItem('user', userJSON);
};

const getUser = () => {
    const userJSON = localStorage.getItem('user');
    if (userJSON) return JSON.parse(userJSON);
    return { name: '', authToken: '' };
}

export {
    storeUser,
    getUser,
};
