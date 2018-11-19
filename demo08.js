var startTime = new Date().getTime()  //得到程序运行的开始时间
var db = connect('company')          //链接数据库
var rs = db.randomInfo.find({ username: "e6tleflezwi" })  //根据用户名查找用户
rs.forEach(rs => { printjson(rs) })                     //循环输出
var runTime = new Date().getTime() - startTime;      //得到程序运行时间
print('[SUCCESS]This run time is: ' + runTime + 'ms')    //打印出运行时间