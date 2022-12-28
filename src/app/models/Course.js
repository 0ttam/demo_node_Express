const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        _id: {type:Number, required: true},
        name: { type: 'String', require: true },
        description: { type: 'String', maxLength: 255, default: '' },
        image: { type: 'String' },
        slug: { type: 'String', slug: 'name', unique: true },
        videoId: { type: 'String' },
        level: { type: 'String' },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },
    { 
        _id: false,
        timestamps: true,
    
    },
);

//add plugin
mongoose.plugin(slug);
Course.plugin(AutoIncrement);
Course.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });

module.exports = mongoose.model('Course', Course);
