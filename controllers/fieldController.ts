import { Request, Response } from 'express';

import Field from '../models/Field';

export const getAllFields = async (req: Request, res: Response) => {
    const fields = await Field.find();
    try {
        return res.status(200).json(fields);
    } catch (error) {
        return res.status(500).json({message: "Couldn't get fields"});
    }
}

export const getFieldById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const singleField = await Field.findById(id);
    try {
        return res.status(200).json(singleField);
    } catch (error) {
        return res.status(500).json({message: "Couldn't get the field with that id"})
    }
}

export const createField = async (req: Request, res: Response) => {
    const fieldToCreate = await  Field.create(req.body);
    try {
        return res.status(201).json(fieldToCreate);
    } catch (error) {
        return res.status(500).json({message: "Couldn't create the field"});
    }
}

export const deleteField = async (req: Request, res: Response) => {
    const { id } = req.params;
    const fieldToDelete = await Field.findByIdAndDelete(id)
    try {
        return res.status(203).json({message: "field was deleted"})
    } catch (error) {
        return res.status(500).json({message: "Couldn't create the game"});
    }
}