import { error } from "node:console";
import { sendEmail } from "../aws_config/aws_connection";
import { Task } from "../models/taskModal";

type taskDetails ={
   id:number,
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


export const deleteTheTask = async (taskId: string) => {
  console.log("Coming into the services");
  try {
    const deletedCount = await Task.destroy({
      where: { id: taskId }
    });
    if (deletedCount === 0) {
      console.log("there is no tasks found")
    }
    return { message: "Task deleted successfully", id: taskId };
  } catch (error) {
    console.log("Coming to the catch", error);
    throw error;
  }
};

export const updateTask = async (taskId: string|string[], data: taskDetails) => {
  try {
    console.log("enter into service try block")
    const task = await Task.findOne({ where: { id: taskId } });
    if (!task) {
      return "Any task id not matched";
    } else {
      const updatedTask = await task.update(data);
      return updatedTask;
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update task");
  }
};
