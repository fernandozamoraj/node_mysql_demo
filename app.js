//Read the README.txt file to setup MySQL
//, setup the modules and
//  run from command line
let inquirer = require("inquirer")
let mysql = require("mysql")
let productId = false
let qty = 0

let questions = {
    name: "productId",
    type: "input",     //see inquirer docs for other types
    message: "Enter product id?"
}

let connection = mysql.createConnection(
     //in real application keep this in a separate file that you do not commit
     {
        host: "localhost",
        user: "root",
        //port: 3306, //since the default is 3306 there is no need to specify it
        password: "password",
        database: "fzj_store" //schema in MySQL WorkBench
    } 
)

//1. calls 2
connection.connect(function(err){
    if(err) throw err;
    console.log("Connected to db")
    promptUserForProductId()
})

//2. Calls 3
function promptUserForProductId(){
    inquirer.prompt(
        questions
    )
    .then(getProductId)
}

//3. Calls 4
function getProductId(result){
    productId = result.productId;
    console.log("Product id is " + productId)

    questions.name = "qty"
    questions.message = "How many would you like to buy?"

    inquirer.prompt(
        questions
    )
    .then(getQuantity)
}

//4. calls 5
function getQuantity(answer){
    console.log("type of quantity")
    console.log(typeof answer.qty)
    qty = answer.qty

    console.log("updating the database...")

    console.log("select * from product where id = " + productId)
    
    connection.query('SELECT * from `product` WHERE `id`= ?',
     [productId],
     updateProductQty)
}

//5. Updates the database... No further calls... 
function updateProductQty(error, results, fields){

    if(error) throw error

    console.log("connected to db...")
    console.log(results)
    console.log(results.length)
    if(results.length == 1){
        let newQty = results[0].qty - qty 
    
        connection.query('UPDATE `product` SET `qty` = ? WHERE `id` = ?', 
            [newQty, productId],
            function(error, results, fields){
                if(error) throw error
                console.log(results.affectedRows + " records updated...")
                connection.close()
            }
        )
    }
    //console.log(fields)
}