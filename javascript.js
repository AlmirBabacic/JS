/******************************************************************************
OPPGAVE 1

Din første oppgave er å koble denne JavaScript-filen til index.html-filen
ved å bruke en av metodene vi viste i første forelesning.

<-- Finn index.html-filen i filutforskeren og koble den til denne filen,
javascript.js
******************************************************************************/

// Løs denne oppgaven i index.html

/******************************************************************************
OPPGAVE 2

I forrige undervisning lærte vi hvordan man lager variabler som kan holde ulike
typer verdier. Lag noen variabler med følgende datatyper:
- String (tekst)
- Number (tall)
- Boolean (sann/usann)
- Array (liste)

Du kan velge hva innholdet i variablene skal være. Prøv å bruke både let og 
const når du definerer variablene.
******************************************************************************/
const schoolName = "Kodehode";
console.log(schoolName);

const name = "Almir Babacic";
console.log(name);

let age = 42;
console.log(age);

let isStudent = true;
console.log(isStudent);

let favoriteColours = ["red", "blue", "green"];
console.log(favoriteColours[0]);

let studendt = {
  name: "Almir",
  isStudent: true,
  hobbies: ["reading", "football", "gym"],
};

let cars = [
  { name: "BMW", price: 699000, inStock: false },
  { name: "Toyota", price: 590000, inStock: true },
];
console.log(cars);

/******************************************************************************
OPPGAVE 3

Prøv ut noen av operatorene vi så på i forrige forelesning:
- Matematiske operatorer: +, -, /, *
- Forkortede operatorer: ++, --, +=, -=

Skriv noen eksempler der du tester disse operatorene.
******************************************************************************/

let x = 10;
let y = 5;

console.log("x + y =", x + y);
console.log("x - y =", x - y);
console.log("x * y =", x * y);
console.log("x / y =", x / y);

x++;
console.log(x);
x--;
console.log(x);
y *= 10;
console.log(y);

/******************************************************************************
OPPGAVE 4

Skriv en IF/ELSE-betingelse som sjekker følgende:
1. At userName ikke er tom ("").
2. At userAge er 18 eller eldre.
3. At userIsBlocked er false.

(TIPS: Bruk && (logisk OG) for å sjekke alle tre betingelsene i én IF-setning.)

- Hvis alle disse betingelsene er oppfylt, skal du sette variabelen
userIsLoggedIn til true og goToPage til "/home". Deretter skriver du ut en 
velkomstmelding med console.log.

- Hvis noen av betingelsene IKKE er oppfylt, skal du skrive ut en feilmelding
med console.log.

Prøv å endre verdiene på variablene for å sikre at IF/ELSE-setningen din 
håndterer alle tilfeller korrekt.
******************************************************************************/

let userName = "Almir";
let userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

if (userName !== "" && userAge >= 18 && userIsBlocked === false) {
  userName = "Almir";
  userIsLoggedIn = true;
  goToPage = "home";
  console.log(`Welcome, ${userName}, navigate to ${goToPage}`);
} else {
  console.log(
    "Error: You have to be at least 18, you need a valid user name and must not be blocked"
  );
}

/******************************************************************************
OPPGAVE 5

Lag en variabel kalt userTitle og sett innholdet til å være:
- "Mr." hvis userMale er true, eller
- "Mrs." hvis userMale er false.

Bruk en ternary conditional for dette:

const variabel = betingelse ? "hvis sann" : "hvis usann";

Prøv å endre userMale til både true og false og bruk console.log for å sjekke
at betingelsen din fungerer som den skal.
******************************************************************************/

let userMale = false;
const userTitle = userMale ? "Mr.Almir" : "Mrs.Angela";
console.log(userTitle);

