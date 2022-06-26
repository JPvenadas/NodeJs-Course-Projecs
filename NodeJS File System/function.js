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

//Function you can call to delete a file
//just go to commandsection and call this function
const DeleteFile = (FileLocation) => {
    //check if the file exists
    if(fs.existsSync(FileLocation)){
        //if it exists delete the file
        fs.unlink(FileLocation, (err)=>{
            //if theres an error, display it
            if(err){
                console.log(err)
            }
            //if successful
            else{
                console.log("Successfully Deleted")
            }
        })
        
    }
    //if the file doesn't exist throw an error
    else{
        console.error("No such File")
    }
}

//Function you can call to create a folder
//just go to commandsection and call this function

const CreateFolder = (FolderLocation)=>{
     //check if the file exists
     //if it doesnt exist proceed creating the folder
    if(!fs.existsSync(FolderLocation)){
        fs.mkdir(FolderLocation, (err)=>{
            if(err){
                console.log(err)
            }else{
                console.log("successfully created a folder")
            }
        })
    }
    // if it exists throw an error
    else{
        console.error("Folder already exists")
    }
}

//Function you can call to remove a folder
//just go to commandsection and call this function
const RemoveFolder = (FolderLocation)=>{
    //check if the file exists
    //if it exist proceed removing the folder
   if(fs.existsSync(FolderLocation)){
       fs.rmdir(FolderLocation, (err)=>{
           if(err){
               console.log(err)
           }else{
               console.log("successfully removed the folder")
           }
       })
   }
   // if it doesn't exists throw an error
   else{
       console.error("No such Folder")
   }
}

// Alternative way of reading a file but with a use of stream
//just go to commandsection and call this function
const ReadfileStream = (FileLocation) =>{
    if (fs.existsSync(FileLocation)) {
        let Read = fs.createReadStream(FileLocation, { encoding: 'utf-8' })
        Read.on('data', (buffer) => {
            console.log(buffer)
    })
   }else{
    console.error("No such File")
   }
}

const WritefileStream = (FileLocation, Content) =>{
    let Writer = fs.createWriteStream(FileLocation)
    Writer.write(Content)
}

module.exports = {Readfile, WriteFile, DeleteFile, CreateFolder, RemoveFolder, ReadfileStream, WritefileStream}