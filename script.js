// Animação de entrada das barras de skill
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(el => {
        if (el.isIntersecting) {
          el.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.skill-item, .card, .contato-box').forEach(el => {
      observer.observe(el);
    });

    // Efeito de digitação no cargo
    const cargo = document.querySelector('.cargo');
    const text = 'Desenvolvedor Full Stack em formação';
    let i = 0;
    cargo.innerHTML = '<span class="tag-bracket">&lt;</span> <span class="typed"></span><span class="cursor">|</span> <span class="tag-bracket">/&gt;</span>';
    const typed = cargo.querySelector('.typed');
    function type() {
      if (i < text.length) {
        typed.textContent += text[i];
        i++;
        setTimeout(type, 60);
      }
    }
    setTimeout(type, 800);