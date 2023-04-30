import { useEffect, useState } from "react"
import { getAllTasks } from '../api/tasks.api'
import { TaskCard } from "./TaskCard";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
// import Chip from '@mui/material/Chip';
// import { AdminPanelSettingsOutlined, CoPresentOutlined, SchoolOutlined } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { renderDetailsButton, columns } from "./DataGrid";


export function TaskList() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    async function loadTasks() {
      const res = await getAllTasks();
      setTasks(res.data);
    }
    loadTasks();
  }, []);

  return <Grid gap={2}>
    {tasks.map((task) => (
      <TaskCard key={task.id} task={task} />
      ))}
      </Grid>
  ;
}
