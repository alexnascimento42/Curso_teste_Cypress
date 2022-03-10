it('sem testes, ainda', () => {})

const getSomething = () => {
  return new Promise((resolve,   reject) => {
      setTimeout(() => {
      resolve(13);
     }, 1000)

  })   
  
}//metodo do sistema

const system = () => {
    console.log('init'); // imprimir o init
    const prom = getSomething();
    prom.then(some => {
       console.log(`Something is ${some}`)
    })
    console.log('end')// finalizar
}

system();//inicializar - chamar