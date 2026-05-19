const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const Usuario = require("../Modelo/Usuario");

router.post("/", async (req, res) => {

    try {

        const hash = await bcrypt.hash(req.body.contraseña, 10);

        const nuevoUsuario = new Usuario({
            nombre: req.body.nombre,
            email: req.body.email,
            contraseña: hash
        });

        await nuevoUsuario.save();

        res.json(nuevoUsuario);


    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/", async (req, res) => {

    const usuario = await Usuario.find();
    res.json(usuario);
});

router.get("/:id", async (req, res) => {

    const usuarios = await Usuario.findById(
        req.params.id);

    res.json("usuario");
});

router.put("/:id", async (req, res) => {

    const usuario = await Usuario.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );

    res.json("usuario");
});

router.delete("/:id", async (req, res) => {

    const usuario = await Usuario.findByIdAndDelete(req.params.id);
        
    res.json({texto: "Eliminado"});
});

module.exports = router;