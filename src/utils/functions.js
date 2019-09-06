export const sortBy = (a, b) => {
  return (a.date > b.date) ? -1 : (a.date < b.date) ? 1 : 0;
};
