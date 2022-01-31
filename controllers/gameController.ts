import { Request, Response } from 'express'; 
import Game from '../models/Game';

export const getAllGames = async (req: Request, res: Response) => {
  const allGames = await Game.find();
  try {
    return res.status(200).json(allGames);
  } catch (error) {
    return res.status(500).json({message: "No products found"})
  }
}

export const getGameById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const singleGame = await Game.findById(id);
  try {
    return res.status(200).json(singleGame);
  } catch (error) {
    return res.status(500).json({message: "Couldn't finda a game with that id"})
  }
}

export const createGame = async (req: Request, res: Response) => {
  const gameToCreate = await Game.create(req.body);
  try {
    return res.status(201).json(gameToCreate);
  } catch (error) {
    return res.status(500).json({message: "Couldn't create the game"});
  }
}

export const updateGame = async (req: Request, res: Response) => {
  const { id } = req.params;
  const gameToUpdate = await Game.findByIdAndUpdate({id}, req.body, {new: true});
  try {
    return res.status(201).json(gameToUpdate);
  } catch (error) {
    return res.status(500).json({message: "Couldn't update that field"});
  }
}

export const deleteGame = async (req: Request, res: Response) => {
  const { id } = req.params;
  const gameToDelete = await Game.findByIdAndDelete(id);
  try {
    return res.status(203).json({message: "Game was deleted successfully"});
  } catch (error) {
    return res.status(500).json({message: "Couldn't create the game"});
  }
}