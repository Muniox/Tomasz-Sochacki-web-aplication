function hello(name) {
  return function (day) {
    console.log(`Cześć ${name} jak tam ${day} u Ciebie?`);
  };
}

const user = hello("Jan");
console.log(user("środa"));
