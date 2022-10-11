const express = require('express')
const router = express.Router()
const { employeeCourses, addCourse, editCourse} = require('./controllers/Controllers')

router.get('/', employeeCourses)

router.post('/', addCourse)

router.put('/:id', editCourse)


module.exports = router