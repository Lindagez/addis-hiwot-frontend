const hashAccessKey = "e231890f";
const hashRefreshKey = "d547070";

export const setToken = (accessToken, refreshToken) => {
  if (window.localStorage) {
    localStorage.setItem(hashAccessKey, accessToken);
    localStorage.setItem(hashRefreshKey, refreshToken);
  }
}

export const getToken = () => {
  if (window.localStorage) {
    const accessToken = localStorage.getItem(hashAccessKey);
    const refreshToken = localStorage.getItem(hashRefreshKey);
    return { accessToken, refreshToken };
  }
}