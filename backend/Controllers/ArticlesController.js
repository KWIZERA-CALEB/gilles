import ArticleModel from '../Models/ArticleModel.js'

const create_article = (req, res)=> {
    let articles = new ArticleModel({
        title: req.body.title,
        description: req.body.description
    })

    articles.save()
        .then((result)=> {
            console.log(result)
            res.json({
                message: "Article Added"
            })
        })
        .catch((error)=> {
            console.log(error)
            res.json({
                message: "Article not added"
            })
        })
}

const update_article = (req, res)=> {
    const { id } = req.params
    let updateArticle = {
        title: req.body.title,
        description: req.body.description
    }

    ArticleModel.findByIdAndUpdate(id, {$set: updateArticle})
        .then(()=> {
            res.json({
                message: "Updated Article"
            })
        })
        .catch((error)=> {
            console.log(error)
            res.json({
                message: "Failed to Update Article"
            })
        })
}

const delete_article = (req, res)=> {
    const { id } = req.params
    ArticleModel.findByIdAndDelete(id)
        .then(()=> {
            res.json({
                message: "Deleted the article"
            })
        })
        .catch((error)=> {
            console.log(error)
            res.json({
                message: "Failed to delete the article"
            })
        })

}

const single_article = (req, res)=> {
    const { id } = req.params
    ArticleModel.findById(id)
        .then((result)=> {
            res.json({
                message: result
            })
        })
        .catch((error)=> {
            console.log(error)
            res.json({
                message: "Failed to show article"
            })
        })

}

const all_articles = (req, res)=> {
    ArticleModel.find()
        .then((result)=> {
            res.json({
                message: result
            })
        })
        .catch((error)=> {
            console.log(error)
            res.json({
                message: "Failed to show articles"
            })
        })
}

export default { create_article, update_article, delete_article, single_article, all_articles }