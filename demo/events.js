const EventEmitter = require('events');

// const emitter = new EventEmitter()

// emitter.on('anything', data => {
//   console.log('ON: anything', data)
// })
// emitter.emit('anything', {a: 1})
// emitter.emit('anything', {b: 2})

// setTimeout(() => {
//   emitter.emit('anything', {c: 3})
// },1000)

class Dispatcher extends EventEmitter {
  subsribe(eventName, coalBack) {
    console.log('[Subscribe...]')
    this.on(eventName, coalBack)

  }

  dispatch(eventName, data) {
      console.log('[Dispathing...]')
      this.emit(eventName, data)
  }
}

const dis = new Dispatcher() 
dis.subsribe('aa', data => {
  console.log('ON: aa', data)
})

dis.dispatch('aa', {aa: 22})