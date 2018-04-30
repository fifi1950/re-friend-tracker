export class GuiModel {

    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden
    */

    private _guiModel = {
        "application": {
            "title": "Gioia's friend tracker prototype",
            "formList": [
                {
                    "id": "FriendForm",
                    "title": "Friend",
                    "url": "/friend/",
                    "formFieldList": [
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
						{
							"id": "nickname",
							"type": "text",
							"name": "Nickname",
							"width": 2,
							"required": true
						},
						{
							"id": "group",
							"type": "autocomplete",
							"name": "Group",
							"url": "/group",
							"form": "GroupForm",
							"width": 2
						},
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id": "birthdate",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "LocationForm",
                    "title": "Location",
                    "url": "/location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
						{
							"id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
						},
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
				{
                    "id": "ActivityForm",
                    "title": "Activities",
                    "url": "/activity",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "NameOfActivity",
                            "width": 2,
                            "required": true
                        },
						{
							"id": "location",
							"type": "autocomplete",
							 "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
						},
						{
							"id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
						},
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "AddActivityForm",
                    "title": "Activity",
                    "url": "/friend/:friendKey/activity",
                    "formFieldList": [
                        {
                            "id":   "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/activity",
                            "defaultKey": "activityKey",
                            "readonly": true,
                            "form": "ActivityForm",
                            "width": 2
                        },
						{
							"id": "name",
                            "type": "text",
                            "name": "Name",
                            "width": 2
						},
						{
                            "id": "actvityDate",
                            "type": "date",
                            "name": "Date of activity",
                            "width": 2
                        },
						{
							"id": "location",
							"type": "autocomplete",
							"name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
						},
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
						
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
				{
					"id": "GroupForm",
					"title": "Group",
					"url":"/group",
					"formFieldList": [
					{
						"id": "name",
						"type": "text",
						"name": "GroupName",
						"width": 2,
						"required": true,
					},
					{
						"id": "creationDate",
                            "type": "date",
                            "name": "Date of creation",
                            "width": 2
					},
					{
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
					},
					{
						"type": "deleteButton",
						"name": "Delete"
					},
					{	"type": "cancelButton",
						"name": "Cancel",
					},
					{
						"type": "okButton",
						"name": "Ok"
					}
					]
				},
						
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user",
                            "color": "magenta",
                            "page": "friendspage",
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-cubes",
                            "color": "emerald",
                            "page": "locationspage",
                        },
						{
							"type": "button",
							"name": "Groups",
							"icon": "fa-weixin",
							"color": "sun-flower",
							"page": "groupspage",
						},
						{
							"type": "button",
							"name": "Activities",
							"icon": "fa-braille",
							"color": "turquoise",
							"page": "activitiespage",
						},
                    ]
                },
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "url": "/friend",
                            "page": "friendsActivityPage",
                        },
                    ]
                },
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "blue",
                            "search": true,
                            "url": "/location",
                            "page": "locationActivityPage",
                        },
                    ]
                },
				{
					"id": "groupspage",
					"elementList": [
					{"type": "backbutton",
					},
						{
							"type": "newButton",
							"name": "NewGroup",
							"icon": "fa-weixin",
							"color": "sun-flower",
							"form": {
							"form": "GroupForm"
							}
						},
						{
							"type": "list",
							"icon": "fa-weixin",
							"color": "sun-flower",
							"search": true,
							"url": "/group",
							"form": {
								"form": "GroupForm"
							}
					
						},						
					]
				},
				{
					"id": "activitiespage",
					"elementList": [
					{"type": "backbutton",
					},
					{
						"type": "newButton",
						"name": "NewActivity",
						"icon": "fa-braille",
						"color": "turquoise",
						"form": {
							"form": "ActivityForm"
						}
					},
					{
						"type": "list",
						"icon": "fa-braille",
						"color": "turquoise",
						"search": true,
						"url": "/activity",
						"page": "activityFriendsPage",
						
					},
					
					]
				},
				{
                    "id": "friendsActivityPage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "EditFriend",
                            "icon": "fa-user",
                            "color": "magenta",
							"url": "friend/",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
						{
							"type": "newButton",
							"name": "AddActivity",
							"icon": "fa-bell",
							"color": "clouds",
							"form": {
								"form": "AddActivityForm",
							}
						},
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "magenta",
                            "search": true,
                            "url": "/friend/:friendKey/activity",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                    ]
                },
				{
                    "id": "activityFriendsPage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "EditActivity",
                            "icon": "fa-braille",
                            "color": "turquoise",
							"url": "friend/",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
						{
							"type": "newButton",
							"name": "AddActivity",
							"icon": "fa-braille",
							"color": "clouds",
							"form": {
								"form": "AddActivityForm",
							}
						},
                        {
                            "type": "list",
                            "icon": "fa-braille",
                            "color": "turquoise",
                            "search": true,
                            "url": "/activity/:friendKey/friend",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                    ]
                },
				{
                    "id": "locationActivityPage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "EditLocation",
                            "icon": "fa-home",
                            "color": "blue",
							"url": "location/",
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "blue",
                            "search": true,
                            "url": "/location/:locationKey/activity",
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                    ]
                },
				
			]
		}
	
	};
	

    get guiModel() {
        return this._guiModel;
    }
}
