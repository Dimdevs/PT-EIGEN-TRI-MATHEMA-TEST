import express from "express";
import {
    getBooks,
    getBooksById,
    createBook,
    updateBook,
    deleteBook
} from "../controllers/BookController.js";

import {
    getMembers,
    getMembersById,
    createMember,
    updateMember,
    deleteMember
} from "../controllers/MemberController.js";

import {
    getMemberBorrowBooks,
    getMemberBorrowBooksById,
    createMemberBorrowBook,
    updateMemberBorrowBook,
    deleteMemberBorrowBook
} from "../controllers/MemberBorrowBookController.js"

import {
    getMemberPenalties,
    getMemberPenaltiesById,
    createMemberPenaltie,
    updateMemberPenaltie,
    deleteMemberPenaltie
} from "../controllers/MemberPenaltieController.js";

import {
    getReturnBooks,
    getReturnBooksById,
    createReturnBook,
    updateReturnBook,
    deleteReturnBook
} from "../controllers/ReturnBookController.js";

const router = express.Router();

// Book
router.get('/books', getBooks); 
router.get('/books/:id', getBooksById);
router.post('/books', createBook);
router.patch('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

// Member
router.get('/members', getMembers); 
router.get('/members/:id', getMembersById);
router.post('/members', createMember);
router.patch('/members/:id', updateMember);
router.delete('/members/:id', deleteMember);

// Member Borrow Book
router.get('/memberborrowbooks', getMemberBorrowBooks); 
router.get('/memberborrowbooks/:id', getMemberBorrowBooksById);
router.post('/memberborrowbooks', createMemberBorrowBook);
router.patch('/memberborrowbooks/:id', updateMemberBorrowBook);
router.delete('/memberborrowbooks/:id', deleteMemberBorrowBook);

// Member Penaltie
router.get('/memberpenalties', getMemberPenalties); 
router.get('/memberpenalties/:id', getMemberPenaltiesById);
router.post('/memberpenalties', createMemberPenaltie);
router.patch('/memberpenalties/:id', updateMemberPenaltie);
router.delete('/memberpenalties/:id', deleteMemberPenaltie);

// Return Book
router.get('/returnbooks', getReturnBooks); 
router.get('/returnbooks/:id', getReturnBooksById);
router.post('/returnbooks', createReturnBook);
router.patch('/returnbooks/:id', updateReturnBook);
router.delete('/returnbooks/:id', deleteReturnBook);
export default router;