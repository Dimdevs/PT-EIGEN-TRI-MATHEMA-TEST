import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import MemberBorrowBook from './MemberBorrowBookModel.js';

const { DataTypes } = Sequelize;

const MemberPenaltie = db.define('memberpenalties', {
    memberborrowbook_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'memberborrowbooks', // Nama tabel memberborrowbooks
            key: 'id'
        }
    },
    penalty_date: {
        type: DataTypes.DATE,
        allowNull: false // Pastikan ini tidak null
    }
}, {
    freezeTableName: true
});

MemberPenaltie.associate = (models) => {
    MemberPenaltie.belongsTo(models.MemberBorrowBook, {
        foreignKey: 'member_borrow_book_id',
        as: 'borrowRecord'
    });
};
export default MemberPenaltie;

(async () => {
    await db.sync();
})();