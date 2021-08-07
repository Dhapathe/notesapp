console.log("Starting notesapp.js");



const yargs =  require('yargs');
const pages =  require('./pages.js');
const argv = yargs.argv;



var title  =  yargs.argv.title;
var content =  yargs.argv.content;
var command = yargs.argv._[0];


if(command === "add"){
    console.log("\n-----------------Adding note-----------------\n");
    pages.addingNote(title, content);
}
else if(command === "remove"){
    console.log("\n-----------------Notes removed-----------------\n");
    pages.removeNote(title, content);
}
else if(command ==="read"){
    console.log("\n-----------------Read view-----------------\n");
    pages.readNote(title);
}
else if(command === "list"){
    console.log("\n-----------------Notes list-----------------\n");
    pages.listNote();
}

else{
    console.log("Error: Command not found.");
}