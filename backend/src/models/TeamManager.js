const AbstractManager = require("./AbstractManager");

class TeamManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "team" as configuration
    super({ table: "team" });
  }

  // The C of CRUD - Create operation

  async create(team) {
    // Execute the SQL INSERT query to add a new team to the "team" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name, country, league, logo, sport_id) values (?, ?, ?, ?, ?)`,
      [team.name, team.country, team.league, team.logo, team.sport_id]
    );

    // Return the ID of the newly inserted team
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific team by its ID
    const [rows] = await this.database.query(
      `select t.*, s.name AS sport FROM team t JOIN sport s ON s.id = t.sport_id where t.id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the team
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all teams from the "team" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of teams
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing team

  // async update(team) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  async delete(id) {
    // Execute the SQL SELECT query to retrieve a specific team by its ID
    const [rows] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the team
    return rows[0];
  }
}

module.exports = TeamManager;
