let bttns = document.querySelectorAll('.change-case')

bttns.forEach(function (button) {
  button.addEventListener('click', function (e) {
    let text = document.querySelector('.text')
    switch (e.target.id) {
      case 'upper-case':
        text.value = text.value.toUpperCase()
        break

      case 'lower-case':
        text.value = text.value.toLowerCase()
        break
      case 'proper-case':
        text.value = text.value.toLowerCase()
        let words = text.value.split(' ')
        words = words.map(function (w) {
          return w[0].toUpperCase() + w.slice(1)
        })

        text.value = words.join(' ')

        break
      case 'sentence-case':
        text.value = text.value.toLowerCase()
        let sentences = text.value.split('. ')
        sentences = sentences.map(function (s) {
          return s[0].toUpperCase() + s.slice(1)
        })

        text.value = sentences.join('. ')
        break
      case 'save-text-file':
        download("text.txt", text.value);
        break;
    }
  })
})

function download(filename, text) {
  let element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain; charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element)
}

