//e - enter
//o - ober
//i - imes
//a - ai
//u - ufat

const criptografar = document.getElementById("butao__criptografar");
const descriptografar = document.getElementById('butao__descriptografar');
const copy = document.getElementById('butao__copiar');
const entradaTexto = document.getElementById('entradaTexto');
const mensagemFinal = document.getElementById('mensagemFinal');
const boneco = document.getElementById('boneco');
const rigth = document.getElementById('rigth')
const mensagemInfo = document.getElementById('mensagemInfo')

const remplace = (newvalue) => {
	mensagemFinal.innerHTML = newvalue;
	mensagemFinal.classList.add("ajustar");
	rigth.classList.add("ajuste")
	entradaTexto.value = "";
	entradaTexto.style.height = "auto"
	entradaTexto.placeholder = "Digite seu texto";
	boneco.classList.add("ocultar");
	mensagemInfo.classList.add("ocultar");
	copy.classList.remove("bn_ocultar");
}

const reset = () => {
	entradaTexto.value = "";
    entradaTexto.style.height = "auto";
	mensagemFinal.innerHTML = "";
	rigth.classList.remove("ajuste")
	mensagemFinal.classList.remove("ajustar");
	boneco.classList.remove("ocultar");
	mensagemFinal.placeholder = "Nenhuma mensagem foi encontrada";
	mensagemInfo.classList.remove("ocultar")
	copy.classList.add("bn_ocultar");
	entradaTexto.focus();
};

	let substituir = [
	["e", "enter"],
	["o", "ober"],
	["i", "imes"],
	["a", "ai"],
	["u", "ufat"]
];

criptografar.addEventListener('click', () => {

	const texto = entradaTexto.value.toLowerCase();

	if (texto != "") {
		function encript(newtext) {
			for (let i = 0; i < substituir.length; i++) {
				if (newtext.includes(substituir[i][0])) {
					newtext = newtext.replaceAll(substituir[i][0], substituir[i][1]);
				};
			};
			return newtext;
		};
		remplace(encript(texto));
	} else {
		alert("Digite aqui para criptografar");
		reset();
	};
});

descriptografar.addEventListener('click', () => {

	const texto = entradaTexto.value.toLowerCase();

	if (texto != "") {
		function desencript(newtext) {
			for (let i = 0; i < substituir.length; i++) {
				if (newtext.includes(substituir[i][1])) {
					newtext = newtext.replaceAll(substituir[i][1], substituir[i][0]);
				};
			};
			return newtext;
		};
		remplace(desencript(texto));
	} else {
		alert("Digite seu texto para descriptografar");
		reset();
	};
});

copy.addEventListener("click", () => {
	let texto = textFinal;
	texto.select();
	document.execCommand('copy');
	alert("Texto Copiado");
	reset();
});
entradaTexto.addEventListener("change", e => {
	entradaTexto.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	entradaTexto.style.height = `${scHeight}px`;
});
entradaTexto.addEventListener("keyup", e => {
	entradaTexto.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	entradaTexto.style.height = `${scHeight}px`;
});