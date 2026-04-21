import Fight from "./fightClass";

function sortbyDate(a: Fight, b: Fight) {
  const [da, ma, ya] = a.date.split(".");
  const [db, mb, yb] = b.date.split(".");
  const dateA = `20${ya}-${ma}-${da}`;
  const dateB = `20${yb}-${mb}-${db}`;
  return dateA.localeCompare(dateB);
}

function sortByTime(a: Fight, b: Fight) {
  return a.time.localeCompare(b.time);
}

export { sortbyDate, sortByTime };