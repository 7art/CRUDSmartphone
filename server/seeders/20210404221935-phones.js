"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Phones",
      [
        {
          title: "Apple",
          price: "900",
          description:
            "Тип матриці OLED, Кількість ядер процесора	6 ядер, Колір	Black",
          image: "/s/1.jpg",
        },
        {
          title: "Xiaomi",
          price: "300",
          description:
            "Тип матриці AMOLED, Кількість ядер процесора 8 ядер, Колір	Grey",
          image: "/s/2.jpg",
        },
        {
          title: "Samsung",
          price: "500",
          description:
            "Тип матриці Super AMOLED, Кількість ядер процесора	6 ядер, Колір Black",
          image: "/s/3.jpg",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Phones", null, {});
  },
};
