const date = new Date();

function formatDate(date) {
    let day = date.getDate();
    day = day < 10 ? '0' + day : day;

    let month = date.getMonth() + 1;
    month = month < 10 ? '0' + month : month;

    let year = date.getFullYear() % 100;
    year = year < 10 ? '0' + year : year;

    return `${day}.${month}.${year}`;
}

console.log(formatDate(new Date()));