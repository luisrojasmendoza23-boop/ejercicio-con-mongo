const express = require("express");
const router = express.Router();

const Proyecto = require("../Modelo/Proyecto");

router.post("/", async (req, res) => {

    try {

        const nuevoProyecto = new proyecto(req.body);

        await nuevoproyecto.save();

        res.json(nuevoproyecto);


    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/", async (req, res) => {

    const proyecto = await proyecto.find()
    .populate("tareas");

    res.json(proyectos);
});

router.get("/:id", async (req, res) => {

    const proyecto = await proyecto.findById(
        req.params.id)
        .populate("tareas");

    res.json(proyecto);
});

router.put("/:id", async (req, res) => {

    const proyecto = await proyecto.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );

    res.json(proyecto);
});

router.delete("/:id", async (req, res) => {

    await proyecto.findByIdAndDelete(req.params.id);
        
    res.json({texto: "Proyecto Eliminado"});
});

module.exports = router;
