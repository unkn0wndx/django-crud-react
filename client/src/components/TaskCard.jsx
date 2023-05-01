import { useNavigate } from 'react-router-dom';
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import { useForm } from 'react-hook-form';
import { updateTask } from '../api/tasks.api';
import { toast } from 'react-hot-toast';

export function TaskCard({ task }) {

  const date = new Date(task.update_at).toString().substring(0, 24);

  const navigate = useNavigate();

  const onSubmit = async ({ target }) => {
    const data = { done: target.checked, title: task.title, description: task.description }
    await updateTask(task.id, data);
    toast.success(`Status has changed`, {
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
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Row justify="space-around">
                {/*  <Button size="sm" color="warning" ghost >
                  DONE
                </Button> */}
                <Switch shadow color="success" checked={task.done} onChange={onSubmit}>
                  Squared option
                </Switch>

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
