document.addEventListener('DOMContentLoaded', function() {
    // Elementos DOM
    const themeToggle = document.getElementById('theme-toggle');
    const passwordDisplay = document.getElementById('password');
    const copyBtn = document.getElementById('copy-btn');
    const genarateBtn = document.getElementById('generate-btn');
    const lengthRange = document.getElementById('length');    
    const lengthValue = document.getElementById('length-value');
    const upperCaseCheckbox = document.getElementById('uppercase');
    const numCheckbox = document.getElementById('numbers');
    const symbolsCheckbox = document.getElementById('symbols');

    // Caracteres para gerar senha
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwyxz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWYXZ';
    const num = '0123456789';
    const symbolsChars = '!@#$%&*()_+-=[]{}|;:,.<>?';

    // Atualizar valor do range
    lengthRange.addEventListener('input', function() {
        lengthValue.textContent = this.value;
    })

    // Gerar senha
    genarateBtn.addEventListener('click', gerarSenha);

    function gerarSenha() {
        let characteres = lowerCaseChars;
        let senha = '';

        // Adiciona caracteres selecionados
        if(upperCaseCheckbox.checked) characteres += upperCaseChars;
        if(numCheckbox.checked) characteres += num;
        if(symbolsCheckbox.checked) characteres += symbolsChars;

        for(let i = 0; i < lengthRange.value; i++) {
            const randomIndex = Math.floor(Math.random() * characteres.length);
            senha += characteres[randomIndex];
        }

        // Exibir senha
        passwordDisplay.value = senha;
    }

    // Copiar senha
    copyBtn.addEventListener('click', function(){
        if(!passwordDisplay.value) return;
        
        navigator.clipboard.writeText(passwordDisplay.value)
        .then(() => {
            //Feedback Visual 
            const originalText = copyBtn.textContent;
            this.textContent = '✅';

            setTimeout (() => {
                copyBtn.textContent = originalText;
            }, 2000);
        });
    });

    // Alternar light mode
    themeToggle.addEventListener('click', function(){
        document.body.classList.toggle('light-mode');
        this.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
    })

    // Gerar senha inicial
    gerarSenha();
});