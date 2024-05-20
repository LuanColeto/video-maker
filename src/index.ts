import readline from "readline-sync";

const getSearchTerm = () => {
  const searchTerm = readline.question("Digite um termo de busca: ");

  return searchTerm;
};

const getPrefix = () => {
  const prefixes = ["Quem é", "O que é", "A história de"];
  const selectedPrefixIndex = readline.keyInSelect(
    prefixes,
    "Escolha uma opção: "
  );

  return prefixes[selectedPrefixIndex];
};

const search = () => {
  const searchTerm = getSearchTerm();
  const prefix = getPrefix();

  console.log(`Você quer buscar por: ${prefix} ${searchTerm}`);
};

search();
