
function carregarDropdown() {
    const dropdown = document.getElementById("dropdown")
    characteres.forEach(characteres => {
        const option = document.createElement("option")
        option.value = characteres.id
        option.innerHTML = characteres.name
        dropdown.appendChild(option)
    })
}

function buscarPersonagem() {
    const dropdown = document.getElementById("dropdown")
    const personagemSelecionado = dropdown.value
    const resultadoDiv = document.getElementById("resultado")
    const nome = document.getElementById("nome")
    const nascimento = document.getElementById("nascimento")
    const morte = document.getElementById("morte")
    const estadoSanguineo = document.getElementById("estadoSanguineo")
    const casa = document.getElementById("casa")
    const imagem = document.getElementById("imagem")
    const personagem = characteres.find(characteres => characteres.id === personagemSelecionado)

    
    nome.innerHTML = personagem.name
    nascimento.innerHTML = personagem.birthDate || "Não informado"
    morte.innerHTML = personagem.deathDate || "Não informado"
    estadoSanguineo.innerHTML = personagem.bloodStatus || "Não informado"
    casa.innerHTML = personagem.house || "Não informado"
    imagem.src = personagem.image
    imagem.alt = `Imagem de ${personagem.name}`
    resultadoDiv.style.display = "block"
}
document.addEventListener("DOMContentLoaded", carregarDropdown)