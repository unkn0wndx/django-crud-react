import { useForm } from 'react-hook-form';
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import { toast } from 'react-hot-toast';
import { Input, Textarea, Button, Dropdown } from "@nextui-org/react";

export function TaskFormPage() {

  const { register, handleSubmit, formState: { errors }, setValue } = useForm()
  const navigate = useNavigate();
  const params = useParams()

  const onSubmit = handleSubmit(async data => {
    if (params.id) {
      await updateTask(params.id, data);
      toast.success('Tarea actualizada', {
        position: 'bottom-right',
        style: {
          background: '#101010',
          color: '#fff'
        }
      })
    } else {
      await createTask(data);
      toast.success('Tarea creada', {
        position: 'bottom-right',
        style: {
          background: '#101010',
          color: '#fff'
        }
      })
      navigate('/tasks');
    }
  })

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const { data: { title, description } } = await getTask(params.id)
        setValue('title', title)
        setValue('description', description)
      }
    }

    loadTask();
  }, [])


  const [selected, setSelected] = useState(new Set(["text"]));
  const selectedValue = useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  return (
    <>
      <Input bordered
        label="Title"
        placeholder={'Title'}
        color="default"
        {...register("title", { required: true })}
      />
      {errors.title && <span>field is required</span>}

      <Textarea bordered
        color="default"
        label="Description"
        placeholder={'Description'}
        {...register("description", { required: true })}
      />
      {errors.description && <span>description is required</span>}

      <Dropdown>
        <Dropdown.Button flat color="default" css={{ tt: "capitalize" }}>
          {selectedValue}
        </Dropdown.Button>
        <Dropdown.Menu
          aria-label="Single selection actions"
          color="primary"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          <Dropdown.Item key="text" color="primary">Text</Dropdown.Item>
          <Dropdown.Item key="number" color="error">Number</Dropdown.Item>
          <Dropdown.Item key="date" color="success">Date</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Button onClick={onSubmit}>{params.id ? 'Update' : 'Save'}</Button>
      {
        params.id && <Button color="error" onPress={async () => {
          const accepted = window.confirm('are you sure?')
          if (accepted) {
            await deleteTask(params.id);
            toast.success('Tarea eliminada', {
              position: 'bottom-right',
              style: {
                background: '#101010',
                color: '#fff'
              }
            })
            navigate('/tasks');
          }
        }}>Delete</Button>
      }
    </>
  )
}
