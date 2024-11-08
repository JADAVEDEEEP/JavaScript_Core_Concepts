//it you can store your user local time accroding to your object or local 
const date = new Date();
const formatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

const formattedDate = formatter.format(date);
console.log(formattedDate);


// const formatmovmentdate = function(date){
//     const caldayspassed = (date1,date2) => 
//       Math.abs(date1-date2)/(1000*60*60*24)
//    const day = `${date.getDate()}`.padStart(2, '0');
//    const month = `${date.getMonth() + 1}`.padStart(2, '0');
//    const year = date.getFullYear();
//      return `${day}/${month}/${year}`
// }