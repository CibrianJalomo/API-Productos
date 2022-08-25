import { restart } from "nodemon";
import { getConnection, querys, sql} from "../database";


export const getProducts = async (req,res) => {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllProducts);
    res.json(result.recordset);
    /*
    try {
        
            //querys.getAllProducts);
        res.json(result.recordset);
      } catch (error) {
        res.status(500);
        res.send(error.message);
      }
    */
};
export const createNewProduct = async (req,res)=> {
    const {codigo, producto, precio} = req.body;
    console.log(codigo,producto,precio);
    try {
        const pool = await getConnection();
        await pool
        .request()
        .input("codigo", sql.VarChar, codigo)
        .input("producto", sql.VarChar, producto)
        .input("precio", sql.Money, precio)
        .query(querys.createNewProduct);
        res.json({codigo, producto, precio});
    
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};
export const getProductById = async (req, res) => {
    const {id} = req.params;
   
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("id", id)
        .query(querys.getProductById);
       // console.log(result);
    /*try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("id", req.params.id)
        .query(querys.getProductById);
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }*/
    res.send(result);
  };
export const deleteProductById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("id", req.params.id)
        .query(querys.deleteProduct);
  
      if (result.rowsAffected[0] === 0) return res.sendStatus(404);
  
      return res.sendStatus(204);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

