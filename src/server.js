const express = require('express');
const cartRoutes = require('./routes/cart.routes');

const app = express();
app.use(express.json());

app.use('/cart', cartRoutes); // agora suas rotas vão funcionar

app.use((req, res) => res.status(404).send('Rota não encontrada'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
