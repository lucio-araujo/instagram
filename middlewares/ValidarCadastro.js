const express = require('express');
const { Usuario } = require('../models');

module.exports = async (req, res, next) => {
    let { nome, email, senha } = req.body;

    const user = await Usuario.findAll({ where: { email } })
    if (user.length) {
        res.status(400).json({ erro: "Email já cadastrado!" });
        return;
    } else {
        next();
    }
}
