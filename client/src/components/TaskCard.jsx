import { useNavigate } from 'react-router-dom';

export function TaskCard({ task }) {

  const navigate = useNavigate();

  return (
    <div style={{ background: '#101010' }}


      onClick={() => {
        navigate(`/tasks/${task.id}`)
      }}

    >
      <h1>{task.id}# {task.title}</h1>
      <p>{task.description}</p>
      <hr />
    </div>
  )
}
