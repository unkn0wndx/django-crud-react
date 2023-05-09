import { Link } from 'react-router-dom'
import { Divider, Grid, Text } from '@nextui-org/react'

export function Navigation() {
  return (
    <>
      <Divider />
      <Grid.Container justify='space-between' css={{ p: 20 }}>
        <Link to="/tasks">
          <Grid.Container justify='center'>
            <Text
              h1
              size={60}
              css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
              }}
              weight="bold"
            >
              To-
            </Text>
            <Text
              h1
              size={60}
              css={{
                textGradient: "45deg, $purple600 -20%, $pink600 100%",
              }}
              weight="bold"
            >
              Do&nbsp;
            </Text>
            <Text
              h1
              size={60}
              css={{
                textGradient: "45deg, $yellow600 -20%, $red600 100%",
              }}
              weight="bold"
            >
              App&nbsp;
            </Text>
          </Grid.Container>
        </Link>

        <Grid>
          <Link to="/tasks-create"><Text h1 size={60} color="primary">Click to create a task</Text></Link>
        </Grid>
      </Grid.Container>
      <Divider />
    </>
  )
}
