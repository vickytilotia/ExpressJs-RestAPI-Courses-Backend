const Joi = require('joi');
const express = require('express');

const app = express();

// using middleware 

const courses = [
    { id: 1, name: 'python' },
    { id: 2, name: 'java' },
    { id: 3, name: 'django' },
];

app.get('/', (req, res) => {
    res.send({
        'Get all courses': 'GET /api/courses',
        'Get course with id': 'GET /api/courses/:id',
        'ADD a course': 'POST /api/courses',
        'Edit a course': 'PUT /api/courses/:id',
        'Delete a course': 'DELETE /api/courses/:id'
    });
});

// Get all courses
app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// Get course with id
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The Course is not there');
    res.send(course);
});

// ADD a course
app.post('/api/courses', (req, res) => {
    // for Joi, validation 
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    const result = schema.validate(req.body);

    // Joi result validation 
    if (result.error) {
        // 400 bad request
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
})

// Edit a course
app.put('/api/courses/:id', (req, res) => {
    // Look for the course 
    const course = courses.find(c => c.id === parseInt(req.params.id));
    // if does not exist return 404
    if (!course) return res.status(404).send('The Course is not there');

    // validate the data
    // for Joi, validation 
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    const result = schema.validate(req.body);


    // if invalid data return 400-bad request 
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    // Update course 
    course.name = req.body.name;
    // return the updated course 
    res.send(course);

});

// Delete a course
app.delete('/api/courses/:id', (req, res) => {
    // Look for the course 
    const course = courses.find(c => c.id === parseInt(req.params.id));
    // if does not exist return 404
    if (!course) return res.status(404).send('The Course is not there');


    // Delete course 
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    // return the success message
    res.send(`${course.name} is now deleted`);

});


// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));

