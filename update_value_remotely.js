// Get the client
import mysql from 'mysql2/promise';



// Create the connection to database
const connection = await mysql.createConnection({
    host: '34.135.44.131', 
    user: 'booderremote',
    database: 'binance',
     port: '3306',
     password: '123456',
});


try {
  //const sql = 'INSERT INTO wallet (`cur`,`solde`) VALUES ("BTC",  3)';
  
  const sql = 'UPDATE wallet SET `solde` = 18 WHERE `cur` = "BTC" ';

  const [result, fields] = await connection.query(sql);

  console.log(result);
  console.log(fields);
} catch (err) {
  console.log(err);
}
