
# To-Do App con React y Django Rest Framework
Este aplicacion se realizo con cero conocimiento de Django y es una continuacion del video de [Django REST Framework y React CRUD - Fazt Code](https://www.youtube.com/watch?v=38XWpyEK8IY&pp=ygUQcmVhY3QgYW5kIGRqYW5nbw%3D%3D).


## Base de datos

La app usa por defecto `sqlite3`, pero es posible hacer uso de `MySql`, el paquete necesario para la conexion con `MySql` ya esta instalado, solo se necesita remplazar las credenciales de la conexion.

**Importante:**
Cada tarea puede ser categorizada, estas categorias ya estan alamcenadas en su respectica tabla, pero si se realiza la migracion a `MySql` las categorias se perderan, por ello es necesario ingresarlas manualmente.

| title      | color      | 
| :----------| :----------| 
| `My Day`   | `secondary`| 
| `House  `  | `success`  | 
| `College`  | `warning`  | 
| `Important`| `error`    |

El titulo puede ser cambiado, pero el color **no**, ya que esta ligado a una libreria de react llamada `nextui`.

## Run Locally

Clone the project

```bash
  git clone https://github.com/unkn0wndx/django-crud-react/tree/main
```

Go to the project directory

```bash
  cd django-crud-react
```

Iniciar el servidor **backend**

```bash
  py manage.py runserver
```

Despues ir al directorio del **frontend**

```bash
  cd client
```

Instalar las dependencias

```bash
  npm install
```

Iniciar el servidor

```bash
  npm run dev
```


## Feedback

Si tiene algún comentario, comuníquese conmigo en correo **user987654321B@outlook.com**.