const register = (req, res) => {
  res.send("User Registerd");
};
const login = (req, res) => {
  res.send("User logged in");
};
const logout = (req, res) => {
  res.send("User logged out");
};

module.exports = { register, login, logout };
