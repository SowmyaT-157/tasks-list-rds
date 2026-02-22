import { Request, Response } from "express";
import { allTasks, createNewTask } from "../services/tasksServices";

export const handleTaskList = async(req:Request,res:Response) =>{
    try {
        const taskData = await allTasks()
        if (taskData) {
            return res.status(200).json({ message: "fetched the data tasks data", taskData });
        }
    } catch {
        return res.status(400).json({ message: "data is not fetching" });
    }

}

export const createTask = async(req:Request,res:Response) =>{
     try {
        const data = req.body
        const newTask = await createNewTask(data)
        if (newTask) {
            return res.status(201).json({ message: "successfully created", newTask })
        } else {
            return res.status(404).json({ message: "bad request" })
        }
    } catch (error) {
        return res.status(500).json({ message: "network issue", error })
    }
}

