document.addEventListener('DOMContentLoaded', function() {
    //Elementos DOM
    const themeToggle = document.getElementById('theme-toggle');
    const senhaDisplay = document.getElementById('senha');
    const copyBtn = document.getElementById('copy-btn');
    const gerarBtn = document.getElementById('generate-btn');
    const lengthRange = document.getElementById('length');    
    const lengthValue = document.getElementById('length-value');
    const upperCaseCheckbox = document.getElementById('uppercase');
    const numCheckbox = document.getElementById('numbers');
    const simbolosCheckbox = document.getElementById('symbols');

    // Caracteres para gerar senha
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwyxz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWYXZ';
    const num = '0123456789';
    const simbolosChars = '!@#$%&*()_+-=[]{}|;:,.<>?';

    //Atualizar valor do range
    lengthRange.addEventListener('input', function() {
        lengthValue.textContent = this.value;
    })

    //Gerar senha
    gerarBtn.addEventListener('click', gerarSenha);

    function gerarSenha() {
        let characteres = lowerCaseChars;
        let senha = '';

        //Adiciona caracteres selecionados
        if(upperCaseCheckbox.checked) characteres += upperCaseChars;
        if(numCheckbox.checked) characteres += num;
        if(simbolosCheckbox.checked) characteres += simbolosChars;

        /*for(i = 0, i < lengthRange.value, i++) {
            const randomIndex = 
        };
        */
    }
})