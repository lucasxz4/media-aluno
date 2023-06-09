let btn = document.querySelector('.btn')
btn.addEventListener('click', function () {
    let res = document.querySelector('.resultado')
    let nome = prompt("Qual é o nome do aluno?")
    let nota1 = Number(prompt(`Qual foi a primeira nota de ${nome}?`))
    let nota2 = Number(prompt(`Além de ${nota1}, qual foi a outra nota de ${nome}?`))
    let media = (nota1 + nota2) / 2
    let mediaFinal = 6
    let aprovado = 'APROVADO!'
    let reprovado = 'REPROVADO!'
    res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.</p> <br>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${nota1}</mark> e <mark>${nota2}</mark>.</p> <br>`
    res.innerHTML += `<p>A média final será <mark>${media}</mark>.</p> <br>`
    if (media >= mediaFinal) {
        res.innerHTML += `<p>Resultado: <strong style = 'color: green;'>${aprovado}</strong></p>`
    } else {
        res.innerHTML += `<p>Resultado: <strong style = 'color: red;'>${reprovado}</strong></p>`
    }
})