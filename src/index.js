const routes = [
    require('./routes/routesVeiculo')
  ];
  
  // Adicione acesso aos objetos app e db a cada rota
  module.exports = function router(app, db) {
    return routes.forEach((route) => {
      route(app, db);
    });
  };