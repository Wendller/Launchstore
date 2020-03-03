const db = require("../../config/db");


module.exports = {

  create(filename, path, product_id) {
    //? Criando query para inserir dados 
    const query = `
      INSERT INTO files ( 
        name,
        path,
        product_id
      ) VALUES ($1, $2, $3)
      RETURNING id
    `

    const values = [
      filename,
      path,
      product_id
    ]

    // Coxexao com o DB

    return db.query(query, values);

  }

}