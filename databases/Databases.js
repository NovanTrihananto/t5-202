import { Sequelize } from "sequelize";
// Nyambungin db ke BE
const db = new Sequelize("notes", "root", "", {
 host: "34.133.242.141",
 dialect: "mysql",
});
export default db;