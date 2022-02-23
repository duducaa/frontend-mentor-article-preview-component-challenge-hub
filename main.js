const compartilhar = document.querySelector('.compartilhar'), 
    redesSociais = document.querySelector('.redes-sociais');

compartilhar.addEventListener('click', () => {
    redesSociais.classList.toggle('redes-sociais-active');
    compartilhar.classList.toggle('compartilhar-active');
})