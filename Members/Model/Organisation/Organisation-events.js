


model.Organisation.password.onSet = function(value) {
	this.hashKey = directory.computeHA1(this.user, value);
};


model.Organisation.password.onGet = function() {
	return "*********"
};


model.Organisation.events.onRemove = function() {
	
	var members = ds.Member.query("orgName ==:1",this.name);
	
	for (var i=0; i<members.length; i++) {
		
		members[i].remove();
	
};

	var cards = ds.Card.query(" cardOrganisationName==:1",this.name);
	
	for (var i=0; i<cards.length; i++) {
		
		cards[i].remove();
	
};

	
};


model.Organisation.events.onInit = function() {
	this.currMebmers = 0;
	//this.image ="/Users/cristian/Documents/Wakanda/Members2/Members2/WebFolder/images/no_image.jpg";
	};


model.Organisation.events.load = function(event) {
	
	var currentDate = new Date();
	
	
	var timeDiff = Math.abs(this.licence.getTime() - currentDate.getTime());
	var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
	
	
	this.validUntil=diffDays;
	
};
