import ReturnBook from "../models/ReturnBookModel.js";
import Member from '../models/MemberModel.js';
import Book from '../models/BookModel.js';

// Get all member borrow books with member name and book title
export const getReturnBooks = async (req, res) => {
    try {
        const borrowBooks = await ReturnBook.findAll({
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
export const getReturnBooksById = async (req, res) => {
    try {
        const borrowBook = await ReturnBook.findByPk(req.params.id, {
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
export const createReturnBook = async (req, res) => {
    try {
        await ReturnBook.create(req.body);
        res.status(201).json({ message: "ReturnBook Created" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Update member borrow book record by ID
export const updateReturnBook = async (req, res) => {
    try {
        const updated = await ReturnBook.update(req.body, {
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
export const deleteReturnBook = async (req, res) => {
    try {
        const deleted = await ReturnBook.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(200).json({ message: "ReturnBook Deleted" });
        } else {
            res.status(404).json({ message: "Borrow record not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
