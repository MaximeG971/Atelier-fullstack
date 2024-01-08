const AbstractManager = require("./AbstractManager");

class SignupManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "signup" as configuration
    super({ table: "signup" });
  }

  // The C of CRUD - Create operation

  async create(signup) {
    // Execute the SQL INSERT query to add a new signup to the "signup" table
    const [result] = await this.database.query(
      `insert into ${this.table} (email, password) values (?, ?)`,
      [signup.email, signup.password]
    );

    // Return the ID of the newly inserted signup
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  // async read(id) {
  //   // Execute the SQL SELECT query to retrieve a specific signup by its ID
  //   const [rows] = await this.database.query(
  //     `select t.*, s.name AS sport FROM signup t JOIN sport s ON s.id = t.sport_id where t.id = ?`,
  //     [id]
  //   );

  // Return the first row of the result, which represents the signup
  //   return rows[0];
  // }

  //   async readAll() {
  //     // Execute the SQL SELECT query to retrieve all signups from the "signup" table
  //     const [rows] = await this.database.query(`select * from ${this.table}`);

  //     // Return the array of signups
  //     return rows;
  //   }

  //   // The U of CRUD - Update operation
  //   // TODO: Implement the update operation to modify an existing signup

  //   async update(id, signup) {
  //     // Execute the SQL SELECT query to retrieve a specific signup by its ID
  //     const [rows] = await this.database.query(
  //       `UPDATE ${this.table} SET name = ?, country = ?, league = ?, logo = ?, sport_id = ? where id = ?`,
  //       [
  //         signup.name,
  //         signup.country,
  //         signup.league,
  //         signup.logo,
  //         signup.sport_id,
  //         id,
  //       ]
  //     );

  //     // Return the first row of the result, which represents the signup
  //     return rows.affectedRows;
  //   }

  //   // The D of CRUD - Delete operation
  //   async delete(id) {
  //     // Execute the SQL SELECT query to retrieve a specific signup by its ID
  //     const [rows] = await this.database.query(
  //       `delete from ${this.table} where id = ?`,
  //       [id]
  //     );

  //     // Return the first row of the result, which represents the signup
  //     return rows[0];
  //   }
}

module.exports = SignupManager;
