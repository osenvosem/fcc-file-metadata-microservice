const Koa = require("koa");
const views = require("koa-views");
const serve = require("koa-static");
const routes = require("./routes");

const app = new Koa();

app.use(serve(__dirname + "/public"));
app.use(views(__dirname + "/views", { extension: "pug" }));
app.use(routes);

app.listen(process.env.PORT || 3000);
