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

  return <div>

    <Grid item xs={12} sx={{ height: 710, width: '100%', backgroundColor: '#FFFFFF', borderRadius: '10px', padding: '10px' }}>
      <DataGrid
        // localeText={localizedTextsMap}
        components={{ Toolbar: GridToolbar }}
        rows={tasks}
        columns={columns}
        pageSize={10}
        sx={{ fontSize: '1em' }}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        disableColumnMenu
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Grid>
  </div>;
}
