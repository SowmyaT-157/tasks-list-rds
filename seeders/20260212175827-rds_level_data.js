'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Tasks', [{
       task_name:"breakfast",   
       description:"plan to go breakfast",
       priority:"low",
       status:"progres",
       createdAt:new Date(),
       updatedAt:new Date()
    },{
      task_name:"temple",   
       description:"plan to go temple",
       priority:"high",
       status:"pending",
       createdAt:new Date(),
       updatedAt:new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('Tasks', null, {});
 
  }
};
