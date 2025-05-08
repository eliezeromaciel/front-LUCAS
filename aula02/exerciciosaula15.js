function imprimeNome (nome) {
  console.log(`Olá, ${nome}`)
}

imprimeNome('joao')
imprimeNome('Marcos')
imprimeNome('Letícia')





let temPeleGelada = true
let transformaComLuaCheia = true



function determinaMonstro (temPeleGelada, transformaComLuaCheia,brilhaAoSol) {
  // if (temPeleGelada) {
  //     return 'vampiro'
  // } 
  // if (transformaComLuaCheia) {
  //     return 'lobisomem'
  // } 
  // if (brilhaAoSol) {
  //     return 'humano'
  // }
  return  temPeleGelada ? 'vampiro' : 
    transformaComLuaCheia ? 'lobisomem' :
      brilhaAoSol ? 'ser humano' :
        'monstro sem determinação'
}    

determinaMonstro ()
