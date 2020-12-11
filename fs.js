const fs =  require('fs')
fs.unlink('./stuff/write.txt',()=>{
    fs.rmdir('stuff',()=>{})
})
