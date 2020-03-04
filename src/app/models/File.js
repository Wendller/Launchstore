const db = require("../../config/db");
const fs = require("fs");

module.exports = {

  create(data, product_id) {
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
      data.filename,
      data.path,
      product_id
    ]

    // Coxexao com o DB

    return db.query(query, values);

  },
  async delete(id) {

    try {
      const result = await db.query(`SELECT * FROM files WHERE id = ${id}`)
      const file = result.rows[0]

      fs.unlink(file.path, (err) => {
        if(err) throw err
        
        return db.query(`DELETE FROM files WHERE id = ${id}`)
      });

    }catch(err) {
      console.error(err)
    }

  }

}