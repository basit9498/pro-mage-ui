export const signChecking = (checkingSign, url) => {
  const queryString = url.split(checkingSign)[1];
  if (queryString !== undefined && queryString !== null && queryString !== "") {
    url += "&";
  }
  return url;
};
