let programacao_back_end = ["Heloa", "Maria Rafaela", "Maria Eduarda", "Diego", "João Victor", "Gabriel", "Luana", "Thauanne", "Aline", "Lucas"];
let seguranca_da_informacao = ["Leonardo", "Miguel", "João Paulo", "Rafael"];

seguranca_da_informacao.pop();
programacao_back_end.push("Rafael");
console.log(programacao_back_end);
console.log("#####################")
console.log(seguranca_da_informacao);

let funcionarios = programacao_back_end.concat(seguranca_da_informacao);

console.log(funcionarios);