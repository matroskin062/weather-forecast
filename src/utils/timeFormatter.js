export const timeFormatter = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return `${date.getHours()}:${('0' + date.getMinutes()).substr(-2)}`;
};

export const dateFormatter = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return `${date.getDate()}.${('0' + date.getMonth()).substr(-2)}`;
};
