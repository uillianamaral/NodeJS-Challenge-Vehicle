module.exports = (app, db) => {
    // BUSCAR TODOS OS VEICULOS
    app.get('/veiculo', async (req, res) => {
      await db.veiculo.findAll()
        .then(veiculo => {
          res.status(200).json(veiculo);
        });
    });
  
    // BUSCAR APENAS UM VEICULO POR ID
    app.get('/veiculo/:id', async (req, res) => {
      const idVeiculo = req.params.id;
     await db.veiculo.findOne({
        where: { id: idVeiculo}
      }).then(veiculo => {
          if(!veiculo) {
            return res.status(404).json({"Id invalido: " : veiculo});
          }
          res.status(200).json(veiculo);
        }).catch(err => {
          res.status(400).json({"Erro: " : err})
        });
    });
  
    // CRIAR UM VEICULO
    app.post('/veiculo', async (req, res) => {
      
      const {nomeVeiculo, marca, ano, descricao, vendido} = req.body;

      await db.veiculo.create({
        nomeVeiculo: nomeVeiculo,
        marca: marca,
        ano: ano,
        descricao: descricao,
        vendido: vendido
      })
        .then(createVeiculo => {
        res.status(201).json(createVeiculo);
      }).catch(err => {
          res.status(404).json({"Erro ao cadastrar o Veiculo " : err});
      });
    });
  
    // ATUALIZAR UM VEICULO PASSANDO O ID
     app.put('/veiculo/:id', async (req, res) => {
      const id = req.params.id;
      const updates = {nomeVeiculo, marca, descricao, ano, vendido} = req.body;
      await db.veiculo.findOne({
        where: { id: id }
      }).then(veiculo => {
          return veiculo.update(updates);
        })
        .then(updatedVeiculo => {
          res.status(200).json(updatedVeiculo);
        }).catch(() => {
          res.status(404).json({"message": "ID inexistente"})
        });
    });
  
    // DELETAR UM VEICULO POR ID
    app.delete('/veiculo/:id', async (req, res) => {
      const idVeiculo = req.params.id;
      await db.veiculo.destroy({
        where: { id: idVeiculo}
      }).then(deletedVeiculo => {
        if(!deletedVeiculo){
          return res.status(404).json({"message": "ID inexistente"});
        }
        res.status(200).json({"message": "Veiculo excluido com sucesso!!"});
        }).catch(err =>{
          res.status(401).json({"message": "Erro ao excluir!!", err});
        });
    });
  
  };