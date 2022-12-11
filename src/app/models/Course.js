const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

//add plugin
mongoose.plugin(slug);

const Course = new Schema(
    {
        name: { type: 'String', require: true },
        description: { type: 'String', maxLength: 255, default: '' },
        image: { type: 'String' },
        slug: { type: 'String', slug: 'name', unique: true },
        videoId: { type: 'String' },
        level: { type: 'String' },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },
    { timestamps: true },
);

module.exports = mongoose.model('Course', Course);
