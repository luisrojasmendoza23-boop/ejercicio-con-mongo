const express = require("express");
const router = express.Router();

const Tarea = require("../Modelo/Tarea");

router.post("/", async (req, res) => {

    try {

        const nuevaTarea = new Tarea(req.body);

        await nuevaTarea.save();

        res.json(nuevaTarea);


    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/", async (req, res) => {

    const tarea = await Tarea.find()
    .populate("Asignado");

    res.json(tareas);
});

router.get("/:id", async (req, res) => {

    const tarea = await Tarea.findById(
        req.params.id)
        .populate("Asignado");

    res.json(tarea);
});

router.put("/:id", async (req, res) => {

    const tarea = await Tarea.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );

    res.json(tarea);
});

router.delete("/:id", async (req, res) => {

    await Tarea.findByIdAndDelete(req.params.id);
        
    res.json({texto: "Tarea Eliminada"});
});

module.exports = router;