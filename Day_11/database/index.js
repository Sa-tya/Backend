const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    'postgres', //database Name
    'postgres', // user name
    'postgres', // password
    {
        host:'localhost',
        dialect: 'postgres',

    }
)
sequelize.sync();
(async ()=>{
    try{
        await sequelize.authenticate();
        console.log('data base connected..')
    } catch(err){
        console.error('unable to connect to db')
    }
})();

module.exports = sequelize;