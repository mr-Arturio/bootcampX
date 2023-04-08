SELECT teachers.name AS teacher_name, students.name AS student_name, assignments.name AS assignment, (completed_at-started_at) AS duration
FROM assistance_requests
JOIN teachers ON teacher_id = teachers.id
JOIN students ON students.id = student_id
JOIN assignments ON assignments.id = assignment_id
ORDER BY duration;