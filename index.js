// Import Milligram CSS framework - https://milligram.io/
import "milligram";

// Require Choo
var choo = require("choo");

var app = choo();
if (process.env.NODE_ENV !== "production") {
  app.use(require("choo-devtools")());
} else {
  app.use(require("choo-service-worker")());
}

app.use(require("./stores/clicks"));

app.route("/", require("./views/main"));
app.route("/*", require("./views/404"));

module.exports = app.mount("body");
