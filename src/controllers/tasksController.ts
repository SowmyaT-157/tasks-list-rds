import { Request, Response } from "express";
import { allTasks, createNewTask, deleteTheTask } from "../services/tasksServices";
import { Task } from "../models/taskModal";

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
        console.log("giving re",data)
        const newTask = await createNewTask(data)
        console.log("tasks coming",newTask)
        if (newTask) {
            return res.status(201).json({ message: "successfully created", newTask })
        } 
    } catch (error) {
        return res.status(500).json({ message: "network issue", error })
    }
}



export const deleteTask = async (req:Request,res:Response) =>{
    try{
        const taskId = req.params.id
        const deletedTask = await deleteTheTask(taskId as string)
        if(deletedTask){
        return res.status(201).json({ message: "successfully deleted the task",deletedTask })
        }else{
        return res.status(400).json({message: "id is not matched to any task"})
        }
    }catch(error){
        console.error("deleted the task successfully:", error);
    }
}