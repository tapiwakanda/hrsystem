const asyncHandler = require('express-async-handler')

const employeeCourses = asyncHandler(async (req, res) => {
    res.json({message: 'Get goals'})
})

const addCourse = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message: "Course Added!"})
})

const editCourse = asyncHandler(async (req, res) => {
    res.json({message: `Update Course ${req.params.id}`})
})

module.exports = {
    employeeCourses,
    addCourse,
    editCourse
}