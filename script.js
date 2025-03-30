function descubra(){
  res.scrollIntoView({ behavior: 'smooth' })
}


function calcular(){
    var sexoH = document.querySelector('input#raH')
    var sexoM = document.querySelector('input#raM')

    var peso = document.querySelector('input#idpeso')
    var altura = document.querySelector('input#idaltura')

    var Npeso = Number(peso.value)
    var Naltura = Number(altura.value)

    var calculo = Npeso/Naltura**2

  
    var res = document.querySelector('div.res')
    var imc = document.querySelector('span.imc')
    var h4 = document.querySelector('h4.aha4')
    var img = document.querySelector('img#pessoa')
    var mensagem = document.querySelector('p.mensagem')



    if ((!sexoH.checked && !sexoM.checked) || peso.value === '' || altura.value === '') {
      window.alert('Faltam dados!');
      return; 
  }else{
   

    if(sexoH.checked){
  if(calculo <= 18.5){
    res.scrollIntoView({ behavior: 'smooth' })
    res.style.display = 'block'
    imc.innerHTML = calculo
}else if(calculo <= 24.9){
  res.scrollIntoView({ behavior: 'smooth' })
    res.style.display = 'block'
      imc.innerHTML = calculo
        h4.textContent = "Normal"
          img.src = "imagens/normalH.webp"
            mensagem.textContent = 'Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.'
}else if(calculo <= 29.9){
  res.scrollIntoView({ behavior: 'smooth' })
  res.style.display = 'block'
    imc.innerHTML = calculo
      h4.textContent = "Sobrepeso"
        img.src = "imagens/sobreH.webp"
          mensagem.textContent = 'Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.'
}else if(calculo <= 34.9){
  res.scrollIntoView({ behavior: 'smooth' })
  res.style.display = 'block'
    imc.innerHTML = calculo
      h4.textContent = "Obesidade grau I"
        img.src = "imagens/obeso1H.webp"
          mensagem.textContent = 'Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.'
}else if(calculo <= 39.9){
  res.scrollIntoView({ behavior: 'smooth' })
  res.style.display = 'block'
  imc.innerHTML = calculo
    h4.textContent = "Obesidade grau II"
      img.src = "imagens/obeso2H.webp"
        mensagem.textContent = 'Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.'
}else if(calculo >= 40){
  res.scrollIntoView({ behavior: 'smooth' })
  res.style.display = 'block'
  imc.innerHTML = calculo
    h4.textContent = "Obesidade grau III"
      img.src = "imagens/obeso3H.webp"
        mensagem.textContent = 'Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.'
}}

else if(sexoM.checked){
  if(calculo <= 18.5){
    res.scrollIntoView({ behavior: 'smooth' })
    res.style.display = 'block'
    imc.innerHTML = calculo
}else if(calculo <= 24.9){
  res.scrollIntoView({ behavior: 'smooth' })
    res.style.display = 'block'
      imc.innerHTML = calculo
        h4.textContent = "Normal"
          img.src = "imagens/normalM.webp"
            mensagem.textContent = 'Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.'
}else if(calculo <= 29.9){
  res.scrollIntoView({ behavior: 'smooth' })
  res.style.display = 'block'
    imc.innerHTML = calculo
      h4.textContent = "Sobrepeso"
        img.src = "imagens/sobreM.webp"
          mensagem.textContent = 'Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.'
}else if(calculo <= 34.9){
  res.scrollIntoView({ behavior: 'smooth' })
  res.style.display = 'block'
    imc.innerHTML = calculo
      h4.textContent = "Obesidade grau I"
        img.src = "imagens/obeso1M.webp"
          mensagem.textContent = 'Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.'
}else if(calculo <= 39.9){
  res.scrollIntoView({ behavior: 'smooth' })
  res.style.display = 'block'
  imc.innerHTML = calculo
    h4.textContent = "Obesidade grau II"
      img.src = "imagens/obeso2M.webp"
        mensagem.textContent = 'Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.'
}else if(calculo >= 40){
  res.scrollIntoView({ behavior: 'smooth' })
  res.style.display = 'block'
  imc.innerHTML = calculo
    h4.textContent = "Obesidade grau III"
      img.src = "imagens/obeso3M.webp"
        mensagem.textContent = 'Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.'
}
}}
}