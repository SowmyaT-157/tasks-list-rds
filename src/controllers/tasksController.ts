import { Request, Response } from "express";
import { allTasks } from "../services/tasksServices";

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