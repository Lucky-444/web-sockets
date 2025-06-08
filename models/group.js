const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
        name : {
                type : String,
        },
        isPersonal : {
                type : Boolean,
                default : false,
        }

});

const Group = mongoose.model('group' , GroupSchema);

module.exports =Group;