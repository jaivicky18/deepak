var str="today climate is chill";
//returns the length of a string
console.log(str.length);
//converts all charaters in the string of uppercase
console.log(str.toUpperCase());
//converts all charaters in the string of lowercase
console.log(str.toLowerCase());
//returns the charater at a specified index 
console.log(str.charAt(6));
//returns the first index of the specified values,-1 if not found
console.log(str.indexOf("a"));
//returns the last index of the specified value , -1 if not found
console.log(str.lastIndexOf("a"));
//slice===>extracts a part of string and gives the extracts string as new string. 
//console.log(str.slice(6,23));
console.log(str.slice(-5));
//substring===>it act same like slice, but the when value is less then 0 it treated as 0.
console.log(str.substring(6,-4));
//replace===>replace a specified value with another value.
console.log(str.replace("today","tommrow"));
//replaceall===>replace a specified value with another every value.
let a="today going to chennai,today going to kovai  ";
console.log(a.replaceAll("today","tmrw"));
//split===>splits a string into an array of substring based on the delimeter.
console.log(a.split(" "));
console.log(a.split("i"));
//trim===>removes the whitespace from both the sides.
console.log(a.trim());
//stratswift==>checks if the string is started with the specified value.
console.log(str.startsWith("t"));
//endswith==> checks the string is end with specified value.
console.log(str.endsWith("l"));
//includes===> if the string contains a specified value.
console.log(str.includes("d"));
//concat===>it adds two or more strings, the added string stored in a new string.
let firstname="vicky";
let lastname="depak";
console.log(firstname.concat(" ",lastname));
//repeat==>gives the copy of the string.
console.log(firstname.repeat(5));
//match==>search the specified value in the string , it gives the total info about the specified value in array format.
console.log(firstname.match("i"));
//search===>search the specified value in the string, if it is give the index value of it.
console.log(firstname.search("k"));

 

 











