db.info.insert({ contextInfo: "I am a programmer, I love life, love family. Every day after work, I write a diary." })
db.info.insert({ contextInfo: "I am a programmer, I love PlayGame, love drink. Every day after work, I playGame and drink." })

db.info.ensureIndex({contextInfo:'text'})

db.info.find({$text:{$search:"programmer family diary -drink"}})

db.info.find({$text:{$search:"\"love PlayGame\" drink"}})