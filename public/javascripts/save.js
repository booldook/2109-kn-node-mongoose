function userChg(id) {
	axios.get("/users/li/"+id)
	.then(function(result){
		console.log(result.data);
		var f = document.querySelector("#userForm");
		f.userid.value = result.data[0].userid;
		f.username.value = result.data[0].username;
		f._id.value = result.data[0]._id;
		f.action = "/users/chg";
	})
	.catch(function(error) {
		console.log(err);
	})
}