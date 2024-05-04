
const connDB = require("../../DB/connectDb");

exports.getAllSalse = async (req, res) => {
    try {
        const getSalse = "SELECT * FROM `salse`";

        connDB.query(getSalse, (error, results) => {
            if (error) {
                console.error("Error executing query:", error);
                res.status(500).send("Error executing query");
            } else {
                res.json(results); // Send the query results as a response
            }
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal server error");
    }
};


// exports.createBook = async (req, res) => {
//   try {

//     const data = req.body;
//     const result = await createBookService(data);

//     return res.status(200).json({
//       status: "Success",
//       message: "Book created successful",
//       data: result,
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: "Failed",
//       message: "Something went wrong!!",
//       error: error,
//     });
//   }
// };
