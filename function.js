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


const WriteFile = (FileLocation, Content)=>{
    if(fs.existsSync(FileLocation)){
        const answer = prompt("the file already exists, do you want to overwrite it? (Y/N)")
        if(answer === "Y" || answer == "y"){
            Proceed(FileLocation, Content)
        }
    }else{
            Proceed(FileLocation, Content)
    }

    function Proceed(FileLocation, Content){
        fs.writeFile(FileLocation, Content, (err)=>{
            if(err){
                console.log(err)
            }else{
                console.log("Successfully written")
            }
        })
    }
}
module.exports = {Readfile, WriteFile}