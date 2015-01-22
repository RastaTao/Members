
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var button3 = {};	// @button
	var documentEvent = {};	// @document
	var image4 = {};	// @image
	var image2 = {};	// @image
	var containerRow = {};	// @container
// @endregion// @endlock

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		$$("securityContainer").hide();
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		var userName = $$("user_Phone").getValue();
		var userPassword = "0000";

	if(userName != null)
	{
		
//	var text = "";
//    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

//    for( var i=0; i < 4; i++ )
//        text += possible.charAt(Math.floor(Math.random() * possible.length));
//	$$("securityContainer").show();
//	alert(text);
	
	ds.User.register(userName,userPassword);
	
	}

			authenticated = WAF.directory.loginByPassword(userName, userPassword);
			if (authenticated) {
				//debugger;
					$.jStorage.set("AppName_Auth", [userName, userPassword])
					//$.jStorage.setTTL("AppName_Auth", millisecondsToDays*30); //30 days
				$$("containerWelcome").hide();
				WAF.sources.card.query("cardPhone ==:1",userName);
				alert('Welcome din login ' + userName);
				//AppName.Page.refresh();
			} else {
				$.jStorage.deleteKey("AppName_Auth");
				alert("Invalid Login");
			}
		
	
		
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		if (WAF.directory.currentUser() === null) 
		{
				storedAuth = $.jStorage.get("AppName_Auth");
				if (storedAuth != null) 
				{
					userName = storedAuth[0];
					userPassword = storedAuth[1];
					authenticated = WAF.directory.loginByPassword(userName, userPassword);
					sources.card.query("cardPhone ==:1",userName);
					
					$$("containerWelcome").hide();
					
				}
		} else {
			
				
				
				userName = WAF.directory.currentUser().userName;
				authenticated = true;
				
				sources.card.query("cardPhone ==:1",userName);
					
				$$("containerWelcome").hide();
				
				//WAF.sources.user.query("phone ==:1",userName);
				}
	};// @lock

	image4.click = function image4_click (event)// @startlock
	{// @endlock
		$$("containerList").show();
	};// @lock

	image2.click = function image2_click (event)// @startlock
	{// @endlock
		
		$$("containerCard").hide();
		$$("matrixORG").show();
	};// @lock

	containerRow.click = function containerRow_click (event)// @startlock
	{// @endlock
		var currentCard = sources.card.getCurrentElement();
		var name = currentCard.cardOrganisationName.getValue();
		
		//$$("textORGname").setValue(name);
		
		$$("cardFullName").setValue(currentCard.cardFirstName.getValue()+" "+currentCard.cardLastName.getValue());

	$("#containerCard").backstretch("images/"+name.toLowerCase()+".jpg");
	
	$$("matrixORG").hide();
	$$("containerCard").show();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("image4", "click", image4.click, "WAF");
	WAF.addListener("image2", "click", image2.click, "WAF");
	WAF.addListener("containerRow", "click", containerRow.click, "WAF");
// @endregion
};// @endlock
