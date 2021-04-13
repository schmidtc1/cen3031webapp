import express from 'express';
import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js';
import { createStudent, getStudents } from '../controllers/student.js';
const router = express.Router();

// http://localhost:5000/posts
router.get('/getprojects', getPosts);
router.post('/getprojects', createPost);
router.delete('/getprojects/:id', deletePost);
router.patch('/:id', updatePost);
router.get('/getstudents', getStudents);
router.post('/getstudents', createStudent);



// router.get('/')

export default router;