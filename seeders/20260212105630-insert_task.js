'use strict';

const { DATE } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Tasks', [{
       task_name:"coffee",   
       description:"plan to go coffe",
       priority:"low",
       status:"progres",
       createdAt:new Date(),
       updatedAt:new Date()
    },{
      task_name:"lunch",   
       description:"plan to go coffe",
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
