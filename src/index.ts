/**
 * @type DateString is a custom date-like object that contains the following properties:
 * @property {string} weekday - The full name of the weekday
 * @property {string} weekdayShort - The short name of the weekday, shortened to 3 characters
 * @property {string} dayNumber - The day of the month as a string
 * @property {string} month - The full name of the month
 * @property {string} monthShort - The short name of the month, shortened to 3 characters
 * @property {string} monthNumber - The month number as a string
 * @property {string} year - The full year as a string
 * @property {string} yearShort - The year as a string, shortened to 2 characters
 */
type DateString = {
  weekday: string;
  weekdayShort: string;
  dayNumber: string
  month: string;
  monthShort: string;
  monthNumber: string;
  year: string;
  yearShort: string;
};
const today = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
/**
 * Converts a vanilla JavaScript Date object into a DateString object
 * @param date - A vanilla JavaScript Date object
 * @returns A DateString object
 */
function convertDateObject(date: Date): DateString {
  return {
    weekday: weekDays[date.getDay()],
    weekdayShort: weekDays[date.getDay()].slice(0, 3),
    dayNumber: date.getDate().toString(),
    month: months[date.getMonth()],
    monthShort: months[date.getMonth()].slice(0, 3),
    monthNumber: (date.getMonth() + 1).toString(),
    year: date.getFullYear().toString(),
    yearShort: date.getFullYear().toString().slice(2),
  };
}

export { convertDateObject, today };