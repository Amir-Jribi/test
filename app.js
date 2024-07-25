// const {john,peter}=require('./names')
// const {amir,..}=require('./names') , amir is undefinned because names object contains john and peter as key 
// (which is module.exports inside names module)
// const fcts=require('./fncts');

const http=require('http')
function call(req,res){
     // console.log(req)
    // console.log(res)
    if (req.url == '/'){
        res.write("welcome bro")
        res.end()
    } 
}
// req : endpoint that the user is requesting in the browser
const server=http.createServer((req,res)=>{
    call(req,res)
})
server.listen(5000);





/*
fs module : read and write to files synch and async
for async , it requires a callback!
const {writeFileSync,readFile}=require('fs')
readFile('./first.txt','utf-8',(err,result)=>{
    console.log(err)
    console.log(result)
});
*/
// console.log(first)




/*
os Module
const os=require('os')
const user=os.userInfo()
console.log(user)
console.log(os.uptime())
console.log(os.type())
console.log(os.release())
console.log(os.arch())
console.log(os.freemem())
*/

/*
Path module
const path=require('path')
console.log(path.sep)

const absolute=path.resolve('app.js');  //C:\Users\LENOVO\Documents\Node-js\demo\app.js
const p=path.join('amir','jribi','\\samir'); // join the strings with the appropriate delimiter 
// (here we can now the appropriate delimiter by path.sep )
console.log(p)


//construct an absolute path :
// if there is an absolute path inside the paths prvided as argumennts , it will ignore all relative paths , and start from it
// and try to construct an absolute path.
// else it will work with path of the current working directory and append append the relative paths 

console.log(absolute);
*/



// console.log(john)
// console.log(__dirname);
// console.log(__filename);

// console.log(sayHi)
// console.log(fcts)

// console.log(module);
// console.log(names)
// console.log(fcts)    { sayHi: [Function: sayHi], sayGG: [Function: sayGG] }