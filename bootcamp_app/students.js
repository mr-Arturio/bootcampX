const { Pool } = require('pg');
const cohortName = process.argv[2] || 'JUL02';
const limit = process.argv[3] || 5;

const pool = new Pool({
  user: 'labber',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const values = [`%${cohortName}%`, limit];

pool.query(`
SELECT students.id AS student_id, students.name AS name, cohorts.name AS cohort
FROM students
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
LIMIT $2;
`,
values
)

.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
})
.catch(err => console.error('query error', err.stack));