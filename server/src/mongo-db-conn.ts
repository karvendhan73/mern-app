import mongoose from 'mongoose';
import app from './express-app';

const port = 3200;

mongoose
  .connect('mongodb+srv://root:<password>@cluster0.k1mabou.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('Mongoose connected');
    app.listen(port, () => {
      console.log('Server' + 'running on port: ' + port);
    });
  })
  .catch(console.error);
