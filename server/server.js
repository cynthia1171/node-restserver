require('./config/config');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

// obtener data
app.get('/usuario', (req, res) => {
  res.json('get usuario');
});

// crear nuevos registros
app.post('/usuario', (req, res) => {
  let body = req.body;
  if(body.nombre === undefined || body.edad === undefined || body.correo === undefined) {
    res.status(400).json({
      ok: false,
      mensaje: 'el nombre es necesario'
    });
  } else {
    res.json({
      persona: body
    });
  }
  
});

// actualizar data
app.put('/usuario/:id', (req, res) => {
  let id = req.params.id;
  res.json({
    id: id
  });
});

// eliminar data
app.delete('/usuario', (req, res) => {
  res.json('delete usuario');
});

app.listen(process.env.PORT, () => {
  console.log(`Escuchando puerto ${process.env.PORT}`);
});