document.addEventListener('DOMContentLoaded', () => {
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
    });

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
    };
    
    
    // Copiar senha
        const textoCopiadoClipboard = async (text) => {
    const originalText = copyBtn.textContent;
    try {
        await navigator.clipboard.writeText(text);
        copyBtn.textContent = '✅';

        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    } catch (e) {
        console.error('Erro ao copiar:', e);
        copyBtn.textContent = '❌';

        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    }
};

const copy = () => {
    copyBtn.onclick = () => {
        const text = passwordDisplay.value === "" 
            ? "Não copiado" 
            : passwordDisplay.value;
        textoCopiadoClipboard(text);
        console.log('Texto copiado:', text);
    };  
};
 
copy();

    // Alternar tema
    themeToggle.addEventListener('click', function(){
        document.body.classList.toggle('light-mode');
        this.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
    })

    // Gerar senha inicial
    gerarSenha();
});