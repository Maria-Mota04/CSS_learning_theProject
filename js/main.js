//document = html document
const year = document.getElementById('year');
const thisYear = new Date().getFullYear();

//to set the year to the current year
year.setAttribute('datetime', thisYear);
//and now display on the page
year.textContent = thisYear;
