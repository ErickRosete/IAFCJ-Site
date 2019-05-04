const express = require("express");
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const graphqlSchema = require("./graphql/schema/index");
const graphqlResolvers = require("./graphql/resolvers/index");

const multer = require("multer");
const bodyParser = require("body-parser");

const externalRequest = require("./middleware/external-requests");
const isAuth = require("./middleware/is-auth");

const { sendEmail } = require("./helpers/sendEmail");
const { sendNewsletterEmail } = require("./helpers/sendNewsletterEmail");
const { saveImage } = require("./helpers/images");

const app = express();

app.use(bodyParser.json());
app.use(externalRequest);
app.use(express.static('public'))
app.use(isAuth);

app.use(
  "/graphql",
  expressGraphQL({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true
  })
);

app.post('/sendEmail', (req, res) => {
  const isSend = sendEmail(req.body);
  isSend ? res.status(200).json(req.body) : res.status(400).send({ error: "server error" });
});

app.post('/sendNewsletterEmail', (req, res) => {
  const isSend = sendNewsletterEmail(req.body);
  isSend ? res.status(200).json(req.body) : res.status(400).send({ error: "server error" });
});

const upload = multer({
  dest: "./uploads"
});

app.post('/uploadImage', upload.single("file"), (req, res) => {
  saveImage(req, res);
});

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${
    process.env.MONGO_PASSWORD
    }@cluster0-0uvqc.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`
    , { useNewUrlParser: true })
  .then(() => app.listen(8000))
  .catch(err => console.log(err));
