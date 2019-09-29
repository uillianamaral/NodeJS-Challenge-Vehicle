module.exports = (sequelize, DataTypes) => {
  const Veiculo = sequelize.define('tb_veiculo', {
    
    nomeVeiculo: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false
    },
    marca: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false
    },
    ano: {
        type: DataTypes.INTEGER,
        required: true,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        required: true,
        allowNull: false
    },
    vendido: {
        type: DataTypes.BOOLEAN,
        required: true,
        allowNull: false
    }
});
  return Veiculo;
};