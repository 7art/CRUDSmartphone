const { Router } = require("express");
const router = Router();

const {
  getItems,
  getItem,
  createItems,
  deleteItem,
  updateItem,
  searchItem,
} = require("../controllers/index.controller");

router.get("/phones/:id", getItem);

router.get("/phones", getItems);

router.post("/phones", createItems);

router.delete("/phones/:id", deleteItem);

router.put("/phones/:id", updateItem);

router.get("/search?", searchItem);

module.exports = router;
