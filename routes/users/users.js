const express = require("express");
const router = express.Router();

const data = [
  { id: 1, name: "Joe" },
  { id: 2, name: "Marc" },
  { id: 3, name: "Zaher" },
  { id: 4, name: "Rima" },
];

router.get("/", (req, res) => {
  res.json(data);
});

router.get("/query", (req, res) => {
  const { search, limit } = req.query;
  let users = [...data];
  if (search) {
    users = users.filter((user) => user.name.includes(search));
  }
  if (limit) {
    users = users.slice(0, parseInt(limit));
  }
  if (users.length > 0)
    return res.json({ status: "success", data: [...users] });
  res.status(204).json({ status: "failure", data: [] });
});

router.get(`/:userID`, (req, res) => {
  const user = data.find((user) => user.id == parseInt(req.params.userID));
  if (!user) return res.status(404).send("User not found");
  return res.json(user);
});

module.exports = router;
