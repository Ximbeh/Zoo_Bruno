class Animal{

    constructor(nome, comprimento, nPatas, cor, ambiente, velocidade){
        this.nome = nome,
        this.comprimento = comprimento,
        this.nPatas = nPatas,
        this.cor = cor,
        this.ambiente = ambiente,
        this.velocidade = velocidade
    }
    AlterarNome(novoNome){
        this.nome = novoNome
    }
    AlterarComprimento(novoComprimento){
        this.comprimento = novoComprimento
    }
    AlterarPatas(novoPatas){
        this.nPatas = novoPatas
    }
    AlterarCor(novoCor){
        this.cor = novoCor
    }
    AlterarAmbiente(novoAmbiente){
        this.ambiente = novoAmbiente
    }
    AlterarVelocidade(novoVelocidade){
        this.velocidade = novoVelocidade
    }
    Dados(){
        console.log(`Nome: ${this.nome} \n Comprimento: ${this.comprimento}, \n Patas: ${this.nPatas}, \n Cor: ${this.cor}, \n Ambiente: ${this.ambiente}, \n Velocidade: ${this.velocidade}`)
    }

    
}

class Peixe extends Animal{
    constructor(nome, comprimento, nPatas, cor, ambiente, velocidade, caracteristica){
        super(nome, comprimento, nPatas, cor, ambiente, velocidade),
        this.caracteristica=caracteristica
    }
    AlterarCaracteristica(novoCaracteristica){
        this.caracteristica = novoCaracteristica
    }
    Caracteristica(){
        console.log(this.caracteristica);
    }
    Dados(){
        console.table(`Nome: ${this.nome} \n Comprimento: ${this.comprimento}, \n Patas: ${this.nPatas}, \n Cor: ${this.cor}, \n Ambiente: ${this.ambiente}, \n Velocidade: ${this.velocidade}, \n Caracteristica: ${this.caracteristica}`)
    }
    

}

class Mamifero extends Animal{
    constructor(nome, comprimento, nPatas, cor, ambiente, velocidade, alimento){
        super(nome, comprimento, nPatas, cor, ambiente, velocidade),
        this.alimento=alimento
    }

    AlterarAlimento(novoAlimento){
        this.alimento = novoAlimento
    }
    Alimento(){
        console.log(this.alimento);
    }

    Dados(){
        console.table(`Nome: ${this.nome} \n Comprimento: ${this.comprimento}, \n Patas: ${this.nPatas}, \n Cor: ${this.cor}, \n Ambiente: ${this.ambiente}, \n Velocidade: ${this.velocidade}, \n Comida Favorita: ${this.alimento}`)
    }

}

let peixeDourado = new Peixe("Peixe-dourado", 20, 0, "laranja", "mar", 0.2, "barbatanas")
console.table(peixeDourado);

let ursoPardo = new Mamifero("Urso-Pardo", 100, 4, "Castanho", "Terra", "0.5", "Mel")
console.table(ursoPardo);

let camelo = new Mamifero("Camelo", 150, 4, "Amarelo", "Terra", "2", "Cactus")
console.table(camelo);

let tubarao = new Peixe("Tubarão", 300, 0, "Cinzento", "mar", 1.5, "barbatanas")
console.table(tubarao);

let ursoCanada = new Mamifero("Urso-do-Canada", 180, 4, "Vermelho", "Terra", "0.5", "Mel")
console.table(camelo);