const express = require("express");
const router = express.Router();
const {
  getPeople,
  createPerson,
  updatePerson,
  deletPerson,
} = require("../controller/people");

// router.get("/", getPeople);
// router.post("/", createPerson);
// router.put("/:id", updatePerson);
// router.delete("/:id", deletPerson);

router.route('/').get(getPeople).post(createPerson)
router.route('/:id').put(updatePerson).delete(deletPerson)

module.exports = router;
