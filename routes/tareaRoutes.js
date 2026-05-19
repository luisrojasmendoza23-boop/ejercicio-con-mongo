const express = require("express");
const router = express.Router();

const tarea = require("../Modelo/Tarea");

router.post("/", async (req, res) => {

    try {

        const nuevatarea = new Tarea(req.body);

        await nuevatarea.save();

        res.json(nuevatarea);


    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/", async (req, res) => {

    const tarea = await tarea.find()
    .populate("Asignado");

    res.json(tareas);
});

router.get("/:id", async (req, res) => {

    const tarea = await tarea.findById(
        req.params.id)
        .populate("Asignado");

    res.json(tarea);
});

router.put("/:id", async (req, res) => {

    const tarea = await tarea.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );

    res.json(tarea);
});

router.delete("/:id", async (req, res) => {

    await tarea.findByIdAndDelete(req.params.id);
        
    res.json({texto: "Tarea Eliminada"});
});

module.exports = router;
