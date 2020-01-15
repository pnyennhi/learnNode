index = function(req, res, next) {
  var name = req.params["name"];
  res.render("index", { title: name });
};

module.exports = {
  index: index
};
