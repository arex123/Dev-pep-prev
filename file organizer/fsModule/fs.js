let fs=require('fs');
// let content  = fs.readFileSync('f1.txt');
// // console.log(content+""); // +"" converts buffet to text

// fs.writeFileSync('abc.txt','timmon n pumba are cool');

// fs.appendFileSync('abc.txt','hakuma tata');

// fs.unlinkSync('abc.txt') //it will delete some file

//to create a folder
// fs.mkdirSync('pathModule');

//it will delete folder

// fs.rmdirSync('pathModule');


//to check if a file exists or not
// let doesExist = fs.existsSync('fs.js'); //fs exist then true
// console.log(doesExist);

//statusObj of file/folder
// let statusObj=fs.lstatSync('f1.txt');
// console.log(statusObj);


// console.log(statusObj.isFile());  //it will check if the file in statusObj which is f1.txt is file or not
// console.log(statusObj.isDirectory());   //it will check if the file in statusObj which is f1.txt is folder or not


//below code will will tell all files from other 'dir directory
let fileArr = fs.readdirSync('F:/pepcoding-pp14/dev/file organizer/dir'); //changed '\ to '/
console.log(fileArr);