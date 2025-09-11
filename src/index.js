import 'dotenv/config';
import { configExpress } from './config/configExpress.js';

const { app } = configExpress();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
