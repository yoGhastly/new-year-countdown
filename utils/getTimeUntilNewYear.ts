export const getTimeUntilNewYear = () => {
  const now = new Date();
  const newYear = new Date(now.getFullYear() + 1, 0, 1);
  const difference = newYear.getTime() - now.getTime();
  return difference;
}
