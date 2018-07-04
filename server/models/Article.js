const mongoose = require('mongoose')

let ArticleSchema = new mongoose.Schema(
    {
        text: String,
        title: String,
        event_id: Number,
        event_name: String,
<<<<<<< HEAD
        event_desc: String,
=======
        event_description: String,
        event_img: String,
>>>>>>> 4650022dcef1eec9af166780d52b2e85f82f8fb5
        description: String,
        feature_img: String,
        claps: Number,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        comments: [
            {
                author: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User'
                },
                text: String
            }
        ]
    }
);
ArticleSchema.methods.clap = function() {
    this.claps++
    return this.save()
}
ArticleSchema.methods.comment = function(c) {
    this.comments.push(c)
    return this.save()
}
ArticleSchema.methods.addAuthor = function (author_id) {
    this.author = author_id
    this.title = 'Verizon Enterprise Solution'    
    return this.save()
}
ArticleSchema.methods.getUserArticle = function (_id) {
    Article.find({'author': _id}).then((article) => {
        return article
    })
}
module.exports = mongoose.model('Article', ArticleSchema)