let FirstName = " ali ";
console.log(FirstName, typeof FirstName);
let LastName = " mohammadi ";
console.log(LastName, typeof LastName);
let age = 20;
console.log(age, typeof age);

document.querySelector(".about-us").innerHTML = `<h1>
my firstName is ${FirstName}
</h1>
<p>and</p>
<h1>
my lastName is ${LastName}
</h1>
<p>and</p>
<h1>
my age is ${age}
</h1>
`;

let F_Name = prompt("hasan");
console.log(FirstName, typeof FirstName);
let L_Name = prompt("hasni");
console.log(LastName, typeof LastName);

document.getElementById("root").innerHTML = `
<h2>
my name is a ${F_Name}
</h2>
<h2>
my last is a ${L_Name}
</h2>
`;

let age_1 = prompt("enter your age_1");

if (age_1 >= 18) {
  document.getElementById("root").innerHTML = `

<p>
"خوش آمودید"
</p>
`;
} else {
  document.getElementById("root").innerHTML = `

    <p>
"نیا تو عزیزم"
</p>
`;
}
