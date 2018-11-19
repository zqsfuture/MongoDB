var db = connect('company');
// var workmate3 = {
//     name: 'MinJie',
//     age: 20,
//     sex: 0,
//     job: 'UI设计',
//     skill: {
//         skillOne: 'PhotoShop',
//         SkillTwo: 'UI',
//         SkillThree: 'Word+Excel+PPT'
//     },
//     regeditTime: new Date()
// }

// db.workmate.update({name:"MinJie"},workmate3);

//$set
// db.workmate.update({name:"MinJie"},{"$set":{"skill.skillThree":"mongodb"}})
// db.workmate.update({ name: "MinJie" }, { "$set": { "age": 20 } })
//$unset

//$inc  它是对value值的修改，但是修改的必须是数字，字符串是不起效果的。
// db.workmate.update({ "name": "MinJie" }, { $inc: { "age": -2 } })

//muilti
// db.workmate.update({}, { $set: { "interest": [] } }, { multi: true })

//upsert
// db.workmate.update({ name: "xiaowang" }, { $set: { age: 20 } }, { upsert: true })

//$push
// db.workmate.update({ name: "xiaowang" }, { $push: { interset: "draw" } })
// db.workmate.update({ name: "MinJie" }, { $push: { "skill.sillFour": "draw" } })

//$ne
// db.workmate.update({ name: "xiaowang", interest: { $ne: "Game" } }, { $push: { interest: "newGame" } })
// db.workmate.update({ name: 'xiaoWang', interest: { $ne: 'playGame' } }, { $push: { interest: 'xinGame' } })

//$addToSet
// db.workmate.update({ name: "xiaowang" }, { $addToSet: { interest: "readBook" } })

//$each
// var newInterests = ["Sing", "Dance", "Code"];
// db.workmate.update({ name: "xiaowang" }, { $addToSet: { interest: { $each: newInterests } } })

// $pop  1  从末端删除  -1从开始位置删除
// db.workmate.update({ name: "xiaowang" }, { $pop: { interest: 1 } })

//数组定位修改
// db.workmate.update({ name: "xiaowang" }, { $set: { "interest.2": "Code" } })

//findAndModify






print("[update]: The data was updated suceessfully")