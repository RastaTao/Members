
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var textField8 = {};	// @textField
	var buttonMemberView = {};	// @button
	var buttonCardView = {};	// @button
	var image10 = {};	// @image
	var imgCard = {};	// @image
	var buttonLogOut = {};	// @button
	var textField62 = {};	// @textField
	var textField61 = {};	// @textField
	var textField60 = {};	// @textField
	var button12 = {};	// @button
	var button10 = {};	// @button
	var button11 = {};	// @button
	var logoutButton = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	textField8.keyup = function textField8_keyup (event)// @startlock
	{// @endlock
//		var theName = $$("search").getValue();
//		var session = WAF.directory.currentUser();
//		var currentName= session.fullName;
//		
//		var firstQuery = $$("combobox1").getValue();
//		
//		sources.member.query(firstQuery+"== :1 AND orgName== :2", { params: ["*"+theName + "*",currentName]});
	};// @lock

	buttonMemberView.click = function buttonMemberView_click (event)// @startlock
	{// @endlock
		$$("buttonCardView").enable();
		$$("buttonMemberView").disable();
		$$("contSelecedMEM").show();
		$$("containerSelectedCard").hide();
		
	};// @lock

	buttonCardView.click = function buttonCardView_click (event)// @startlock
	{// @endlock
		$$("buttonCardView").disable();
		$$("contSelecedMEM").hide();
		$$("containerSelectedCard").show();
		$$("buttonMemberView").enable();
	};// @lock

	image10.click = function image10_click (event)// @startlock
	{// @endlock
		$$("contCard").hide();
	};// @lock

	imgCard.click = function imgCard_click (event)// @startlock
	{// @endlock
		
		$$("contCard").show();
		
		
		var layout = sources.organisation.color;
		
		$("#contCard").css('background-color', layout);
	};// @lock

	buttonLogOut.click = function buttonLogOut_click (event)// @startlock
	{// @endlock
		WAF.directory.logout();
		window.location = "/index"
	};// @lock

	textField62.keydown = function textField62_keydown (event)// @startlock
	{// @endlock
		$("#textField62").css("border-color","#999999");
	};// @lock

	textField61.keydown = function textField61_keydown (event)// @startlock
	{// @endlock
		$("#textField61").css("border-color","#999999");
	};// @lock

	textField60.keydown = function textField60_keydown (event)// @startlock
	{// @endlock
		$("#textField60").css("border-color","#999999");
	};// @lock


//  ¥¥¥ Button 2 is 

	button12.click = function button12_click (event)// @startlock
	{// @endlock
		$("#button12").css("border-width","1px");
		$("#button12").css("border-style","inset");
		$("#button12").css("border-color","#ff5656");
		
		$("#button10").css("border-width","0px");
		$("#button11").css("border-width","0px");
		
		$$("members").hide();
		$$("cards").hide();
		$$("eventsDiv").show();
	};// @lock


//  ¥¥¥  Button10, Member list (Medlemmer)  ¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥ Button10, Member list (Medlemmer)
//  ¥¥¥  Setting the look ¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥
	button10.click = function button10_click (event)// @startlock
	{// @endlock
		$("#button10").css("border-width","1px");
		$("#button10").css("border-style","inset");
		$("#button10").css("border-color","#ff5656");
		
//  ¥¥¥  Setting the look of other buttons ¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥
		$("#button11").css("border-width","0px");
		$("#button12").css("border-width","0px");
		
		$$("members").show();
		$$("cards").hide();
		$$("eventsDiv").hide();
		
	};// @lock
	//  

	button11.click = function button11_click (event)// @startlock
	{// @endlock
		$("#button11").css("border-width","1px");
		$("#button11").css("border-style","inset");
		$("#button11").css("border-color","#ff5656");
		
		$("#button10").css("border-width","0px");
		$("#button12").css("border-width","0px");
		
		$$("members").hide();
		$$("cards").show();
		$$("eventsDiv").hide();
	};// @lock

	logoutButton.click = function logoutButton_click (event)// @startlock
	{// @endlock
		WAF.directory.logout();
		window.location = "/index"
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		sources.organisation.query("ID<0");
		sources.card.query("ID<0");
		sources.member.query("ID<0");
		$$("buttonMemberView").disable();
//		$$("logoutButton").setValue("Login");
//		$$("members").hide();
//		$$("button10").disable();
//		$$("button11").disable();
//		$$("button12").disable();
		
		var session = WAF.directory.currentUser();
		var currentName= session.fullName;
		
		if(currentName){
		sources.organisation.query("name ==:1",currentName);
		sources.card.query("organName ==:1",currentName);
		sources.member.query("orgName ==:1",currentName);
		
//		$$("message").setValue(session.fullName);
//		
//		$$("logoutButton").setValue("Log out");
//		
//		$$("members").show();
//		
//		$$("button10").enable();
//		$$("button11").enable();
//		$$("button12").enable();
		
		}
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("textField8", "keyup", textField8.keyup, "WAF");
	WAF.addListener("buttonMemberView", "click", buttonMemberView.click, "WAF");
	WAF.addListener("buttonCardView", "click", buttonCardView.click, "WAF");
	WAF.addListener("image10", "click", image10.click, "WAF");
	WAF.addListener("imgCard", "click", imgCard.click, "WAF");
	WAF.addListener("buttonLogOut", "click", buttonLogOut.click, "WAF");
	WAF.addListener("textField62", "keydown", textField62.keydown, "WAF");
	WAF.addListener("textField61", "keydown", textField61.keydown, "WAF");
	WAF.addListener("textField60", "keydown", textField60.keydown, "WAF");
	WAF.addListener("button12", "click", button12.click, "WAF");
	WAF.addListener("button10", "click", button10.click, "WAF");
	WAF.addListener("button11", "click", button11.click, "WAF");
	WAF.addListener("logoutButton", "click", logoutButton.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
