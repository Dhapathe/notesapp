

const fs =  require('fs');
const { title } = require('process');


var fetchNotes =()=>{
    try {
        return JSON.parse(fs.readFileSync("main.json"));
    }catch(err){
        return[];
    }

}

var addingNote = (title, content)=> {
    var notes =fetchNotes() ;

    var note ={
        title,
       content
    };

    const repeatTitle = notes.filter(function (note) {
        return note.title === title;
    });
    
    if(repeatTitle.length === 0){

        notes.push(note);
        fs.writeFileSync("main.json", JSON.stringify(notes) ); 
        console.log(note);
        console.log('\nNew Note Added Successfully!\n');

    }
    else{
        console.log("\nError: Note title already exists.\n");
        
    }

    
}


var removeNote=(title)=>{
    var notes =fetchNotes() ;
    
    var filteredNotes =  notes.filter((note)=>note.title !== title);
    fs.writeFileSync("main.json", JSON.stringify(filteredNotes) ); 
}

var readNote = (title) =>{
    var notes =fetchNotes() ;
    
    var filteredNotes =  notes.filter((note)=>note.title === title);
    logNote(filteredNotes[0]);
}
var listNote = () =>{
    var notes =fetchNotes() ;
   notes.forEach((note)=> logNote(note));
}

var logNote = (note) => {
    
    console.log(`title: ${note.title}`);
    console.log(`content: ${note.content}`);
    console.log("\n------------------------------------------\n");

}

module.exports = {
    addingNote,
    removeNote,
    readNote,
    listNote
}

