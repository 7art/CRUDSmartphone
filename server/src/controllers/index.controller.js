const Sequelize = require("sequelize");

const db = require("../../models/index.js");

const getItems = async (req, res) => {
  db.Phones.findAll({ order: [["id", "DESC"]] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving item.",
      });
    });
};

const getItem = async (req, res) => {
  const id = req.params.id;
  db.Phones.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving item with id=" + id,
      });
    });
};

const createItems = async (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const phone = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    image: req.body.image,
  };

  db.Phones.create(phone)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating.",
      });
    });
};

const deleteItem = async (req, res) => {
  const id = req.params.id;

  db.Phones.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Item deleted",
        });
      } else {
        res.send({
          message: `Cannot delete item with id=${id}!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete item with id=" + id,
      });
    });
};

const updateItem = async (req, res) => {
  const id = req.params.id;

  db.Phones.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Item was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update item with id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating item with id=" + id,
      });
    });
};

const searchItem = async (req, res) => {
  const title = req.query.title;

  var condition = title
    ? { title: { [Sequelize.Op.iLike]: `${title}` } }
    : null;

  db.Phones.findAndCountAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving items.",
      });
    });
};

module.exports = {
  getItems,
  getItem,
  createItems,
  deleteItem,
  updateItem,
  searchItem,
};
