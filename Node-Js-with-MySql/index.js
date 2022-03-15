var mysql = require('mysql');

var DataBaseCon = {

    host: 'localhost',
    user: "root",
    password: "",
    database: "demo"
}

var con = mysql.createConnection(DataBaseCon);
con.connect(function(error) {
    if (error) {
        console.log("Connection Failed");
    } else {
        console.log("Connection Success");
        //InsertData(con);
        //DeleteDataByID(con);
        //UpdateDataByID(con);
        SelectData(con);
    }
});

function InsertData(con) {

    let SQLQuery = "INSERT INTO `students`(`id`, `name`, `roll`, `class`, `phone`, `city`) VALUES ('6','susmita','102005','3rd year','7875963645','Kolkata')";

    con.query(SQLQuery, function(error) {

        if (error)
            console.log("Insert Operation Fail");
        else
            console.log("Insert Operation Success");

    });

}

function DeleteDataByID(con) {

    let SQLQuery = "DELETE FROM `students` WHERE `id`='2' ";

    con.query(SQLQuery, function(error) {

        if (error)
            console.log("Delete Operation Fail");
        else
            console.log("Delete Operation Success");

    });

}

function UpdateDataByID(con) {

    let SQLQuery = "UPDATE `students` SET `phone`='9966458725' WHERE `id`=3 ";

    con.query(SQLQuery, function(error) {

        if (error)
            console.log("Update Operation Fail");
        else
            console.log("Update Operation Success");

    });

}

function SelectData(con) {

    let SQLQuery = "SELECT * FROM `students` ";

    con.query(SQLQuery, function(error, result) {

        if (error)
            console.log("Select Operation Fail");
        else
            console.log(result);

    });

}