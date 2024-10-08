const { Author } = require('../models');

exports.createAuthor = async (req, res, next) => {
    try {
        const author = await Author.create(req.body);
        res.status(201).json(author);
    } catch(err){
        next(err)
    }
}

exports.getAllAuthors = async (req, res, next) => {
    try {
        const authors = await Author.findAll();
        res.status(200).json(authors);
    } catch(err){
        next(err)
    }
}

exports.getAuthorById = async (req, res, next) => {
    try {
        const author = await Author.findByPk(req.params.id);
        if(!author){
            return res.status(404).json({message: 'Author not found'});
        }
        res.status(200).json(author);
    } catch(err){
        next(err)
    }
}