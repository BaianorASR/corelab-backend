import App from '@/app';
import helloworldRoute from '@routes/helloworld.route';
import vehiclesRoute from '@routes/vehicles.route';

const app = new App([helloworldRoute, vehiclesRoute]);

app.listen();
