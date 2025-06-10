
const http = require("http");

const mongodb = require ("mongodb");

let db;
const connectionString = "mongodb+srv://deena94:dO9F4rltdHVq0Eda@cluster0.qdmubkf.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0";

mongodb.connect(
    connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) => {
        if (err) console.log("ERROR on connction MongoDB");
        else{
            console.log("MongoDB connection succeed");
            module.exports = client;

            const app = require("./app");
            const server = http.createServer(app);
            let PORT = 3000;
            server.listen(PORT, function(){
                console.log(
                    `The server is runnning successfully on port: ${PORT}, http://localhost:${PORT}`);
            });
        }
    }
);

// module.exports = client;


// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT, function () {
//   console.log(`The server is running successfully on port: ${PORT}, `

//   );
// });
