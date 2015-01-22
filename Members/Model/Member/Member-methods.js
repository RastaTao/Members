

model.Member.entityMethods.addUser = function(user) {
	this.user = user;
	user.organisationList = this;
	this.save();
	user.save();


};
