var mysql = require('mysql');
var Schema = mysql.Schema;

// Create Schema model user
var NotesSchema = new Schema({
 id: Number,
 note: String,
});

// export the Schema model user
module.exports = mysql.model('Notes', NotesSchema);