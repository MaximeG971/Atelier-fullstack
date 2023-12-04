const AbstractManager = require("./AbstractManager");

class SportManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "sport" as configuration
    super({ table: "sport" });
  }

  // The C of CRUD - Create operation

  async create(sport) {
    // Execute the SQL INSERT query to add a new sport to the "sport" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title) values (?)`,
      [sport.title]
    );

    // Return the ID of the newly inserted sport
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific sport by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the sport
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all sports from the "sport" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of sports
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing sport

  // async update(sport) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an sport by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = SportManager;
