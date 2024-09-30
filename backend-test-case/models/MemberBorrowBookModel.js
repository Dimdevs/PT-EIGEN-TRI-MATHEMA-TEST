import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Member from './MemberModel.js';
import Book from './BookModel.js';

const { DataTypes } = Sequelize;

const MemberBorrowBook = db.define('memberborrowbooks', {
    book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'books', // Nama tabel books (sesuaikan dengan tabel Anda)
            key: 'id'
        }
    },
    member_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'members', // Nama tabel members (sesuaikan dengan tabel Anda)
            key: 'id'
        }
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    date_penalty: {
        type: DataTypes.DATE,
        allowNull: true // Bisa null jika tidak ada penalti
    },
    quantity_borrow: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1 // Set nilai default jika tidak diisi
    }
}, {
    freezeTableName: true
});

MemberBorrowBook.belongsTo(Member, { foreignKey: 'member_id' });
MemberBorrowBook.belongsTo(Book, { foreignKey: 'book_id' });
export default MemberBorrowBook;

(async () => {
    await db.sync();
})();