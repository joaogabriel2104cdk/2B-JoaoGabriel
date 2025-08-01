var botao = document.createElement("button");
botao.innerHTML = "Explorar Destinos";
botao.onclick = function() {
    alert(Redirecionando);
};
botao.style.padding = "10px 20px";
botao.style.fontSize = "16px";
botao.style.backgroundColor = "4CAF50";
botao.style.color = "black";
botao.style.border = "1px solid black";
botao.style.borderRadius = "2px";
botao.style.cursor = "pointer";
document.body.appendChild(botao);