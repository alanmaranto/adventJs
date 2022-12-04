function countHours(year, holidays) {
  let counter = 0;
  const monday = 1;
  const friday = 5;
  for (let i = 0; i < holidays.length; i++) {
    const date = new Date(`${holidays[i]}/${year}`);
    const day = date.getDay();
    if (day >= monday && day <= friday) {
      counter++;
    }
  }
  let holidaysNumber = counter;
  const extraHours = holidaysNumber * 2;
  console.log(extraHours);
  return extraHours;
}

countHours(2022, ["01/06", "04/01", "12/25"]);
