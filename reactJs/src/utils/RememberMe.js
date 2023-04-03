export const setRememberMe = (rememberMe) => {
    localStorage.setItem('@rememberMe', JSON.stringify(rememberMe));
}

export const getRememberMe = () => {
    return JSON.parse(localStorage.getItem('@rememberMe')) || false;
}