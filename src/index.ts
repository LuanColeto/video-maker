import readline from "readline-sync";

interface Content {
  searchTerm: string;
  prefix: string;
}

const content = {} as Content;

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
  content.searchTerm = getSearchTerm();
  content.prefix = getPrefix();

  console.log(`Você quer buscar por: ${content.prefix} ${content.searchTerm}`);
};

search();
