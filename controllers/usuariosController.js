const { Usuario, sequelize } = require('../models');

const usuariosController = {
    index: async (req, res) => {
        let usuarios = await Usuario.findAll();
        return res.render('usuarios', { listaUsuarios: usuarios });
    },

    login: (req, res) => {
        return res.render('login');
    },

    registro: (req, res) => {
        return res.render('registro');
    },

    create: async (req, res) => {
        let { nome, email, senha } = req.body;

        let novoUsuario = await Usuario.create({
            nome,
            email,
            senha
        });

        return res.redirect('/usuarios/login');
    },
    update: async (req, res) => {
        let { id } = req.params;
        let { nome, email, senha } = req.body;

        let usuarioAtualizado = await Usuario.update({
            nome, 
            email, 
            senha
        }, {
            where: { id }
        })

        return res.send(usuarioAtualizado);
    },
    delete: async (req, res) => {
        let { id } = req.params;

        const usuarioDeletado = await Usuario.destroy({
            where: { id }
        });

        return res.json(usuarioDeletado);
        
    }
}

module.exports = usuariosController;
