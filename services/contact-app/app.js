var app = angular.module("contactApp", []);

app.controller("contactController", contactController);
app.controller("headerController", headerController);
app.controller("footerController", footerController);

app.constant("appValueSrvc", "Value Service");
app.constant("appObjectSrvc", {"firstName":"Hyalen", "lastName":"Moreira"});
app.value("appFunctionSrvc", function(value) {
    console.log(value);
});

function contactController() {
    this.contacts = [
        { 
            "gender": "male", 
            "name": { 
                "title": "mr", 
                "first": "mustafa", 
                "last": "bayındır" 
            }, 
            "location": { 
                "street": "1078 abanoz sk", 
                "city": "şırnak", 
                "state": "manisa", 
                "postcode": 98325, 
                "coordinates": { 
                    "latitude": "70.0941", 
                    "longitude": "-15.3661" 
                }, 
                "timezone": { 
                    "offset": "+4:00", 
                    "description": "Abu Dhabi, Muscat, Baku, Tbilisi" 
                } 
            }, 
            "email": "mustafa.bayındır@example.com", 
            "login": { 
                "uuid": "a3916e8f-606b-456b-8ced-9030c283f89f", 
                "username": "tinysnake617", 
                "password": "rsalinas", 
                "salt": "AbASvzTs", 
                "md5": "b11786b1bf23c8f7e2174a984e4c5b54", 
                "sha1": "c6eb859b6160ac789f00390c4be255e0fa6143bb", 
                "sha256": "1376d2feb0699a7617ee882698bbaaba486e8d72c9dbfee859b64341214984ec" 
            }, 
            "dob": { 
                "date": "1946-04-18T03:19:22Z", 
                "age": 72 
            }, 
            "registered": { 
                "date": "2006-03-28T20:54:25Z", 
                "age": 12 
            }, 
            "phone": "(715)-295-6988", 
            "cell": "(080)-197-4259", 
            "id": { 
                "name": "", 
                "value": null 
            }, 
            
            "picture": { 
                "large": "https://randomuser.me/api/portraits/men/5.jpg", 
                "medium": "https://randomuser.me/api/portraits/med/men/5.jpg", 
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/5.jpg" 
            }, 
            "nat": "TR" 
        },
        {
            "gender":"female",
            "name": {
                "title":"madame",
                "first":"ursina",
                "last":"lacroix"
            },
            "location": {
                "street":"9472 rue de l'abbé-soulange-bodin",
                "city":"fahrni",
                "state":"schwyz",
                "postcode":9192,
                "coordinates": {
                    "latitude":"-52.0050"
                    ,"longitude":"7.7558"
                },
                "timezone": {
                    "offset":"-12:00",
                    "description":"Eniwetok, Kwajalein"
                }
            },
            "email":"ursina.lacroix@example.com",
            "login": {
                "uuid":"f760f94a-1413-4d11-b680-af475fe6a71c",
                "username":"angrymouse979",
                "password":"legacy",
                "salt":"qfn2hgQx",
                "md5":"4b82b4176f9def6a9743578d0ec055f6",
                "sha1":"fe942265b734fa25d9cd1e80b2ea977da10d8001",
                "sha256":"294e5fd2d6ad9c7ccbb41bada441eaa3e6c1e2805bc9d7c685495c10c765c801"
            },
            "dob": {
                "date":"1960-04-14T08:57:27Z",
                "age":58
            },
            "registered": {
                "date":"2009-08-23T21:02:27Z",
                "age":8
            },
            "phone":"(464)-071-0074",
            "cell":"(917)-223-9815",
            "id": {
                "name":"AVS",
                "value":"756.1657.1586.98"
            }, "picture": {
                "large":"https://randomuser.me/api/portraits/women/34.jpg",
                "medium":"https://randomuser.me/api/portraits/med/women/34.jpg",
                "thumbnail":"https://randomuser.me/api/portraits/thumb/women/34.jpg"
            },
            "nat":"CH"
        }
    ];

    this.selectedContact = this.contacts[0];

    this.selectContact = function(index) {
        this.selectedContact = this.contacts[index];
    }
}

function headerController(appValueSrvc, appFunctionSrvc, appObjectSrvc) {
    this.appValueSrvc = appValueSrvc;
    appFunctionSrvc("I'm on header ... " + appObjectSrvc.firstName);
}

function footerController(appValueSrvc, appFunctionSrvc, appObjectSrvc) {
    this.appValueSrvc = appValueSrvc;
    appFunctionSrvc("I'm on footer ... " + appObjectSrvc.lastName);
}