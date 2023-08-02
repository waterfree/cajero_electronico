const infoDiv = document.getElementById("user-info")

const btnLogout = document.getElementById("btn-logout")

const usermoney = document.getElementById("user-money")

const btnconsignar = document.getElementById("btn-consignar")

const btnretirar = document.getElementById("btn-retirar")

const checkconsignar = document.getElementById("check-consignar")

const checkretirar = document.getElementById("check-retirar")

const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))

console.log(loggedUser)

infoDiv.innerHTML=`<span class="text-white p-3">Hola, ${loggedUser.nombre} ¿Que deseas hacer?</span>`

usermoney.innerHTML=`<span class="p-3 text-center fs-1">  ${loggedUser.balance}</span>`

btnLogout.addEventListener("click", function() {
    localStorage.removeItem("loggedUser")
    window.location.href = "./index.html"
})



btnconsignar.addEventListener("click", function(event){
    event.preventDefault()

    let consignar1 = parseInt(checkconsignar.value)
    let balance1 = parseInt(loggedUser.balance)
    let totalc = consignar1 + balance1

    loggedUser.balance= totalc

    if (totalc >990){
        alert("NO PUEDE TENER EN SU CUENTA UN VALOR MAYOR A $990")
    }else{
        usermoney.innerHTML = `<span class="p-3 text-center fs-1">$ ${totalc}</span>`
    }
})

btnretirar.addEventListener("click", function(event){
    event.preventDefault()

    let retiro1 = parseInt(checkretirar.value)
    let balance1 = parseInt(loggedUser.balance)
    let totalc = balance1 - retiro1

    loggedUser.balance= totalc

    if (totalc<10){
        alert("NO PUEDE TENER EN SU CUENTA UN VALOR MENOR A $10")
    }else{
        usermoney.innerHTML = `<span class="p-3 text-center fs-1">$ ${totalc}</span>`
    }
})