import { useNavigate } from 'react-router-dom';
import { Card, Grid, Text, Button, Row, Checkbox, Badge } from "@nextui-org/react";
import { updateTask } from '../api/tasks.api';
import { toast } from 'react-hot-toast';

export function TaskCard({ task }) {

  const date = new Date(task.updated).toString().substring(0, 24);

  const navigate = useNavigate();

  const onSubmit = async (status) => {
    const data = { done: status, title: task.title, description: task.description }
    await updateTask(task.id, data);
    toast.success(`Task status has changed`, {
      // position: 'bottom-right',
      style: {
        background: '#101010',
        color: '#fff'
      }
    })

  }

  return (
    <div style={{ background: '#101010' }}>
      <Grid.Container gap={2}>
        <Grid sm={12} md={5}>
          <Card css={{ mw: "330px" }}>
            <Card.Header>
              <Row justify="space-between">
                <Text b>{task.title}</Text>
                <Text>{date}</Text>
              </Row>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
              <Text>{task.description}</Text>
              <Grid xs={12} alignItems='center'>
                <Badge color="primary" variant="dot" />
                <Text css={{ ml: "$2" }}>Primary</Text>
              </Grid>

            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Row justify="space-around">
                <Checkbox isRounded color="success" labelColor="success" size="xl" aria-label='' onChange={onSubmit} defaultSelected={task.done} />

                <Button shadow rounded size="sm" onClick={() => {
                  navigate(`/tasks/${task.id}`)
                }}>EDIT</Button>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
    </div>
  )
}
