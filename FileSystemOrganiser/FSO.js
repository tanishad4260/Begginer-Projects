const fs= require('fs')
const path= require('path')

let input = process.argv.slice(2)
// console.log(input)

let command= input[0]
// console.log(command)

switch(command){
    case 'organise':
        organiseFn(input[1])
        console.log('Organise Implemented')
        break;
    
    case 'tree':
        console.log('Tree Implemented')
        break;

    case 'help':
        helpFn()
        console.log('Help Implemented')
        break;
    
    default:
        console.log('Please enter a valid command')
        break;
}

function helpFn(){
    console.log(`The following is the list of commands:
                    1. Organise - node <executable js file name> organise <file/folder Path>
                    2. Tree - node <executable js file name> tree <file/folder Path>
                    3. Help - node <executable js file name> help`)
}

function organiseFn(dirPath){
    if(dirPath==undefined){
        console.log('You have not entered a file/folder path. Please enter a valid path.')
        return;
    }
    else{
        console.log('Checking the given path...')
        let doesExist= fs.existsSync(dirPath)
        if(doesExist==true){
            console.log('Valid path, organising files')
            let destPath= path.join(dirPath, 'OrganisedFiles')

            if (fs.existsSync(destPath)==false){
                fs.mkdirSync(destPath)
            }
            else {
                console.log('Folder already exists')
            }
        }
        else{
            console.log('Not a valid path. Please enter a valid file/folder')
        }
    }
    
}

