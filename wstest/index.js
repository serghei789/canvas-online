const btn = document.getElementById('btn')
const socket = new WebSocket('ws://localhost:3000/')

socket.onopen = () => {
  socket.send(JSON.stringify({
    method: 'connection',
    id: 555,
    username: 'serghei789'
  }));

}

btn.onclick = () => {
  socket.send(JSON.stringify({
    message: 'Hi',
    method: 'message',
    id: 555,
    username: 'serghei789'
  }))
}

socket.onmessage = (e) => {
  console.log('came a new message:', e.data)
}
