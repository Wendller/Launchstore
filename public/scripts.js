//? LOGICA PARA VALORES DO FORMULARIO

const Mask = {
  apply(input, func) {
    setTimeout(function() {
      input.value = Mask[func](input.value) //? Mask.formatBRL
    }, 1)
  },
  formatBRL(value) {
    value = value.replace(/\D/g,""); //! /algo/ => ache algo e substitua por outro

    return value = new Intl.NumberFormat('pt-Br', {
      style: 'currency',
      currency: 'BRL'
    }).format(value/100);

  }
}

