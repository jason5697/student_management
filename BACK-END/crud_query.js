var connection=require('./db')


const show = (req, res) => {
    var qry = "SELECT * FROM `student-login` ";
    connection.query(qry, function (err, result) {
        if (err) {
            res.send({
                status: 400,
                message: "err",
                data: err

            })
        }
        else if (result.length > 0) {
            res.send({
                status: 200,
                message: "success",
                data: result
            })
        }
        else {
            res.send({
                status: 200,
                message: "incorrect details",
                data: result
            })
        }

    })
}

const view = (req, res) => {
    var qry = "SELECT full_name,father_name,DOB,gender,location,mobile_number,email,department,batch FROM `student-login` WHERE roll_no=?"
    connection.query(qry, [req.body.id], function (err, result) {
        if (err) {
            res.send({
                status: 400,
                message: "err",
                data: err

            })
        }
        else if (result.length > 0) {
            res.send({
                status: 200,
                message: "success",
                data: result
            })
        }
        else {
            res.send({
                status: 200,
                message: "Students data not found",
                data: result
            })

        }

    })
}

const update = (req, res) => {

    var upda = "UPDATE `student-login` SET full_name=?,father_name=?,DOB=?,gender=?,mobile_number=?,email=?,department=?,batch=? WHERE roll_no=?";
    connection.query(upda, [req.body.full_name, req.body.father_name, req.body.DOB, req.body.gender,req.body.mobile_number,req.body.email,req.body.department,req.body.batch,req.body.roll_no], function (err, result) {
        if (err) {
            res.send({
                status: 400,
                message: "err",
                data: err
            })
        }
        else if (result) {
            res.send({
                status: 200,
                message: "sucess",
                data: result
            })
        }
    }

    )
}

const insert = (req, res) => {
     {
        const name = "insert into `student-login` (full_name,father_name,DOB,gender,location,mobile_number,email,department,batch) values(?,?,?,?,?,?,?,?,?);"
        connection.query( name, [req.body.full_name, req.body.father_name, req.body.DOB,req.body.gender,req.body.location,req.body.mobile_number,req.body.email,req.body.department,req.body.batch], function (err, result) {
            if (err) {
                res.send({
                    status: 400,
                    message: "data didnot save",
                    data: err

                })
            }

            else if (result) {
                res.send({
                    status: 200,
                    message: "sucess",
                    data: result
                })

            }
        })
    }
}

const dele = (req, res) => {
    var del = "DELETE FROM `student-login` where roll_no=?";
                    connection.query(del, [req.body.roll_no], function (err, result) {
                        if (err) {
                            res.send({
                                status: 400,
                                message: "err",
                                data: err
                            })
                        }
                        else if (result) {
                            res.send({
                                status: 200,
                                message: "delete sucessfully",
                                data: result
                            })
                        }
                    })
}

module.exports = { show,view,update,insert, dele};