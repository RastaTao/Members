




model.Member.events.onRemove = function() {
	
	var card = ds.Card.find("cardPhone ==:1 AND cardOrganisationName ==:2",this.phone,this.orgName);
	card.remove();
	
	var com = currentSession();
   var company = com.user.fullName;
   
     var theComp = ds.Organisation.find("name = :1", company);
     
    
	
	theComp.currMebmers = theComp.currMebmers-1;
         theComp.save();
	
};




model.Member.events.onSave = function() {
	
		var vUser = ds.User.find("phone ==:1",this.phone);
	this.user = vUser;
	
	var com = currentSession();
   var company = com.user.fullName;
   
     var theComp = ds.Organisation.find("name = :1", company);
     
     this.organisation = theComp;
     
     orgName=theComp.name;
     
        
     var card = ds.Card.find("cardPhone ==:1 AND cardOrganisationName ==:2",this.phone,orgName);
     
     if(card == null)
     {     
     theCard = new ds.Card ({
             
             membership : this,
             organisation : theComp      
             });
             theCard.save();
         theComp.currMebmers = theComp.currMebmers+1;
         theComp.save();
         
     }
	
};
