import App from '@/app';
import helloworldRoute from '@routes/helloworld.route';

const app = new App([helloworldRoute]);

app.listen();
