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

//? LOGICA PARA UPLOAD DE IMAGENS

const PhotosUpload = {
  uploadLimit: 6,
  handleFileInput(event) {
    const { files: fileList } = event.target;
    const { uploadLimit } = PhotosUpload;

    if(fileList.length > uploadLimit) {
      alert(`Envie no máximo ${uploadLimit} fotos`)
      event.preventDefault()

      return
    }

    Array.from(fileList).forEach((file) => {
      const reader = new FileReader(); //! constructor do JS para ler arquivos

      reader.onload = () => {
        const image = new Image(); //? <img>
        image.src = String(reader.result);

        const div = document.createElement('div');
        div.classList.add('photo')

        div.onclick = () => alert('remover foto')

        div.appendChild(image)

        document.querySelector('#photos-preview').appendChild(div)
      }

      reader.readAsDataURL(file) //? Quando estiver pronto, executa onload
    });
  }
}

