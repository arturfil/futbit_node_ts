import jwt, { Secret} from 'jsonwebtoken';
import { Types } from 'mongoose';
import User from '../models/User';

const secret:Secret|string|Buffer|undefined = process.env.SECRET_KEY;

export const generateJwt = (id: Types.ObjectId) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      {id: id},
      // exclamation mark is saying we are sure we are going to get it
      secret!, 
      {expiresIn: "4h"},
      (err, token) => {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      }
    )
  })
}