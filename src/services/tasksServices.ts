import { error } from "node:console";
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
  console.log("comming to service");
  try{
    console.log("enter try block");
    const newTaskList = await Task.create(taskData);
    console.log("task datasss",newTaskList);
    if(newTaskList){
      console.log("data comming",newTaskList);
      await sendEmail();
      return newTaskList;
    }
  }catch{
    throw error
  }
}


