// db.workmate.find(
//     { "skill.skillOne": "HTML+CSS" },
//     { name: true, "skill.skillOne": true, _id: false }
// )

// db.workmate.find(
//     { age: { $lte: 30, $gte: 25 } },
//     { name: true, "skill.skillOne": true, age: true, _id: false }
// )

// var startDate = new Date("10/19/2018");
// db.workmate.find(
//     { regeditTime: { $gt: startDate } },
//     { name: true, "skill.skillOne": true, age: true, _id: true }
// )

//$in 一个key多value
// db.workmate.find(
//     { age: { $in: [25, 33, 30] } },
//     { name: true, "skill.skillOne": true, age: true, _id: true }
// )

//nin
db.workmate.find(
    { age: { $nin: [25, 33, 30] } },
    { name: true, "skill.skillOne": true, age: true, _id: true }
)

//$or
db.workmate.find(
    {
        $or: [
            { age: { $gte: 30 } },
            { "skill.skillThree": "PHP" }
        ]
    },
    { name: true, "skill.skillThree": true, age: true, _id: true }
)

//$and
db.workmate.find(
    {
        $and: [
            { age: { $gte: 30 } },
            { "skill.skillThree": "PHP" }
        ]
    },
    { name: true, "skill.skillThree": true, age: true, _id: true }
)

//$not
db.workmate.find(
    { age: { $not: { $lte: 30, $gte: 20 } } },
    { name: true, "skill.skillThree": true, age: true, _id: true }
)

db.workmate.find(
    { interest: ["画画", "聚会", "看电影"] },
    { name: true, interest: true, age: true, _id: true }
)

db.workmate.find(
    { interest: "画画" },
    { name: true, interest: true, age: true, _id: true }
)

// $all  $$  $or 
db.workmate.find(
    { interest: { $all: ['看电影', "看书"] } },
    { name: true, interest: true, age: true, _id: true }
)

//$in
db.workmate.find(
    { interest: { $in: ['看电影', "看书"] } },
    { name: true, interest: true, age: true, _id: true }
)

// $size  个数
db.workmate.find(
    { interest: { $size: 3 } },
    { name: true, interest: true, age: true, _id: true }
)

// $slice
db.workmate.find(
    { interest: { $size: 3 } },
    { name: true, interest: { $slice: -1 }, age: true, _id: true }
)

//sort 1 -1

//分页  显示 2  年龄从小到大
db.workmate.find(
    {},
    { name: true, age: true, _id: true }
).limit(10).skip(0).sort({ age: 1 })

// $where
db.workmate.find(
    { $where: "this.age>30" },
    { name: true, age: true, _id: true }
)