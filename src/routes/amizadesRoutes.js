const express = require('express');
const router = express.Router();
const amizadesController = require('../controllers/AmizadesController');

// Rota para criar uma nova conquista (CREATE)
router.post('/', amizadesController.create);

// Rota para listar todas as conquistas (READ)
router.get('/', amizadesController.list);

// Rota para mostrar uma conquista (READ)
router.get('/:id', amizadesController.show);

// Rota para atualizar uma conquista (UPDATE)
router.put('/:id', amizadesController.update);

// Rota para deletar uma conquista (DELETE)
router.delete('/:id', amizadesController.delete);

module.exports = router;
