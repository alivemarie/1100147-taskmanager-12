const SECOND = 1000;
const MINUTE = 60;
const HOUR = 60;
const DAY = 24;
const DUE_DATE_IS_NULL = 1;

const getCurrentDate = () => {
  const currentDate = new Date();
  currentDate.setHours(23, 59, 59, 999);

  return new Date(currentDate);
};

export const getDaysToDeadline = (dueDate) => {
  if (dueDate === null) {
    return DUE_DATE_IS_NULL;
  }
  const currentDate = getCurrentDate();

  return (currentDate.getTime() - dueDate.getTime()) / SECOND / MINUTE / HOUR / DAY;
};

export const isTaskRepeating = (repeating) => {
  return Object.values(repeating).some(Boolean);
};

export const humanizeTaskDueDate = (dueDate) => {
  return dueDate.toLocaleString(`en-US`, {day: `numeric`, month: `long`});
};
