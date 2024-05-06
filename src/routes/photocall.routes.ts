import { Router } from "express";
import { getPhotocall } from "../controllers/photocall.controller.js";


export const photocallRouter = Router();


photocallRouter.get('/', getPhotocall);