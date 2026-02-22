import { sendEmail } from "../aws_config/aws_connection";
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
  try{
  const newTaskList = await Task.create(taskData)
  if(newTaskList){
    const email = await sendEmail()
    return taskData
  }
  }catch{
    return false
  }
}


