/* eslint-disable */

// Charset declaration

charset = "utf-8"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("questions", [
      {
        question_text: "Каковы ваши интересы и хобби?",
      },
      {
        question_text: "Чем вам нравится заниматься в свободное время?",
      },
      {
        question_text: "В чем ты хорош?",
      },
      {
        question_text: "Каковы ваши сильные стороны?",
      },
      {
        question_text: "Каковы ваши слабые стороны?",
      },
      {
        question_text: "Каковы ваши ценности и цели в жизни?",
      },
      {
        question_text: "Чем вы увлекаетесь?",
      },
      {
        question_text: "Каковы ваши долгосрочные карьерные цели?",
      },
      {
        question_text:
          "Вы предпочитаете работать самостоятельно или в составе команды?",
      },
      {
        question_text: "Вы предпочитаете работать с людьми или вещами?",
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("questions", null, {})
  },
}
