import { Link } from 'react-router-dom'
import { Grid, Text } from '@nextui-org/react'

export function Navigation() {
  return (
    <>
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
            App
          </Text>
        </Grid.Container>

      </Link>
      <Link to="/tasks-create">create task</Link>
    </>
  )
}
