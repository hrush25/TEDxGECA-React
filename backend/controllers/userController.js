const bodyParser = require("body-parser");
const con = require("../config/database.js");

const userInsert = (req, res) => {

    // const allProcess = req.body.process;
    // const orderId = req.body.form.order_no;
    // console.log(orderId);
    const params = req.body.form;

    con.query("INSERT INTO user SET ?", params, (err, rows) => {
        // connection.release()
        if (!err) {
            res.send(`added.`);
        } else {
            console.log(err);
        }


    });


};

module.exports = { userInsert };