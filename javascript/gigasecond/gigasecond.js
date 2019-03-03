export const gigasecond = (date) => {
  console.log(date);
  let milliSeconds = date.getTime();
  milliSeconds += 1000000000000
  console.log(new Date(milliSeconds))

}