import ArticlesController from "../Controllers/ArticlesController.js"
import express from 'express'

//----
const route = express.Router()
//----

route.post('/create_article', ArticlesController.create_article)
route.put('/update_article/:id', ArticlesController.update_article)
route.delete('/delete_article/:id', ArticlesController.delete_article)
route.get('/single_article/:id', ArticlesController.single_article)
route.get('/all_articles', ArticlesController.all_articles)

export default route