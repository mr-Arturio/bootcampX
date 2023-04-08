SELECT students.name AS name, count(assistance_requests.*) AS total_assistances
FROM assistance_requests
JOIN students ON students.id = student_id
WHERE name = 'Elliot Dickinson'
GROUP BY name;