import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Member from './MemberModel.js';
import Book from './BookModel.js';

const { DataTypes } = Sequelize;

const ReturnBook = db.define('returnbooks', {
    member_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Member,  // Use the Member model reference directly
            key: 'id'
        }
    },
    book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Book,  // Use the Book model reference directly
            key: 'id'
        }
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    freezeTableName: true
});

// Define associations
ReturnBook.belongsTo(Member, { foreignKey: 'member_id' });
ReturnBook.belongsTo(Book, { foreignKey: 'book_id' });

export default ReturnBook;

(async () => {
    await db.sync({ alter: true });  // Adjust schema if needed
})();
