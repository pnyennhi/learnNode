index = function(req, res, next) {
  var name = req.params["name"];
  res.render("index", { title: name });
};

index1 = function(req, res, next) {
  res.render("index", { title: "Express" });
};

module.exports = {
  index: index,
  index1: index1
};
