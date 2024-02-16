import {connect} from '../database'

//Obtener tareas
export const getTasks = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM tasks");
    res.json(rows);
};

//Obtener una tarea por id
export const getTask = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM tasks WHERE id = ?", [
        req.params.id
    ]);
    console.log(rows[0])
    res.json(rows[0])
}

//Contar tareas
export const getTaskCount = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT COUNT(*) FROM tasks");
    console.log(rows)
    res.json(rows[0]["COUNT(*)"])
}

//Crear una tarea
export const createTask = async (req, res) => {
    const connection = await connect();
    const [results] = await connection.query("INSERT INTO tasks(title, description) VALUES (?,?)", [
        req.body.title,
        req.body.description
    ])
    res.json({
        id: results.insertId,
        ...req.body,
    });
}

//Eliminar tarea
export const deleteTask = async (req, res) => {
    const connection = await connect()
    await connection.query("DELETE FROM tasks WHERE id = ?", [
        req.params.id,
    ]);
    res.sendStatus(204)
}

//Modificar tarea
export const updateTask = async (req, res) => {
    const connection = await connect()
    await connection.query("UPDATE tasks SET ? WHERE id = ?", [
        req.body,
        req.params.id
    ])
    res.sendStatus(204)
}