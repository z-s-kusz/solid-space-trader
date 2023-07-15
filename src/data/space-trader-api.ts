import axios from "axios";

const baseUrl = 'https://api.spacetraders.io/v2/';

const getSTStatus = () => {
    return axios.get(baseUrl);
};

const getSpaceTraders = (route: string | undefined, token: string | undefined) => {
    const url = baseUrl + route;
    const config = {
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + token,
        },
    };
    console.log('config', config);
    return axios.get(url, config);
};

const registerUser = (username: string) => {
    const url = baseUrl + 'register';
    const data = {
        symbol: username,
        // email: 'zskusz@gmail.com', // only used on name reserve
        faction: 'COSMIC', // default
    };
    return axios.post(url, data);
}

export {
    getSTStatus,
    getSpaceTraders,
    registerUser,
};
