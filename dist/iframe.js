window.addEventListener('message', receiveMessage, false)

function receiveMessage(event) {

  var scripts = document.getElementById('injected')
  if( scripts ) {
    scripts.parentNode.removeChild(scripts)
  }

  var script = document.createElement('script')
  script.id = 'injected'
  script.innerHTML = event.data
  document.body.appendChild(script)
}