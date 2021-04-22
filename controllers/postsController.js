const { Post, sequelize } = require('../models');

const postsController = {
    index: async (req, res) => {
        let posts = await Post.findAll({
            include: [ 'usuario', 'comentarios' ]
        });
        
        return res.render('index', { listarPosts: posts});
    },

    create: async (req, res) => {
        let { texto, img, usuarios_id, n_likes } = req.body;

        let novoPost = await Post.create({
            texto,
            img,
            usuarios_id,
            n_likes
        });

        return res.json(novoPost);
    },

    update: async (req, res) => {
        const { id } = request.params;
        let { texto, img, usuarios_id, n_likes }  = req.body;

        let postAtualizado = await Post.update({
            texto,
            img,
            usuarios_id,
            n_likes
        },{
            where: { id }
        });

        return res.json(postAtualizado);  
    },

    delete: async (req, res) => {
        const { id } = req.params;

        let postDeletado = await Post.destroy({
            where : { id }
        });

        return res.json(postDeletado);  
    },

    show: async (req, res) => {
        const { usuarios_id } = req.params;

        let postUsuario = await Post.findAll({
            where : {
                usuarios_id 
            }
        });

        return res.json(postUsuario);  
    }
}

module.exports = postsController;
