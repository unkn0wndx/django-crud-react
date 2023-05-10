import { useForm } from 'react-hook-form';
import { createTask, deleteTask, updateTask, getTask, getAllCategories, getCategory } from '../api/tasks.api';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Input, Textarea, Button, Checkbox, Radio, Grid } from "@nextui-org/react";

export function TaskFormPage() {

  const [categories, setCategories] = useState([])
  const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm()

  const navigate = useNavigate();
  const params = useParams()

  const [selected, setSelected] = useState('5');

  const onSubmit = handleSubmit(async data => {
    data.category = Number(selected)
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
      const res = await getAllCategories();
      setCategories(res.data)
      if (params.id) {
        const { data: { title, description, category } } = await getTask(params.id)
        setValue('title', title)
        setValue('description', description)
        setValue('category', category)
        setSelected(category.toString())
      }
    }
    loadTask();
  }, [])

  return (
    <>
      <Grid.Container gap={2}>
        <Grid.Container gap={2} xs={4}>
          <Grid xs={12}>
            <Input bordered
              label="Title"
              placeholder={'Title'}
              color="default"
              {...register("title", { required: true })}
            />
            {errors.title && <span>field is required</span>}
          </Grid>

          <Grid xs={12}>
            <Textarea bordered
              color="default"
              label="Description"
              placeholder={'Description'}
              {...register("description", { required: true })}
            />
            {errors.description && <span>description is required</span>}
          </Grid>
        </Grid.Container>
        <Grid xs={6}>
          <Radio.Group label="Category" value={selected} onChange={setSelected}>
            {
              categories.map(({ id, title, color }) => (
                <Radio isSquared color={color} value={id.toString()}>{title}</Radio>
              ))
            }
          </Radio.Group>
        </Grid>

        <Grid sm={6} xs={12}>
          <Button onClick={onSubmit}>{params.id ? 'Update' : 'Save'}</Button>
        </Grid>
        {
          params.id && <Grid sm={6} xs={12}><Button color="error" onPress={async () => {
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
          }}>Delete</Button></Grid>
        }
      </Grid.Container>
    </>
  )
}
