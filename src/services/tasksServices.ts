import { Task } from "../models/taskModal";

export const allTasks = async () => {
  const task = await Task.findAll()
  return task;
}