const express = require("express");
const router = express.Router();

const Proyecto = require("../Modelo/Proyecto");

router.post("/", async (req, res) => {

    try {

        const nuevoProyecto = new Proyecto(req.body);

        await nuevoProyecto.save();

        res.json(nuevoProyecto);


    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/", async (req, res) => {

    const proyecto = await Proyecto.find()
    .populate("tareas");

    res.json(proyectos);
});

router.get("/:id", async (req, res) => {

    const proyecto = await Proyecto.findById(
        req.params.id)
        .populate("tareas");

    res.json(proyecto);
});

router.put("/:id", async (req, res) => {

    const proyecto = await Proyecto.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );

    res.json(proyecto);
});

router.delete("/:id", async (req, res) => {

    await Proyecto.findByIdAndDelete(req.params.id);
        
    res.json({texto: "Proyecto Eliminado"});
});

module.exports = router;