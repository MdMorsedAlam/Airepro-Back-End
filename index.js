const express = require("express");
const connDB = require("./src/DB/connectDb")
const app = express();
const port = 1212;
const cors=require("cors")
const productsRoutes = require('./src/modules/products/products.route')
const salseRoutes = require('./src/modules/sales/salse.routes')
// const cron=require("node-cron")

app.use(express.json())
app.use(cors())
connDB.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    const productsTable = "CREATE TABLE IF NOT EXISTS products (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), description VARCHAR(255),price INT,quantity INT)";
    
    connDB.query(productsTable, (error) => {
        if (error) {
            console.error("Error executing query:", error);
           
        }else{
            const salesTable = "CREATE TABLE IF NOT EXISTS salse (id INT AUTO_INCREMENT PRIMARY KEY, product_id INT, quantity_sold INT,sale_date VARCHAR(255))";
            connDB.query(salesTable, (error) => {
                if (error) {
                    console.error("Error executing query:", error);
                   
                }else{
                    console.log("Connected successfully");
                }
        
            });
        }

    });
    
  }
});

// cron.schedule('*/10 * * * * *',()=>{
//     console.log("first")
// })

app.get("/",(req,res)=>{
    res.send("AirePro Server Is Running")
})


app.use('/products', productsRoutes)
app.use('/salse', salseRoutes)

app.listen(port, () => {
  console.log(`This Server is running on http://localhost:${port}`);
});
