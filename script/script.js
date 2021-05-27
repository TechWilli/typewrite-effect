const text = document.querySelector('.type-text')

const typewriterEffect = () => {
  console.log('função disparada')

  const textToAnimate1 = 'UAU! '
  const textToAnimate2 = 'Olha só como o texto vai fazendo o efeito de digitação na tela. '
  const textToAnimate3 = 'É muito legal e simples de fazer.'

  const animateText = (arrayLetters) => {
    [...arrayLetters].forEach((letter, index) => {
      setTimeout(() => text.innerHTML += letter, 75 * index)

    })
  }

  animateText(textToAnimate1)
  setTimeout(() => animateText(textToAnimate2), 1900)
  setTimeout(() => animateText(textToAnimate3), 7900)

}

typewriterEffect()

// versão simples da função sem pausa entre pontuações
/* const typewriterEffect = () => {
  const textToAnimate = 'UAU! Olha só como o texto vai fazendo o efeito de digitação na tela. É muito legal e simples de fazer.'
  const arrayLetters = [...textToAnimate]

    arrayLetters.forEach((letter, index) => {
      setTimeout(() => text.innerHTML += letter, 75 * index)

    })

} */