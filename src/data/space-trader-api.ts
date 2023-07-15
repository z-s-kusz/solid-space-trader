import axios from "axios";

const baseUrl = 'https://api.spacetraders.io/v2/';

const getSpaceTraders = () => {
    return axios.get(baseUrl);
};

const registerUser = (username: string) => {
    const url = baseUrl + 'register';
    const data = {
        symbol: username,
        email: 'zskusz@gmail.com', // only used on name reserve
        faction: 'COSMIC', // default
    };
    return axios.post(url, data);
}

export {
    getSpaceTraders,
    registerUser,
};
