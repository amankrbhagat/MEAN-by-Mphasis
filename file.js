const fs = require("fs");



// ///  Synchronously write kr rhe h .  current directory me file bnane ko bole and usme content v add kiye "HeyThere".
// fs.writeFileSync("./test.txt","HeyThere");
// fs.writeFileSync("./test.txt","Hello");  ///  ab ye override kr dega test file ke content ko

// asynchronously write rhe h.
// fs.writeFile("./test1.txt", "Hii There", (err) => {});  // difference is ki isme ek callback function add krna padega j agar error aaiga to store krega

/// read file

// const fileRead = fs.readFileSync("./contacts.txt", "utf-8")  /// utf-8 encoding hai  jp btaiga k string file hai
// console.log(fileRead);
// //  ye synchronously handle kiya... iske value ko fileRead variable me return krega or hm console krke print kar sakte h



// now asynchronously kaise krega wo dekhnge

// fs.readFile("./contacts.txt", "utf-8", (err, fileread) => {
//     if(err){
//         console.log("error is: ", err);
//     }
//     else {
//         console.log(fileread);
        
//     }
// })


// yhi same chiz asynchronously krne ke liye hme ek callback use krna pdega jisme 1st parameter me "err" aur 2nd me vriable name
//  store karna pdega or phir uske bad condition laga ke print krna pdega q k kuch return nhi krta h async..




/// to overcome from the overriding from writing in file we can use this:- 

// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
/// it is synchronously appended the test file and like today is 28 so after running the file two times the 28 is printing 2 times instead of overriding it.
// but we have to convert it to string so ".toLocaleString" is used


// fs.appendFileSync("./test.txt", `Hey Everyone\n`);
//  here everytime we run the file "Hey Everyone" is added to the test file without overriding any things.

// fs.appendFileSync("./test.txt", `${Date.now()} Hey Everyone\n`);
/// ye aajka date aur aage ka statement store krega.



// fs.copyFileSync("./test.txt", "./copy.txt");
/// it will copy the "test.txt" file and store it in "copy.txt" file

// fs.unlinkSync("./copy1.txt");
// it will delete  copy1.txt   file


// console.log(fs.statSync("./test.txt")); //basically it will show the status      output will be like that:   
// Stats { dev: 2864823418, mode: 33206, nlink: 1, uid: 0, gid: 0, rdev: 0, blksize: 4096, ino: 4785074604361809,
//  size: 88, blocks: 0, atimeMs: 1745841813916.5347, mtimeMs: 1745841812906.2227, ctimeMs: 1745841812906.2227,
//  birthtimeMs: 1745832806637.2092 }

// console.log(fs.statSync("./test.txt").isFile()); // will show "true"



