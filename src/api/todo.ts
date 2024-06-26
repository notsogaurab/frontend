import axios from 'axios';

const API_URL = 'http://localhost:3000';
// const API_URL = 'http://18.207.231.50:3000'; 
// const API_URL = 'http://192.168.122.8:30050';

const fetchTodoList = async () => {
  try {
    const response = await axios.get(`${API_URL}/`);
    return response.data.todos;
  } catch (error) {
    console.error('Error fetching todo list:', error);
    throw error;
  }
};

const fetchTodoById = async (id: any) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data.todos;
  } catch (error) {
    console.error('Error fetching todo list:', error);
    throw error;
  }
};

const postTodo = async (newTodo: any) => {
  try {
    const response = await axios.post(`${API_URL}/`, newTodo);
    return response.data; 
  } catch (error) {
    console.error('Error posting todo:', error);
    throw error;
  }
};

const deleteTodo = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data; 
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw error;
  }
};

const editTodo = async (id: string, updatedTodo: any) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedTodo);
    return response.data; 
  } catch (error) {
    console.error('Error editing todo:', error);
    throw error;
  }
};

export { fetchTodoList, fetchTodoById, postTodo, deleteTodo, editTodo };
