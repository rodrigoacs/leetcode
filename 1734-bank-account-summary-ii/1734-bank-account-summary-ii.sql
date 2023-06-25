SELECT 
	users.name, 
    SUM(transactions.amount) as balance 
FROM 
	users 
JOIN transactions on users.account = transactions.account
GROUP BY
	users.name
HAVING 
	SUM(transactions.amount) > 10000
