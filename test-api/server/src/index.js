const { CLIENT_URL, PORT } = require('./constant');
const { successResponse, errorResponse } = require('./middleware');
const { express, cors } = require('./utils');

const app = express();


// initialize middlewares
app.use(express.json());
app.use(cors({ origin: CLIENT_URL }));
// middleware to show custom success message
app.use(successResponse)
// middleware to show custom error message
app.use(errorResponse);



//
app.use('/', (req, res) => {
    const data = {
        name: "akshay",
        age: 21
    }
    res.error("test implementation");
});




const appStart = () => {
    try {
        app.listen(PORT, () => {
            console.log(`The server is running at http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log(`Error : ${error?.message}`);
    }
}

appStart();