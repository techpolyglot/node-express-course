const express = require('express');
const app = express();

const mockUserData = [ 
	{name: 'Mark'},
	{name: 'Jill'}
]

app.get('/users', function(req,res){\
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'succcessfully got  users. Nice !',
		user: req.params.id
		})
})


app.listen(8000,function(){
console.log("server is running")
})