import Router  from "express"
import {  getProducts, 
    createNewProduct,
    getProductById,
    deleteProductById,
} from "../controllers/products.controller"


const router = Router();
//ruta para consuta de rutas
router.get("/products",getProducts);

router.post("/products",createNewProduct);

router.delete("/products",deleteProductById);

router.get("/products/:id",getProductById);



export default router