// Primeiro Exercicio

const sequence: number[] = Array.from(Array(10).keys());
const animals: string[] = ["passaro", "gato", "cachorro", "coelho"];
const stringsAndNumbers: (string | number)[] = [1, "one", 2, "two", 3, "three"];

// Segundo Exercicio

interface Book {
  title: string;
  author?: string;
}

const biografia: Book = {
  title: "biografia",
  author: "Luiz",
};

// function addToLibrary(item: Book) {
//   const response = `Adicionado o livro ${item.title} à sua biblioteca.`;
//   console.log(response);
// }

// console.log(addToLibrary(biografia));

// Terceiro Exercicio

// const addMoneyToAccount = (money: number, message?: string): void => {
//   console.log(!!message ? money + " dollars added to your account" : money);
// };
// addMoneyToAccount(10, "test");

// Terceiro Exercicio

function passValue<Type>(value: Type): Type {
  return value;
}

const passValueString = passValue<string>("valor");
const passValueNumber = passValue<number>(10);
// console.log(passValueString);
// console.log(passValueNumber);
