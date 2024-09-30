import MemberPenaltie from "../models/MemberPenaltieModel.js";
import MemberBorrowBook from '../models/MemberBorrowBookModel.js';
import Member from '../models/MemberModel.js';

export const getAllMemberPenalties = async (req, res) => {
    try {
        const penalties = await MemberPenaltie.findAll({
            include: [
                {
                    model: MemberBorrowBook,
                    as: 'borrowRecord',
                    include: [
                        {
                            model: Member,
                            attributes: ['name'] // Ambil nama member
                        }
                    ],
                    attributes: ['id', 'member_id', 'book_id'] // Tampilkan field yang relevan
                }
            ]
        });
        res.status(200).json(penalties);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Penalty by ID
export const getMemberPenaltieById = async (req, res) => {
    try {
        const penalty = await MemberPenaltie.findByPk(req.params.id, {
            include: [
                {
                    model: MemberBorrowBook,
                    as: 'borrowRecord',
                    attributes: ['id', 'member_id', 'book_id'] // Tampilkan field yang relevan
                }
            ]
        });
        if (penalty) {
            res.status(200).json(penalty);
        } else {
            res.status(404).json({ message: "Penalty not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getMemberPenalties = async (req, res) => {
    try {
        const response = await MemberPenaltie.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message }); // Tangani kesalahan dengan benar
    }
};

export const getMemberPenaltiesById = async (req, res) => {
    try {
        const penalty = await MemberPenaltie.findByPk(req.params.id, {
            include: [
                {
                    model: MemberBorrowBook,
                    as: 'borrowRecord',
                    include: [
                        {
                            model: Member,
                            attributes: ['name'] // Ambil nama member
                        }
                    ],
                    attributes: ['id', 'member_id', 'book_id'] // Tampilkan field yang relevan
                }
            ]
        });
        if (penalty) {
            res.status(200).json(penalty);
        } else {
            res.status(404).json({ message: "Penalty not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createMemberPenaltie = async (req, res) => {
    try {
        const newPenalty = await MemberPenaltie.create(req.body);
        res.status(201).json({ msg: "MemberPenaltie Created", data: newPenalty }); // Mengembalikan data yang baru dibuat
    } catch (error) {
        res.status(500).json({ message: error.message }); // Tangani kesalahan dengan benar
    }
};

export const updateMemberPenaltie = async (req, res) => {
    try {
        const [updated] = await MemberPenaltie.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if (updated) {
            res.status(200).json({ msg: "MemberPenaltie Updated" });
        } else {
            res.status(404).json({ message: "Penalty not found" }); // Jika tidak ditemukan
        }
    } catch (error) {
        res.status(500).json({ message: error.message }); // Tangani kesalahan dengan benar
    }
};

export const deleteMemberPenaltie = async (req, res) => {
    try {
        const deleted = await MemberPenaltie.destroy({
            where: {
                id: req.params.id
            }
        });
        if (deleted) {
            res.status(200).json({ msg: "MemberPenaltie Deleted" });
        } else {
            res.status(404).json({ message: "Penalty not found" }); // Jika tidak ditemukan
        }
    } catch (error) {
        res.status(500).json({ message: error.message }); // Tangani kesalahan dengan benar
    }
};
