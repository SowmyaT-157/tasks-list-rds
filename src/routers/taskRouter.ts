import { Router } from "express";
import { createTask, deleteTask, handleTaskList } from "../controllers/tasksController";

export const taskRouter = Router()
taskRouter.get('/tasks',handleTaskList)
taskRouter.post('/task',createTask)
taskRouter.delete('/task/:id',deleteTask)