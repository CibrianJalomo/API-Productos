export const querys = {
    getAllProducts: "SELECT TOP(500) * FROM [webstore].[dbo].[Products]",
    getProducById: "SELECT * FROM Products Where Id = Id",
    createNewProduct:
    "INSERT INTO [webstore].[dbo].[Products] (Codigo, Producto, Precio) VALUES (@codigo, @producto, @precio)",
    deleteProduct: "DELETE FROM [store].[dbo].[Products] WHERE Id= @Id",
}; 