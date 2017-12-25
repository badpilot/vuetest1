const userApo = require('./api/userApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend:false}));

//后端app路由
app.use('/api/user',userApi);

//监听端口
app.listen(3000);
console.log('success listen at port :3000');