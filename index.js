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

// var genres = {};
// var max = data[0].genres;
// var maxCnt = 1;
// for (let i = 0; i < data.length; i++) {
//     var el = data[i].genres;
//     if(genres[el] == null){
//         genres[el] = 1;
//     }else {
//         genres[el]++;
//     }
//     if(genres[el]>maxCnt){
//         max = el;
//         maxCnt = genres[el];
//     }
// }
// console.log(genres);
var map = new Map();
//var cnt = {};
var genres;
for (let i = 0; i < data.length; i++) {
    //console.log("ae");
    genres = data[i]["category"];
    //for(let j=0; j< genres.length; j++){
    if(map.has(data[i].category)){
        //console.log("ab");
        var newvalue = map.get(data[i].category)+1
        
       //console.log("ab");
        map.set(data[i].category, newvalue)
    }
    else{
        //console.log("ac");
        map.set(data[i].category, 1);
    }
        //if(data[i].category == genres[j]){
            //cnt[j]++;

        //}else{
            //genres.push(data[i].category);
            //cnt[j]=1;
        //}
    //}
}
//console.log(map);
let maxnum = 0;
let popular = "";
for (let [key, value] of  map.entries()) {
    if(value>maxnum){
        maxnum = value;
        popular = key;
    }
	//console.log(popular + " = " + maxnum)
}
console.log(popular + " = " + maxnum)

var map2 = new Map();
var authors;
for (let i = 0; i < data.length; i++) {
    authors = data[i]["author"];
    if(map2.has(data[i].author)){
        var newvalue2 = map2.get(data[i].author)+1
        
        map2.set(data[i].author, newvalue2)
    }
    else{

        map2.set(data[i].author, 1);
    }
}
//console.log(map2);
let maxnum2 = 0;
let popularauthor = "";
for (let [key, value] of  map2.entries()) {
    if(value>maxnum2){
        maxnum2 = value;
        popularauthor = key;
    }
}
console.log(popularauthor + " = " + maxnum2)



let maxlength = 0;
let bookname = "";
for (let i = 0; i < data.length; i++) {
    if(data[i]['# Pages']> maxlength){
        maxlength = data[i]['# Pages'];
        bookname = data[i].title;
    }

}
console.log("The longest book is " + bookname+ " with "+maxlength+" pages");



// fetch('./rawBooks.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));