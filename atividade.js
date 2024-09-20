function calcularSalario() {
    // Pega o valor do salário base e o cargo do formulário
    let salarioBase = parseFloat(document.getElementById("salario").value);
    let cargo = document.getElementById("cargo").value;
    let aumento;
    let percentual;

    // Usa o switch-case para calcular o aumento conforme o cargo
    switch (cargo) {
        case "diretor":
            percentual = 0.10; // 10% de aumento
            break;
        case "secretario":
            percentual = 0.20; // 20% de aumento
            break;
        case "operador":
            percentual = 0.30; // 30% de aumento
            break;
        default:
            percentual = 0;
    }

    // Calcula o aumento e o novo salário
    aumento = salarioBase * percentual;
    let salarioAtualizado = salarioBase + aumento;

    // Atualiza o conteúdo do HTML com o resultado
    document.getElementById("resultado").innerHTML = 
        `O novo salário é R$${salarioAtualizado.toFixed(2)} com um aumento de ${percentual * 100}%;`
}