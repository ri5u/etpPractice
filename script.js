// const jsonStr = '{"tasks": ["Write", "Test", "Deploy"]}';
// const obj = JSON.parse(jsonStr);
// obj.tasks.push("Debug");
// const newjsonStr = JSON.stringify(obj);
// console.log(newjsonStr);

const jsonStr = '{"user" : {"name" : "rishu"}, "hobbies": ["games", "anime"]}';
const obj = JSON.parse(jsonStr);
console.log(obj.user.name);
const rand = Math.floor(Math.random() * (obj.hobbies.length));
console.log(obj.hobbies[rand]);