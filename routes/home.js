const router = require("koa-router")();
const koaBody = require("koa-body")({ multipart: true });

router.get("/", async (ctx, next) => {
  await ctx.render("home");
  await next();
});

router.post("/file-size", koaBody, async (ctx, next) => {
  const size = ctx.request.body.files.file.size;
  if (!size) {
    ctx.throw(400, "Please, upload a file to get its size");
  } else {
    ctx.body = { size };
    await next();
  }
});

module.exports = router;
