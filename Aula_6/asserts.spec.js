/// <reference types="cypress" />

it('equality', () =>{
    const a = 1;
    
    expect(a).equal(1); // expect verifica se A é igual
    expect(a, 'Deveria ser 1').equal(1);// mensagem em caso de falha
    expect(a).to.be.equal(1); // leitura: espero que a seja igual a 1
    expect(a).not.be.equal('b');
})
it('Truthy', () => {
    const a = true;
    const b = null;
    let c;
    
    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(a).to.be.not.null;
    expect(c).to.be.undefined;
 })
 it('Object Euqlity', () => {
    const obj = {
	    a:1,
		b:2
	}
	
	expect(obj).equal(obj)
	expect(obj).equals(obj)
	expect(obj).eq(obj)
	expect(obj).to.be.equal(obj)
	expect(obj).to.be.deep.equal({a:1, b:2})
	expect(obj).eql({a:1, b:2})
	expect(obj).include({a:1})
	expect(obj).to.have.property('b')
	expect(obj).to.have.property('b',2)
	expect(obj).to.be.empty
	expect({}).to.be.empty
	
})

it('Arrays', () => {
    const arr = [1,2,3]
	expect(arr).to.have.members([1,2,3])  //espere que o arr possua os seguintes membros
    expect(arr).to.include.members([1,2]) //espere que o arr inclua os seguintes membros
    expect(arr).to.not.be.empty //espere que arr não esteja vazio
	expect(arr).to.be.empty // espere que o arr esteja vazio
})
 
it('Types', () => {
   const num = 1
   const str = 'String'
   
   expect(num).to.be.a('number')
   expect(str).to.be.a('String')
   expect({}).to.be.an('object')
   expect({}).to.be.an('array')
}) 

it('String', () => {
   const str = 'String de teste'
   
expect(str).to.be.equal('String teste') // verifica se é igual
expect(str).to.be.length(15) // verifica o tamanho
expect(str).to.be.contains('de') // verifica se existe a string na frase
expect(str).to.mach(/'String/) // verifica o inicio
expect(str).to.mach(/teste$/) // verifica o final
expect(str).to.mach(/.{15}/)// verifica tamanho
expect(str).to.mach(/w+/) // verifica se contem palavras
expect(str).to.mach(/D+/) // verifica se esta vazio
})

it('numbers', () => {
     const number = 4
	 const floatNumber = 5.2123
	 
	 expect(number).to.equal(4)//igual
	 expect(number).to.above(3)//acima
	 expect(number).to.below(7)//abaixo
	 expect(floatNumber).to.equal(5.2123)//comparação
     expect(floatNumber).to.closeTo(5.2, 0.1)//proximo de
	 expect(floatNumber).to.above(5)
})