/* eslint-disable */

// Charset declaration

charset = "utf-8"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("categories", [
      {
        name: "man",
      },
      { name: "technology" },
      { name: "nature" },
      { name: "artistic" },
      { name: "sign" },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {})
  },
}
