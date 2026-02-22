import { Task } from "../models/taskModal";

type taskDetails ={
   task_name:string,   
   description:string,
   priority:string,
   status:string  
}

export const allTasks = async () => {
  const task = await Task.findAll()
  return task;
}

export const createNewTask = async (taskData: taskDetails) => {
  const newTaskList = Task.create(taskData)
  return taskData
}


