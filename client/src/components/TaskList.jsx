import { useEffect, useState } from "react"
import { getAllTasks } from '../api/tasks.api'
import { TaskCard } from "./TaskCard";
import { Grid, Text } from '@nextui-org/react';

export function TaskList() {

  const [tasks, setTasks] = useState([]);
  const [helper, setHelper] = useState(false);

  async function loadTasks() {
    const res = await getAllTasks();
    setHelper(false);
    setTasks(res.data);
  }

  // Se ejecuta cuando el componente se renderiza por primera vez
  useEffect(() => {
    loadTasks();
  }, []);

  // Se ejecuta cuando el estado de 'helper' cambia
  useEffect(() => {
    loadTasks();
  }, [helper]);


  return (
    <Grid.Container gap={2} justify="space-around">

      <Grid.Container xs={12} gap={2}>
        <Grid xs={12} justify="center" css={{ p: "$6" }}>
          <Text h3>Planned</Text>
        </Grid>
        {tasks.map((task) => (
          !task.done && <Grid key={task.id} sm={12} md={6}><TaskCard task={task} setHelper={setHelper} /></Grid>
        ))}
      </Grid.Container>

      <Grid.Container xs={12} gap={2}>
        <Grid xs={12} justify="center" css={{ p: "$6" }}>
          <Text h3>Done</Text>
        </Grid>
        {tasks.map((task) => (
          task.done && <Grid key={task.id} sm={12} md={6}><TaskCard task={task} setHelper={setHelper} /></Grid>
        ))}
      </Grid.Container>

    </Grid.Container>

  )
}