module.exports = (app, db) => {
    // BUSCAR TODOS OS VEICULOS
    app.get('/veiculo', (req, res) => {
      db.veiculo.findAll()
        .then(veiculo => {
          res.status(200).json(veiculo);
        });
    });
  
    // BUSCAR APENAS UM VEICULO POR ID
    app.get('/veiculo/:id', (req, res) => {
      const id = req.params.id;
      db.veiculo.find({
        where: { id: id}
      })
        .then(veiculo => {
          res.status(200).json(veiculo);
        });
    });
  
    // CRIAR UM VEICULO
    app.post('/veiculo', (req, res) => {
      
      const {nomeVeiculo, marca, ano, descricao, vendido} = req.body;

      db.veiculo.create({
        nomeVeiculo: nomeVeiculo,
        marca: marca,
        ano: ano,
        descricao: descricao,
        vendido: vendido
      })
        .then(createVeiculo => {
        res.status(201).json(createVeiculo);
      });
    });
  
    // ATUALIZAR UM VEICULO PASSANDO O ID
    app.patch('/veiculo/:id', (req, res) => {
      const id = req.params.id;
      const updates = req.body.updates;
      db.veiculo.find({
        where: { id: id }
      })
        .then(veiculo => {
          return veiculo.updateAttributes(updates);
        })
        .then(updatedVeiculo => {
          res.status(200).json(updatedVeiculo);
        }).catch(err => {
          res.status(400).json({"message": err})
        });
    });
  
    // DELETAR UM VEICULO POR ID
    app.delete('/veiculo/:id', (req, res) => {
      const id = req.params.id;
      db.veiculo.destroy({
        where: { id: id }
      }).then(deletedVeiculo => {
          res.status(200).json({"id":deletedVeiculo, "message": "Excluido com sucesso!!"});
        }).catch(err =>{
          res.status(401).json({"message": "Erro ao excluir!!", err});
        });
    });
  
  };