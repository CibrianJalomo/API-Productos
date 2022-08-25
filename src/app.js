import  express  from "express";
/*import cors from "cors";

import morgan from "morgan";
*/
import config from "./config";

import productRoutes from "./routers/products.routes";

const app = express();


// settings
app.set("port", config.port)

// Middlewares
/*app.use(cors());
app.use(morgan("dev"));*/

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", productRoutes);

export default app;