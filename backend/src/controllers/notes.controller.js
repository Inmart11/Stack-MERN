const notesCtrl = {};

const Note = require ('../models/Note')

notesCtrl.getNotes = async (req,res)=> {
    const notes = await Note.find();
    res.json(notes)
}

notesCtrl.createNotes = async (req,res)=> {
    const {tittle, content, date, author} = req.body;
    const newNote = new Note({
        tittle,
        content,
        date,
        author

    });
    await newNote.save();
    res.json({message: 'Note Saved'})
}

notesCtrl.getNote = async (req,res)=> {
   const note =  await Note.findById (req.params.id);
    res.json(note)
}

notesCtrl.updateNote = async (req,res)=> {
     const {tittle, content, author} = req.body;
    await Note.findOneAndUpdate({_id: req.params.id}, {
        tittle,
        content,
        author
    })
    res.json({message: 'Note Updated'})
}

notesCtrl.deleteNote = async(req,res)=> {
    await Note.findByIdAndDelete (req.params.id)
    res.json({message: 'Note Deleted'})
}


module.exports = notesCtrl;