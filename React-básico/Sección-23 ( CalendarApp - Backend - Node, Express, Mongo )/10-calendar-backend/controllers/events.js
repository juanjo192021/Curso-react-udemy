const { response } = require("express");
const Evento = require('../models/Evento');

const getEventos = async(req, res = response) => {
  
  const eventos = await Evento.find()
                              .populate('user', 'name');

  return res.json({
    ok: true,
    msg: eventos
  });
};

const crearEvento = async(req, res = response) => {

  const evento = new Evento(req.body);

  try {
    evento.user = req.uid;
    const eventoGuardado = await evento.save();
    return res.json({
      ok: true,
      evento: eventoGuardado
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador'
    });
  }
}

const actualizarEvento = async(req, res = response) => {

  const eventoId = req.params.id;
  const uid = req.uid;

  try {

    const evento = await Evento.findById(eventoId);
    if (!evento) {
      return res.status(404).json({
        ok: false,
        msg: 'Evento no existe por ese id'
      });
    }

    if (evento.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'No tiene privilegio de editar este evento'
      });
    }

    const nuevoEvento = {
      ...req.body,
      user: req.uid
    }

    const eventoActualizado = await Evento.findByIdAndUpdate(eventoId, nuevoEvento, { new: true });

    return res.json({
      ok: true,
      evento: eventoActualizado
    });

    
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador'
    });
  }
}

const eliminarEvento = async(req, res = response) => {
  
  const eventoId = req.params.id;
  const uid = req.uid;

  try {

    const evento = await Evento.findById(eventoId);
    if (!evento) {
      return res.status(404).json({
        ok: false,
        msg: 'Evento no existe por ese id'
      });
    }

    if (evento.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'No tiene privilegio de eliminar este evento'
      });
    }

    await Evento.findByIdAndDelete(eventoId);

    return res.json({
      ok: true,
      msg: 'Evento eliminado'
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador'
    });
  }

}

module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento
}