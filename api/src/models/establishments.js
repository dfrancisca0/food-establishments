module.exports = function (sequelize, DataTypes) {
  const Establishment = sequelize.define('Establishment',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      signatura: {
        type: DataTypes.STRING,
      },
      denominacio_comercial: {
        type: DataTypes.STRING,
      },
      grup: {
        type: DataTypes.STRING,
      },
      subgrup: {
        type: DataTypes.STRING,
      },
      inici_d_activitat: {
        type: DataTypes.DATE,
      },
      estat: {
        type: DataTypes.STRING,
      },
      municipi: {
        type: DataTypes.STRING,
      },
      localitat: {
        type: DataTypes.STRING,
      },
      direcci: {
        type: DataTypes.STRING,
      },
      utm_x: {
        type: DataTypes.DOUBLE,
      },
      utm_y: {
        type: DataTypes.DOUBLE,
      },
      categoria_gold: {
        type: DataTypes.STRING,
      },
      activitat_secund_ria: {
        type: DataTypes.STRING,
      },
      aforament_m_xim: {
        type: DataTypes.INTEGER,
      },
      explotador_s: {
        type: DataTypes.STRING,
      },
      latitude: {
        type: DataTypes.DOUBLE,
      },
      longitude: {
        type: DataTypes.DOUBLE,
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    }, {
      sequelize,
      tableName: 'establishments',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        }
      ]
    }
  )

  Establishment.associate = function (models) {
    
  }

  return Establishment
}