const sayHello = (name) => {
  return {
    isSuccess: true,
    message: 'query success!',
    data: `hello, ${name}!`
  }
}

module.exports = sayHello;