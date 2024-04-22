let contador = 0;

function loopInterativo() {
    // Executa enquanto o contador for menor que 10
    while (contador < 10) {
        console.log("Contador:", contador);
        contador++;

        // Simula algum tipo de pausa ou espera
        setTimeout(loopInterativo, 1000);
        return; // Retorna para evitar o loop infinito
    }
    console.log("Fim do loop!");
}

// Chama a função pela primeira vez
loopInterativo();
