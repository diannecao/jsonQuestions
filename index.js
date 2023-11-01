import data from './rawBooks.json' assert { type: 'json' };
console.log(data[0]["# Pages"]);
let x = 0;
for (let i = 0; i < data.length; i++) {
    if (data[i]['read?']=="Yes"){
        x++;
    }
}
let y = Math.floor((x/data.length)*100);
console.log("The % of books are read: "+ y + "%");


let z= 0 ;
let b = 0;
for (let i = 0; i < data.length; i++) {
    if(typeof data[i]['Time on TBR (days)'] === "number" && data[i]['Date Bought'].length > 0 && data[i]['Date Read'].length >0 ){
        z+=data[i]['Time on TBR (days)'];
        b++
    }


}
let a = Math.floor(z/b);
console.log("Avg time to read a book: "+ a + " days");

var genres = 
for (let i = 0; i < data.length; i++) {
    
}




// fetch('./rawBooks.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));