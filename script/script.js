// Testa caso o usuário clique enter, se verdadeiro o botão é clicado automaticamente.
document.addEventListener('keypress', function(e){
    if(e.key === "Enter"){
        const btn = document.querySelector('#send')
        btn.click()
    }
});

// Parte principal da atividade com switch
function teste(){
    let nivelTest = document.getElementById('nivel-test').value.toLowerCase()
    let textDiv = document.getElementById('text-div')
    switch(nivelTest){
        case 'diretor':
            window.location.href = "diretor.html" // Abre na mesma aba o html desejado
            break
        case 'funcionario':
        case 'funcionário':
            window.location.href = 'funcionario.html' // aq também
            break
        case '':
            alert('Insira algum dado')
            break
        default:
            textDiv.innerHTML = 'Cargo não encontrado'
    }
}