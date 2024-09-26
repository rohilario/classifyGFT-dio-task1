const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const niveis = {
    "Nível Ferro": { min: 0, max: 1000 },
    "Nível Bronze": { min: 1001, max: 2000 },
    "Nível Prata": { min: 2001, max: 5000 },
    "Nível Ouro": { min: 5001, max: 7000 },
    "Nível Platina": { min: 7001, max: 8000 },
    "Nível Ascendente": { min: 8001, max: 9000 },
    "Nível Imortal": { min: 9001, max: 10000 },
    "Nível Radiante": { min: 10001, max: Infinity }
};

function classifyHero(xp) {
    for (const [nivel, { min, max }] of Object.entries(niveis)) {
        if (xp >= min && xp <= max) {
            return nivel;
        }
    }
    return "XP fora do intervalo";
}

rl.question('Por favor, digitte o nome do heroi', (name) => {
    rl.question('Agora, informe o XP do mesmo: ', (xp) => {
        const nivel = classifyHero(xp);
        console.log(`O Herói de nome ${name} está no nível de ${nivel}`);
        classifyHero()
        rl.close();
    });
});