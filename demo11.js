db.createUser({
    user:"jspang",
    pwd:"123456",
    customData:{
        name:'技术胖',
        email:'web0432@126.com',
        age:18,
    },
    roles:[
        {
            role:"readWrite",
            db:"company"
        },
        'read'
    ]
})

db.system.users.remove({user:"jspang"})

// 重启MongoDB服务器，然后设置必须使用建权登录。
// mongod --auth

// 如果在配置用户之后，用户想登录，可以使用mongo的形式，不过需要配置用户名密码：
// mongom  -u jspang -p 123456 127.0.0.1:27017/admin

// 备份
// mongodump
//     --host 127.0.0.1
//     --port 27017
//     --out D:/databack/backup
//     --collection myCollections
//     --db test
//     --username username
//     --password password

// mongodump --host 127.0.0.1 --port 27017 D:/backup/

// 恢复
// mongorestore
//     --host 127.0.0.1
//     --port 27017
//     --username username
//     --password password
//     <path to the backup>

// mongorestore --host 127.0.0.1 --port 27017 D:/backup/