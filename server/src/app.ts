import mongoose from 'mongoose';
import app from './app';

const port = 3200;

mongoose
  .connect('')
  .then(() => {
    console.log('Mongoose connected');
    app.listen(port, () => {
      console.log('Server running on port: ' + port);
    });
  })
  .catch(console.error);
