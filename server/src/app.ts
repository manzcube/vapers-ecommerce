import express, { json, urlencoded } from 'express';
import cors from "cors"

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "PUT", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Frame-Options"],
  optionsSuccessStatus: 200, // status for preflights
};
// Aply cors restrictions
app.use(cors(corsOptions));
// We want all transmited data in json before being read
app.use(json());

// This options set the request body into req.body
app.use(
  urlencoded({
    extended: false,
  })
);

app.options(
  ["/", "home"],
  function (req, res) {
    // Set the allowed HTTP methods and headers
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.send();
  }
);

app.get('/', (req, res) => {
  res.status(200).json({ message: "Tu madre me lo mama" });
});
app.get('/home', (req, res) => {
  res.status(200).json({ message: "Tu madre me lo mama" });
});
app.listen(5000, () => {
  console.log('Server listening on port 5000');
});