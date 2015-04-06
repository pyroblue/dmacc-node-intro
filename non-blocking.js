db.connect();
db.query('SELECT * FROM people', 
	function(err, rows, fields) {
		//this will log out when the data returns...
		console.log(rows[0].name);
	}
);

doSomeOtherStuff();
allDayLong();

