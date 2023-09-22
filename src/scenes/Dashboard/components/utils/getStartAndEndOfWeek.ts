export const getStartAndEndOfWeek = () => {
  const now = new Date().setHours(0, 0, 0, 0);
  const monday = new Date(now);
  monday.setDate(monday.getDate() - monday.getDay() + 1);
  const sunday = new Date(now);
  sunday.setDate(sunday.getDate() - sunday.getDay() + 7);
  return [monday, sunday];
};
