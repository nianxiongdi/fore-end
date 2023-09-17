

// any

let value: any

value.foo.bar() // ok

value.trim()

value()

new value() 

value[0][1]



function invokeCallback(cb: unknown) {
  try {
    if (typeof cb === 'function') {
      cb()
    }
  } catch (error) {
    console.log(error)
  }
}

invokeCallback(1)

