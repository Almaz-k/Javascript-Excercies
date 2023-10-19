//what to do? Manipulate JSON Data
// how to do ? using array of json

const books=`[{
    "title": "Javascript",
    "author": "Jona",
    "publshedYear": 2009,
    "price":45.99
},
{
    "title": "Java",
 "author": "Roman",
 "publshedYear": 1958,
 "price": 55.99
}
]`

const parsedBooks= JSON.parse(books);
const priceSum= parsedBooks.reduce((sum,book)=> sum+book.price, 0) // calculate total prices
console.log(parsedBooks);
console.log("priceSum", priceSum);
const booksPublishedBefore1960 = parsedBooks.filter(book => book.publshedYear<1960);
console.log("Book published before 1960",booksPublishedBefore1960);
// sort by defult using letters
//const sortBooks=[4, 2, 3,6,9,10,8,48,60].sort();//will not print in order 
//const sortBooks=['one', 'two', 'four'].sort();
//console.log(sortBooks);
//sort books by publishedYear
const sortBooks = parsedBooks.sort((a,b)=>b.publshedYear - a.publshedYear );//only for numbers
console.log("sorted books by published year",sortBooks);
console.log(sortBooks);
