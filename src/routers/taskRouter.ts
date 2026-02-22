import { Router } from "express";
import { createTask, handleTaskList } from "../controllers/tasksController";

export const taskRouter = Router()
taskRouter.get('/tasks',handleTaskList)
taskRouter.post('/task',createTask)