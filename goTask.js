var userName = "jspang";
var timeStamp = Date.parse(new Date());
var jsonDatebase = { "loginName": userName, "loginTime": timeStamp };
var db = connect("log")  //use log
db.login.insert(jsonDatebase);
print("[demo]:log print success");