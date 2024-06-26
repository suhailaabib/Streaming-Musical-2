const readline = require ('readline')

 const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      })
                                
    let musicas = []
                                
    exibirMenu()
                                
    function exibirMenu(){
    console.log(`
     1. Inserir músicas
    2. Listar músicas e álbuns
    3. Editar a música
    4. Remover música
    5. Sair                           
     `)
     rl.question(`Escolha uma opção:`, (opcao) => {
        switch(opcao){
            case '1':
               inserir()
            break;
            case '2':
             listar()
             break;
            case'3':
            editar()
            break;
            case'4':
          remover()
            break;   
            case'5':
            rl.close
            break;
                                              
             default: 
            console.log('Opção inválida, tente novamente.')
            exibirMenu()
          break;
                                
         }
        })
    }
                            
     function inserir(){
        rl.question('Digite o nome do cantor: ', (nome) => {
        rl.question('Digite a música: ', (musica) => {
         rl.question('Digite o álbum desta música: ', (álbum) => {
         rl.question('Digite o ano de lançamento:', (ano) => {
         musicas.push({nome: nome, musica: musica , álbum: álbum, ano: parseInt (ano)})
         console.log('Música inserida com sucesso ! ')

         exibirMenu()
        })
        })
       })
       })
      }
                                                            
                                                            
function listar() {
        if(musicas.length > 0){
         for (let i = 0; i < musicas.length; i++)
                 console.log(musicas[i])
    exibirMenu()
          }else{
        console.log(`Nenhuma música encontrada`)
    exibirMenu()
      }
       } 

function editar(){
if(musicas.length == 0) {
console.log('Nenhuma música encontrada.')
exibirMenu()
} else {
rl.question('Digite a opção que você deseja editar: ', (opcao) => {
if (opcao > 0 && opcao <= musicas.length) {
rl.question('Digite o novo cantor: ', (nome) => {
rl.question('Digite a nova música: ', (musica) => {
rl.question('Digite o nome do álbum: ', (album) => {
rl.question('Digite o ano de lançamento:', (ano) =>  {
musica[opcao - 1] = {
nome,
musica,
album, 
ano
}
console.log('Editado com sucesso.')
exibirMenu()
})
})
  })
    })
}
})
}
}

function remover(){
if(musicas.length == 0){
console.log('Nada registrado.')
exibirMenu()
}else{
console.log('Lista de músicas')
musicas.forEach((musica, index) => {
console.log(`${index + 1}. ${musica.musicas}`)
})
rl.question('Digite a opção que deseja remover:', (opcao) => {
if(opcao > 0 && opcao <= musicas.length) {
musicas.splice(opcao -1, 1)
console.log('Música removida com exito !')
exibirMenu()        
}else{
console.log('Opção inválida, tente novamente.')
exibirMenu()
}
})
}
}
console.log('Editado com sucesso.')

exibirMenu()