function soBoanoticia(nota){
    if (nota >= 7) {
        console.log('Aprovado com ' + nota);
    }
}

soBoanoticia(8.1); // Aprovado com 8.1
soBoanoticia(6.7); // Acontece nada

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade... ' + valor);
    }
}

seForVerdadeEuFalo(); // Acontece nada
seForVerdadeEuFalo(null); // Acontece nada
seForVerdadeEuFalo(undefined); // Acontece nada
seForVerdadeEuFalo(''); // Acontece nada
seForVerdadeEuFalo(0); // Acontece nada
seForVerdadeEuFalo(-1); // É verdade... -1
seForVerdadeEuFalo(' '); // É verdade...
seForVerdadeEuFalo('?'); // É verdade... ?
seForVerdadeEuFalo([]); // É verdade...
seForVerdadeEuFalo([1, 2]); // É verdade... 1
seForVerdadeEuFalo({}); // É verdade... [object Object]
seForVerdadeEuFalo(true); // É verdade... true
