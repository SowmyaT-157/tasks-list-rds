import { Router } from "express";
import { handleTaskList } from "../controllers/tasksController";

export const taskRouter = Router()
taskRouter.get('/tasks',handleTaskList)