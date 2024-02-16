import { Router } from 'express'
import { createTask, deleteTask, getTask, getTasks, getTaskCount, updateTask } from '../Controllers/tasks.js'

const router = Router()


/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endpoint
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *  sumary: Get all tasks
 *  tags:[Tasks]
 */
router.get('/tasks', getTasks)

/**
 * @swagger
 * /tasks/count:
 *  get:
 *  sumary: Get total tasks counter
 *  tags:[Tasks]
 */
router.get('/tasks/count', getTaskCount)

/**
 * @swagger
 * /tasks:
 *  get:
 *  sumary: Get a task by id
 *  tags:[Tasks]
 */
router.get('/tasks/:id', getTask)

/**
 * @swagger
 * /tasks:
 *  get:
 *  sumary: Create a new task 
 *  tags:[Tasks]
 */
router.post('/tasks', createTask)

/**
 * @swagger
 * /tasks:
 *  get:
 *  sumary: Delete a task by id
 *  tags:[Tasks]
 */
router.delete('/tasks/:id', deleteTask)

/**
 * @swagger
 * /tasks:
 *  get:
 *  sumary: Update a task by id
 *  tags:[Tasks]
 */
router.put('/tasks/:id', updateTask)

export default router