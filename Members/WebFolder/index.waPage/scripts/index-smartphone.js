//WAF.config.baseURL = "http://193.75.76.126:8081/";
//WAF.core.restConnect.defaultService = 'cors';
//WAF.core.restConnect.baseURL = "http://193.75.76.126:8081/"

WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var button5 = {};	// @button
	var button3 = {};	// @button
	var button1 = {};	// @button
	var passInput = {};	// @textField
	var userInput = {};	// @textField
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		$("#transparentDiv").show();
	};// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		var theUser = $$("textField1").getValue();
		var thePass = $$("textField2").getValue();
		var validUser = sources.user.query("phone ==:1",theUser);
		
				if (validUser) {
					
						$$("message").setValue("You already have an account");
						$("#transparentDiv").hide();

					  } else {
					  	
					  			ds.User.register(theUser,thePass);
								$("#transparentDiv").hide(); 
		                     }
		
		
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		$("#transparentDiv").hide();
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		var theUser = $$("userInput").getValue();
		var thePass = $$("passInput").getValue();
		if(WAF.directory.loginByPassword(theUser, thePass))
		{

		window.location = "/cards.waPage/index-smartphone.html"
		
		}
		else {
			alert("MA TANK UR");
			  }
	};// @lock

	passInput.keydown = function passInput_keydown (event)// @startlock
	{// @endlock
		if(($$("passInput").getValue()) == "Passord")
		{
			$$("passInput").setValue("");
		}
	};// @lock

	userInput.keydown = function userInput_keydown (event)// @startlock
	{// @endlock
		
		if(($$("userInput").getValue()) == "Brukernavn")
		{
			$$("userInput").setValue("");
		}
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button5", "click", button5.click, "WAF");
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("passInput", "keydown", passInput.keydown, "WAF");
	WAF.addListener("userInput", "keydown", userInput.keydown, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
