import axios from 'axios';

const taskApi = axios.create({
  baseURL: 'http://localhost:8000/tasks/api/v1/'
});


//Categories
export const getAllCategories = () => taskApi.get('/categories/');
export const getCategory = (id) => taskApi.get(`/categories/${id}/`);

//Tasks
export const getAllTasks = () => taskApi.get('/tasks/');
export const getTask = (id) => taskApi.get(`/tasks/${id}/`);
export const createTask = (task) => taskApi.post('/tasks/', task);
export const deleteTask = (id) => taskApi.delete(`/tasks/${id}/`);
export const updateTask = (id, task) => taskApi.put(`/tasks/${id}/`, task);