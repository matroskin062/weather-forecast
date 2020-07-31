export const timeFormatter = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return `${date.getHours()}:${('0' + date.getMinutes()).substr(-2)}`;
};

export const dateFormatter = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return `${date.getDate()}.${('0' + (+date.getMonth() + 1)).substr(-2)}`;
};

export const dateNow = () => {
  const now = new Date(Date.now());
  return `${now.getDate()}.${('0' + (+now.getMonth() + 1)).substr(
    -2
  )} ${now.getHours()}:${('0' + now.getMinutes()).substr(-2)}`;
};
