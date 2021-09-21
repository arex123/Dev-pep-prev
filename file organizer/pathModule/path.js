let path = require('path'); 
let fs = require('fs');

// let inputArr = process.argv.slice(2);
// console.log(inputArr);

//to run this (node path.js abc.txt def.txt)

// let fileName = inputArr[0];
// let content = inputArr[1];

// console.log('fileName',fileName);
// console.log('content',content);


//it will print directory path,that we are working currently 
// let currentPath = process.cwd();
// console.log(currentPath);


// let joinedPath = path.join(currentPath,'abc','def','txt');
// console.log(joinedPath);


//it will tell the file name of given url
// let file=path.basename('F:\\pepcoding-pp14\\dev\\file organizer\\pathModule\\path.js') //change '\' to '\\'
// console.log(file);

//it will tell the extension name of file followed by url
// let extensionoffile=path.extname('F:\pepcoding-pp14\dev\file organizer\pathModule\path.js');
// console.log(extensionoffile);



//below code will copy text file from another directory(srcpath) to destPath
let srcPath='F:/pepcoding-pp14/dev/file organizer/fsModule/f1.txt';  
let destPath='F:/pepcoding-pp14/dev/file organizer/pathModule/f2.txt';  //added f2.txt if its not present
let toBeCopiedFileName=path.basename(srcPath);   //f1 file  from srcPath url is given to toBeCopiedFileName
let dest=path.join('F:/pepcoding-pp14/dev/file organizer/dir',toBeCopiedFileName);  //it is coping as well as overriding the file
console.log(dest);
fs.copyFileSync(srcPath,destPath);
fs.copyFileSync(srcPath,dest);