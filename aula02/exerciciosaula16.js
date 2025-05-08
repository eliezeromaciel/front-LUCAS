// desafio 1
const imprimeParametro = (param) => {
  console.log(param)
}
const somaEChamaFuncao =  (val1, val2) => {
  let soma = val1 + val2
  imprimeParametro(soma)
}
somaEChamaFuncao(26, 33)


// desafio 2
const arrayInventario = ['zarabatana', 'arco', 'escudo', 'estrela ninja']

const adicionaItem = (inventario, item) => {
  if (inventario.length <= 5) {
    inventario.push(item)
    return inventario
  } else {
    console.log(`inventário com ${inventario.length} itens, portanto, está CHEIO`)
    return inventario
  }
}
const removeItem = (inventario, item) => {
    
  for ( let i = 0 ; i <= inventario.length ; i ++  ) {
    if (inventario[i] === item) {
      inventario.splice(i, 1)
      return inventario
    }
    console.log('nao encontrado')
  }
    
  // if (inventario.length <= 5) {
  //     inventario.push(item)
  //     return inventario
  // } else {
  //     console.log(`inventário com ${inventario.length} itens, portanto, está CHEIO`)
  //     return inventario
  // }
}
removeItem( arrayInventario, 'arco')
