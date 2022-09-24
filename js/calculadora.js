const calcular = document.getElementById('calcular');

function vf() {
    const C = document.getElementById('C').value;
    const J = document.getElementById('J').value;
    const N = document.getElementById('N').value;

    const resultado = document.getElementById('resultado');

    if (C !== '' && J !== '' && N !== '')
    {
        const VF = C * (1 + (J / 100))**N
        resultado.textContent = ` Seu seu valor futuro poupado (VF) será : R$${VF.toFixed(2)}`;
    }else {
        resultado.textContent = `Preencha todos os campos antes de calcular!`;
    }
}

calcular.addEventListener('click', vf);