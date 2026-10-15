let users = ["Pedro", "Ana", "Joana", "Diego", "Davi Messias", "Cristiano"];

let searchUser = prompt("Digite o nome do usuário que deseja buscar:");
// Lembrando que, meu usuário adm não pode mandar em branco a busca, chamamos isso de tratativa de erros.

if (searchUser === null || searchUser.trim() === "") {
    console.log("Não pode enviar a busca em branco.");
} else {
 // Retorna o usuário que for encontrado
    let user = users.filter(user =>
        user.toLowerCase().includes(searchUser.trim().toLowerCase())
    );
    // Devemos tratar também caso a busca não retorna nenhum resultado
    if (user.length === 0) {
        // Usuário não encontrado
        console.log("Usuário não encontrado.");

        // buscar indicie do usuário
    } else {
        console.log("Usuário encontrado:", user);
        let index = users.indexOf(user[0]);

        // atualizar o valor
        let NovoNome = prompt("Digite o novo nome do usuário:");

        if (NovoNome === null || NovoNome.trim() === "") {
            console.log("O novo nome não pode ficar em branco.");
        } else {
        
            users[index] = NovoNome.trim();

            console.log("Nome alterado com sucesso!");
            console.log("Lista atualizada:", users);

        users.forEach(element => {
         //read
            console.log(element)
         });
        }
    }
}