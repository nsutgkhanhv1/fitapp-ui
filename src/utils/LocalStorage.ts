type KEY =
  | "@levelfit/userToken"
  | "language"
  | "userInfo"
  | "i18nextLng";

export const setLocalItem = (key: KEY, value: string) => {
  localStorage.setItem(key, value);
};
export const getLocalItem = (key: KEY) => {
  return localStorage.getItem(key);
};

export const removeLocalItem = (key: KEY) => {
  localStorage.removeItem(key);
};
