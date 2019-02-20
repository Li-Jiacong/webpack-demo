import { cube } from './math.js'

if (process.env.NODE_ENV === 'production') {
  console.log('production')
}
if (process.env.NODE_ENV === 'development') {
  console.log('development')
}

function component() {
  let element = document.createElement('pre');
  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n')
  return element
}

document.body.appendChild(component())
