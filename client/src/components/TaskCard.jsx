import { useNavigate } from 'react-router-dom';
import { Card, Grid, Text, Button, Row, Checkbox, Badge } from "@nextui-org/react";
import { updateTask } from '../api/tasks.api';
import { toast } from 'react-hot-toast';
import confetti from 'canvas-confetti';

export function TaskCard({ task, setHelper, categories }) {

  const date = new Date(task.updated).toString().substring(0, 24);

  const navigate = useNavigate();

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
    });
  }

  const onSubmit = async (status) => {
    setHelper(true);
    status && handleConfetti();
    const data = { done: status, title: task.title, description: task.description, category: task.category }
    await updateTask(task.id, data);
    toast.success(`Task status has changed`, {
      style: {
        background: '#101010',
        color: '#fff'
      }
    })
  }

  return (
    <Card css={{ p: "$6", maxHeight: "250px" }}>
      <Card.Header>
        <Checkbox isRounded color="success" labelColor="success" size="xl" aria-label='' onChange={onSubmit} defaultSelected={task.done} />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              {task.title}
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>{date}</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>
          {task.description}
        </Text>
      </Card.Body>
      <Card.Footer>
        <Grid.Container justify="space-around">
          <Grid xs={6}>
            {categories.map(({ id, title, color }) => (
              id == task.category && <Badge color={color} variant="bordered" size="lg">
                {title}
              </Badge>
            ))}
          </Grid>
          <Grid xs={6}>
            <Button color="default" shadow rounded size="sm" onClick={() => {
              navigate(`/tasks/${task.id}`)
            }}>Edit</Button>
          </Grid>
        </Grid.Container>
      </Card.Footer>
    </Card>
  )
}
