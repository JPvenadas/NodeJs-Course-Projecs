const { throws } = require('assert');
const fs = require('fs')
const prompt = require('prompt-sync')({});

// function you can call when reading a certain file
// just go to commandsection and call this function

const Readfile = (FileLocation) => {
    //check if the file exist
    if(fs.existsSync(FileLocation)){
       //if it exists read the file
        fs.readFile(FileLocation, (err, data)=>{
            if(err){
                console.log(err)
            }else{
                console.log(data.toString())
            }
        })

    }
    //if it not exists throw an error
    else{
        console.error("No such file: Please check if the Location and file name is correct")
    }
}

module.exports = {Readfile}