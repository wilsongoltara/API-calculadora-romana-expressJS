const customExpress = require('./config/customExpress');
const app = customExpress();

app.listen(3000, () => {
    console.log("Express start at http://localhost:3000");
});