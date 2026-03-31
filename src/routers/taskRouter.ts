import { Router } from "express";
import { createTask, deleteTask, handleTaskList, updateTheTask } from "../controllers/tasksController";

export const taskRouter = Router()
taskRouter.get('/tasks',handleTaskList)
taskRouter.post('/task',createTask)
taskRouter.delete('/task/:taskId',deleteTask)
taskRouter.put('/UpdateTask/:taskId',updateTheTask)

