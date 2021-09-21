let fs= require('fs');
let path = require('path');


let fileArr = fs.readdirSync('F:\\pepcoding-pp14\\dev\\file organizer\\dir')
// console.log(fileArr);
let srcPath='F:/pepcoding-pp14/dev/file organizer/fsModule';  


let content = "";
for(let i=0;i<fileArr.length;i++)
{
    // console.log(fileArr[i]);
    let ext=path.extname(fileArr[i]);
    // console.log(extensionoffile);
    if(ext=='.txt')
    {
        // let joinedPath = path.join(srcPath,fileArr[i]);
        // // console.log(joinedPath);
        // let toBeCopiedFileName=path.basename(joinedPath);   //f1 file  from srcPath url is given to toBeCopiedFileName
        // fs.appendFileSync(destPath,toBeCopiedFileName);
        content+=fs.readFileSync(fileArr[i]);

    }


}
// let content  = fs.readFileSync('summary.txt');
//  console.log(content+""); // +"" converts buffet to text
let destPath='F:/pepcoding-pp14/dev/file organizer/activity/summary1.txt';  //added f2.txt if its not present
fs.writeFileSync(destPath,content);
