const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");
/*
// Matches with "/api/articles"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

  router.route("*")
.get(articlesController.findAll); */
module.exports = router;
