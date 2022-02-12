import { Request, Response } from "express";
import User from "../models/User";

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.find();
  try {
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: "Couldn't get the users" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userToUpdate = await User.findByIdAndUpdate(id, req.body, {new: true})
  try {
    return res.status(202).json(userToUpdate);
  } catch (error) {
    return res.status(500).json({error: "Couldn't update the user"})
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  try {
    return res.status(203).json({message: "User deleted successfuly"});
  } catch (error) {
    return res.status(500).json({error: "Couldn't delete user"});
  }
}