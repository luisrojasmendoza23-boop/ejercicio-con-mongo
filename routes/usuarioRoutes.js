const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const usuario = require("../Modelo/usuario");

router.post("/", async (req, res) => {

    try {

        const hash = await bcrypt.hash(req.body.contraseña, 10);

        const nuevousuario = new usuario({
            nombre: req.body.nombre,
            email: req.body.email,
            contraseña: hash
        });

        await nuevousuario.save();

        res.json(nuevousuario);


    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/", async (req, res) => {

    const usuario = await usuario.find();
    res.json(usuario);
});

router.get("/:id", async (req, res) => {

    const usuario = await usuario.findById(
        req.params.id);

    res.json("usuario");
});

router.put("/:id", async (req, res) => {

    const usuario = await usuario.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );

    res.json("usuario");
});

router.delete("/:id", async (req, res) => {

    const usuario = await usuario.findByIdAndDelete(req.params.id);
        
    res.json({texto: "Eliminado"});
});

module.exports = router;
