import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Member = db.define('members', {
    code: DataTypes.STRING,
    name: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Member;

(async () => {
    await db.sync();
})();