//   ***************************************************************************************/
//   *    Title: Database management
//   *    Author: Warwick New
//   *    Date: 2023
//   *    Code version: n/a
//   *    Availability: 
//   *    Changes: Changed database table, insertion, and the partials loaded.
//   *
//   ***************************************************************************************/


const express = require('express')
const app = express()
var path = require('path');
const sqlite3 = require('sqlite3')


// setup json reading 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ------------ Data sets ------------ //

const jobData = require('./public/jsons/jobData.json');

const projectData = require('./public/jsons/projectData.json');


// ------------ Setup ------------ //

// handlebars
const hbs = require('hbs')
app.set('view engine', 'hbs')


// partials folder
hbs.registerPartials(path.join(__dirname, "/public/views/partials"));


// views folder
app.set('views', 'public/views')


// stylesheets
app.use(express.static(path.join(__dirname, 'public')));
app.use('/stylesheets', express.static('stylesheets'));


// ------------ Database ------------ //


// connect to the Database
const db = new sqlite3.Database('./contacts.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.log(err.message);
});


// create table if table doesn't exist
let sql_queryall = `SELECT * FROM messages`;
db.all(sql_queryall, [], (err, rows) => {
    if (err) {
        sql_create_table = `CREATE TABLE messages(id INTEGER PRIMARY KEY,name,email,subject,message)`;
        db.run(sql_create_table);
    };
})


// input from contact me form
app.post('/', (req, res) => {


    // check if email is already in database
    let sql_check_email = `SELECT * FROM messages WHERE email = ?`;
    db.get(sql_check_email, [req.body.email], (err, row) => {
        if (err) return res.status('500').send(err.message);
        if (row) return res.status('500').send('Email address already exists');


        // add the data to the db
        let sql_insert_user = `INSERT INTO messages(name, email, subject, message) VALUES (?,?,?,?)`
        db.run(
            sql_insert_user,
            [req.body.name, req.body.email, req.body.subject, req.body.message], // insert into db rows
            (err) => {
                if (err) return res.status('500').send(err.message)

                // render thank you page if there isn't an error
                db.all(sql_queryall, [], (err, rows) => {
                    if (err) return console.log(err.message);
                    console.log(rows)
                    res.render('partials/thanks', {
                        layout: 'layouts/layout',
                        title: 'Thank you!',
                        description: 'Thank you for sending a message! I will be sure to respond to this asap!'
                    })
                })
            }
        )
    })
})

// ------------ PAGES ------------ //


// index page
app.get('/', (req, res) => {
    res.render('partials/index', {
        layout: 'layouts/layout',
        title: 'Alex Purser | Portfolio',
        description: 'Computer Science student at Falmouth University. Explore my portfolio for exciting projects. Contact me today!'
    });
})


// projects page
app.get('/projects', (req, res) => {
    res.render('partials/projects', {
        layout: 'layouts/layout',
        projectData: projectData,
        title: 'Projects',
        description: 'Exciting and logic-heavy computing projects including hardware, software, and game development. Have a look now!'
    });
})

// project details page
app.get('/projects/:projectID', (req, res) => {
    const projectID = req.params.projectID; // take id input
    const selectedProject = projectData.projects[projectID]; // select correct project
    res.render('partials/projectDetails', {
        layout: 'layouts/layout',
        projectData: selectedProject,
        projectDataLength: selectedProject.popup_pics.length,
        title: selectedProject.title,
        description: selectedProject.description,
    });
})


// employment page
app.get('/employment', (req, res) => {
    res.render('partials/employment', {
        layout: 'layouts/layout',
        jobsData: jobData,
        title: 'Employment History',
        description: 'Intriguing insight into my industry experience. From IT Student Placement to Games Tester at large firms. Contact me today!'
    });
})


// contact page
app.get('/contact', (req, res) => {
    res.render('partials/contact', {
        layout: 'layouts/layout',
        title: 'Contact Me',
        description: 'Want to communicate further? Fill in the contact form to reach me with any enquiry you have! I would love to hear from you!'
    })
})


// cv download
app.get('/cvDownload', (req, res) => {
    const CV = path.join(__dirname, '/cv', 'AlexPurserCV.pdf');
    res.download(CV);
});


const port = 3000

app.listen(port, () => {
    console.log(`Portfolio listening on port ${port}`)
})