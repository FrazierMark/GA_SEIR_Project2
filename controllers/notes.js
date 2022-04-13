const FurnitureObject = require('../models/furnitureObject');
const User = require('../models/user')

// get individual note for furniture
const showNotes = async (req, res) => {
    try {
        furnitureData = await FurnitureObject.findById(req.params.id)
        console.log(furnitureData)
    } catch (error) {
        console.error(error)
    }
    res.render(`notes/index`, { title: 'Private Notes', furnitureData: furnitureData, objectPath: furnitureData.model })
}


const addNote = (req, res) => {
    FurnitureObject.findById(req.params.id, function (err, furnitureItem) {
        req.body.user = req.user._id;
        furnitureItem.notes.push(req.body);
        furnitureItem.save(function (err) {
            console.log(furnitureItem)
            res.redirect(`/notes/${furnitureItem._id}`)
        })
    })
}


function editNote(req, res, next) {
    FurnitureObject.findOne({ 'notes._id': req.params.id }).then(function (object) {
        const note = object.notes.id(req.params.id);
        if (!note.user.equals(req.user._id)) return res.redirect(`/notes/${object._id}`);
        note.content = req.body.content;
        object.save().then(function () {
            res.redirect(`/notes/${object._id}`);
        }).catch(function (err) {
            return next(err);
        });
    });
}


function deleteNote(req, res, next) {
    FurnitureObject.findOne({ 'notes._id': req.params.id }).then(function (item) {
        const note = item.notes.id(req.params.id);
        if (!note.user.equals(req.user._id)) return res.redirect(`/notes/${item._id}`);
        note.remove();
        item.save().then(function () {
            res.redirect(`/notes/${item._id}`);
        }).catch(function (err) {
            return next(err);
        });
    });
}



module.exports = {
    show: showNotes,
    editNote,
    deleteNote,
    addNote
};

