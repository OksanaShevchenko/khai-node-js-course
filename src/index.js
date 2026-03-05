const express = require('express');

const userRouter = require('./user/user.router');
const productRouter = require('./product/product.router');

const { logRequest } = require('./middleware');
const { errorResponder } = require('./error.middleware');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logRequest);

app.use(productRouter);
app.use(userRouter);

app.use(errorResponder);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
