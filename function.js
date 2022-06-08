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

// function you can call when creating a file or writing on a file
// just go to commandsection and call this function
const WriteFile = (FileLocation, Content)=>{
    //check if the file exists
    if(fs.existsSync(FileLocation)){
        //asks if you want to overwrite the existing file
        const answer = prompt("the file already exists, do you want to overwrite it? (Y/N)")
        if(answer === "Y" || answer == "y"){
            //if yes, proceed with the writing
            Proceed(FileLocation, Content)
        }
    }
    //if the file doesn't exist, create a new file then write the content
    else{
            Proceed(FileLocation, Content)
    }

    //function for writing the file
    function Proceed(FileLocation, Content){
        fs.writeFile(FileLocation, Content, (err)=>{
            //check if theres an error
            if(err){
                console.log(err)
            }else{
            //successful
                console.log("Successfully written")
            }
        })
    }
}

const DeleteFile = (FileLocation) => {
    if(fs.existsSync(FileLocation)){
        fs.unlink(FileLocation, (err)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log("Successfully Deleted")
            }
        })
        
    }
    else{
        console.error("No such File")
    }
}


module.exports = {Readfile, WriteFile, DeleteFile}