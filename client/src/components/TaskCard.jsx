import { useNavigate } from 'react-router-dom';
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";


export function TaskCard({ task }) {

  const navigate = useNavigate();

  return (
    <div style={{ background: '#101010' }}>
      <Grid.Container gap={2}>
        <Grid sm={12} md={5}>
          <Card css={{ mw: "330px" }}>
            <Card.Header>
              <Text b>{task.title}</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
              <Text>{task.description}</Text>
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Row justify="flex-end">
                <Button size="sm" light>
                  Eliminar
                </Button>
                <Button size="sm" onClick={() => {
                  navigate(`/tasks/${task.id}`)
                }}>Editar</Button>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
    </div>
  )
}
