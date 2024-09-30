import MemberBorrowBook from "../models/MemberBorrowBookModel.js";
import Member from '../models/MemberModel.js';
import Book from '../models/BookModel.js';

// Get all member borrow books with member name and book title
export const getMemberBorrowBooks = async (req, res) => {
    try {
        const borrowBooks = await MemberBorrowBook.findAll({
            include: [
                { model: Member, attributes: ['name'] },  // Sertakan nama member
                { model: Book, attributes: ['title'] }    // Sertakan judul buku
            ]
        });
        res.status(200).json(borrowBooks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single borrow book record by ID with member name and book title
export const getMemberBorrowBooksById = async (req, res) => {
    try {
        const borrowBook = await MemberBorrowBook.findByPk(req.params.id, {
            include: [
                { model: Member, attributes: ['name'] },  // Sertakan nama member
                { model: Book, attributes: ['title'] }    // Sertakan judul buku
            ]
        });
        if (borrowBook) {
            res.status(200).json(borrowBook);
        } else {
            res.status(404).json({ message: "Borrow record not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create new member borrow book record
export const createMemberBorrowBook = async (req, res) => {
    try {
        await MemberBorrowBook.create(req.body);
        res.status(201).json({ message: "MemberBorrowBook Created" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Update member borrow book record by ID
export const updateMemberBorrowBook = async (req, res) => {
    try {
        const updated = await MemberBorrowBook.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated[0] === 1) {
            res.status(200).json({ message: "Borrow record updated successfully" });
        } else {
            res.status(404).json({ message: "Borrow record not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete member borrow book record by ID
export const deleteMemberBorrowBook = async (req, res) => {
    try {
        const deleted = await MemberBorrowBook.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(200).json({ message: "MemberBorrowBook Deleted" });
        } else {
            res.status(404).json({ message: "Borrow record not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
