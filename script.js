function main() {
    // Declara os níveis
    const niveisRankeados = {
        Ferro: { min: 0, max: 9 },
        Bronze: { min: 10, max: 20 },
        Prata: { min: 21, max: 50 },
        Ouro: { min: 51, max: 80 },
        Diamante: { min: 81, max: 90 },
        Lendario: { min: 91, max: 100 },
        Imortal: { min: 101, max: Infinity }
    };

    // Declara as variáveis do jogador.
    const vitorias = 50;
    const derrotas = 10;

    // Função para calcular e retornar o saldo
    function calcularSaldo(vitorias, derrotas) {
        return vitorias - derrotas;
    }

    // Função para calcular o nível do jogador com base no saldo
    function calcularNivel(saldoRanqueadas) {
        for (let nivel in niveisRankeados) {
            let { min, max } = niveisRankeados[nivel];
            if (saldoRanqueadas >= min && saldoRanqueadas <= max) {
                return nivel;
            }
        }
    }

    // Calcula o saldo e o nível
    const saldoRanqueadas = calcularSaldo(vitorias, derrotas);
    const nivel = calcularNivel(saldoRanqueadas);

    // Exibe a saída
    console.log(`O Herói tem de saldo ${saldoRanqueadas} e está no nível ${nivel}`);
}

// Chama a função principal
main();
