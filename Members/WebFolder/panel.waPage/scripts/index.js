
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var fileUpload3 = {};	// @fileUpload
	var btn_Org_Cancel = {};	// @button
	var organisationEvent = {};	// @dataSource
	var btn_Log_Out = {};	// @button
	var buttonLogOut = {};	// @button
	var tf_License_Date = {};	// @textField
	var btn_Org_Modify = {};	// @button
	var btn_Org_Save = {};	// @button
	var btn_Org_Add = {};	// @button
	var imageMagnifying_Glass = {};	// @image
	var search = {};	// @textField
	var camera = {};	// @image
	var roll_back = {};	// @image
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	fileUpload3.filesUploaded = function fileUpload3_filesUploaded (event)// @startlock
	{// @endlock
		sources.organisation.sync();
	};// @lock

	btn_Org_Cancel.click = function btn_Org_Cancel_click (event)// @startlock
	{// @endlock
		
		 	
		 	$("#tf_CustomerType").prop("readonly",true);
		$("#tf_Max_No_of_Members").prop("readonly",true);
		$("#tf_Username").prop("readonly",true);
		$("#tf_Password").prop("readonly",true);
		$("#tf_Org_Name").prop("readonly",true);
		$("#tf_Org_Address_1").prop("readonly",false);
		$("#tf_Org_Address_2").prop("readonly",false);
		$("#tf_Org_ZipCode").prop("readonly",true);
		$("#tf_Org_City").prop("readonly",true);
		$("#tf_Org_ContactPerson").prop("readonly",true);
		$("#tf_Org_Contact_E_mail").prop("readonly",true);
		$("#tf_Org_Contact_Phone").prop("readonly",true);
		
		$("#tf_Username").css("border-color","#d2d3d4");
		$("#tf_Password").css("border-color","#d2d3d4");
		$("#tf_Org_Name").css("border-color","#d2d3d4");
		$("#tf_Org_ContactPerson").css("border-color","#d2d3d4");
		$("#tf_Org_Contact_E_mail").css("border-color","#d2d3d4");
		$("#tf_License_Date").css("border-color","#d2d3d4");
		
		
		sources.organisation.all();
		
		$$("btn_Org_Save").hide();
		$$("btn_Org_Cancel").hide();
		
		$$("btn_Org_Add").enable();
		$$("btn_Org_Modify").enable();
		$$("btn_Org_Delete").enable();
		$$("dataGrid1").enable();
		
		
		
		
		
	
	};// @lock

	organisationEvent.onCurrentElementChange = function organisationEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		$$("rt_Organisation_Name").setValue(sources.organisation.name);
	};// @lock

	btn_Log_Out.click = function btn_Log_Out_click (event)// @startlock
	{// @endlock
		WAF.directory.logout();
		window.location = "/index"
	};// @lock

	buttonLogOut.click = function buttonLogOut_click (event)// @startlock
	{// @endlock
		WAF.directory.logout();
		window.location = "/index"
	};// @lock

	tf_License_Date.mouseover = function tf_License_Date_mouseover (event)// @startlock
	{// @endlock
		$$("dateFormat").show();
	};// @lock

	tf_License_Date.mouseout = function tf_License_Date_mouseout (event)// @startlock
	{// @endlock
		$$("dateFormat").hide();
	};// @lock

	tf_License_Date.mouseup = function tf_License_Date_mouseup (event)// @startlock
	{// @endlock
		$$("dateFormat").show();
	};// @lock

	btn_Org_Modify.click = function btn_Org_Modify_click (event)// @startlock
	{// @endlock
		$("#tf_CustomerType").prop("readonly",false);
		$("#tf_Max_No_of_Members").prop("readonly",false);
		$$("tf_Max_No_of_Members").setValue("0");
		$("#tf_Username").prop("readonly",false);
		$("#tf_Password").prop("readonly",false);
		$("#tf_Org_Name").prop("readonly",false);
		$("#tf_Org_Address_1").prop("readonly",false);
		$("#tf_Org_Address_2").prop("readonly",false);
		
		$("#tf_Org_ZipCode").prop("readonly",false);
		$("#tf_Org_City").prop("readonly",false);
		$("#tf_Org_ContactPerson").prop("readonly",false);
		$("#tf_Org_Contact_E_mail").prop("readonly",false);
		$("#tf_Org_Contact_Phone").prop("readonly",false);
		
		
		$$("btn_Org_Save").show();
		$$("btn_Org_Cancel").show();
		
		$$("btn_Org_Add").disable();
		$$("btn_Org_Modify").disable();
		$$("btn_Org_Delete").disable();
		
		$$("dataGrid1").disable();
		
		$$("tf_Org_Name").focus();
		
	};// @lock

	btn_Org_Save.click = function btn_Org_Save_click (event)// @startlock
	{// @endlock
		
		$("#tf_CustomerType").prop("readonly",true);
		$("#tf_Max_No_of_Members").prop("readonly",true);
		$("#tf_Username").prop("readonly",true);
		$("#tf_Password").prop("readonly",true);
		$("#tf_Org_Name").prop("readonly",true);
		$("#tf_Org_Address_1").prop("readonly",false);
		$("#tf_Org_Address_2").prop("readonly",false);
		$("#tf_Org_ZipCode").prop("readonly",true);
		$("#tf_Org_City").prop("readonly",true);
		$("#tf_Org_ContactPerson").prop("readonly",true);
		$("#tf_Org_Contact_E_mail").prop("readonly",true);
		$("#tf_Org_Contact_Phone").prop("readonly",true);
		
		$("#tf_Username").css("border-color","#d2d3d4");
		$("#tf_Password").css("border-color","#d2d3d4");
		$("#tf_Org_Name").css("border-color","#d2d3d4");
		$("#tf_Org_ContactPerson").css("border-color","#d2d3d4");
		$("#tf_Org_Contact_E_mail").css("border-color","#d2d3d4");
		$("#tf_License_Date").css("border-color","#d2d3d4");
		
		
		
		$$("btn_Org_Save").hide();
		$$("btn_Org_Cancel").hide();
		
		$$("btn_Org_Add").enable();
		$$("btn_Org_Modify").enable();
		$$("btn_Org_Delete").enable();
	
		$$("dataGrid1").enable();
		
		
	};// @lock

	btn_Org_Add.click = function btn_Org_Add_click (event)// @startlock
	{// @endlock
			$("#tf_CustomerType").prop("readonly",false);
		$("#tf_Max_No_of_Members").prop("readonly",false);
		$$("tf_Max_No_of_Members").setValue("0");
		$("#tf_Username").prop("readonly",false);
		$("#tf_Password").prop("readonly",false);
		$("#tf_Org_Name").prop("readonly",false);
		$("#tf_Org_Address_1").prop("readonly",false);
		$("#tf_Org_Address_2").prop("readonly",false);
		
		$("#tf_Org_ZipCode").prop("readonly",false);
		$("#tf_Org_City").prop("readonly",false);
		$("#tf_Org_ContactPerson").prop("readonly",false);
		$("#tf_Org_Contact_E_mail").prop("readonly",false);
		$("#tf_Org_Contact_Phone").prop("readonly",false);
		
		
		$$("btn_Org_Save").show();
		$$("btn_Org_Cancel").show();
		
		$$("btn_Org_Add").disable();
		$$("btn_Org_Modify").disable();
		$$("btn_Org_Delete").disable();
		
		$$("dataGrid1").disable();
		
		
		$$("tf_Org_Name").focus();
		
	};// @lock

	imageMagnifying_Glass.click = function imageMagnifying_Glass_click (event)// @startlock
	{// @endlock
		$("#search").toggle( "slide" );;
	};// @lock

	search.keyup = function search_keyup (event)// @startlock
	{// @endlock
		var theName = $$("search").getValue();
		
		sources.organisation.query('name = :1 order by name', { params: ["*" + theName + "*"]});
	};// @lock

	camera.click = function camera_click (event)// @startlock
	{// @endlock
		$("#container6").toggle( "slide" );;
	};// @lock

	roll_back.click = function roll_back_click (event)// @startlock
	{// @endlock
		$( "#container3" ).toggle( "slide" );
		$("#roll_back").toggle( "slide" );
		$("#camera").toggle( "slide" );
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		
		sources.organisation.query("ID<0");
//		$$("logoutB").setValue("Login");
		

		var session = WAF.directory.currentUser();
		var currentName= session.fullName;


		if(currentName){
		//$$("container5").show();

		sources.organisation.query("ID>0");
		
		//$$("welcomeText").setValue("Welcome "+session.fullName);
		//$$("logoutB").setValue("Log out");
			
		}	
	
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("fileUpload3", "filesUploaded", fileUpload3.filesUploaded, "WAF");
	WAF.addListener("btn_Org_Cancel", "click", btn_Org_Cancel.click, "WAF");
	WAF.addListener("organisation", "onCurrentElementChange", organisationEvent.onCurrentElementChange, "WAF");
	WAF.addListener("btn_Log_Out", "click", btn_Log_Out.click, "WAF");
	WAF.addListener("buttonLogOut", "click", buttonLogOut.click, "WAF");
	WAF.addListener("tf_License_Date", "mouseover", tf_License_Date.mouseover, "WAF");
	WAF.addListener("tf_License_Date", "mouseout", tf_License_Date.mouseout, "WAF");
	WAF.addListener("tf_License_Date", "mouseup", tf_License_Date.mouseup, "WAF");
	WAF.addListener("btn_Org_Modify", "click", btn_Org_Modify.click, "WAF");
	WAF.addListener("btn_Org_Save", "click", btn_Org_Save.click, "WAF");
	WAF.addListener("btn_Org_Add", "click", btn_Org_Add.click, "WAF");
	WAF.addListener("imageMagnifying_Glass", "click", imageMagnifying_Glass.click, "WAF");
	WAF.addListener("search", "keyup", search.keyup, "WAF");
	WAF.addListener("camera", "click", camera.click, "WAF");
	WAF.addListener("roll_back", "click", roll_back.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
