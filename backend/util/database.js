let Sequelize=require('sequelize');
let sequelize=new Sequelize("expenses","root","Admin@123",{dialect:"mysql",
host:"localhost"})

module.exports=sequelize