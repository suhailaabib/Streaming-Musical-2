# Acervo Musical

Sistema que arquivará as músicas inseridas e pode ser organizado da sua preferência.

## Dados do sistema

Neste sistema será possível inserir e fazer várias mudanças, como por exemplo:

* Inserir suas músicas preferidas;
* Listar todas as suas músicas;
* Editar algum dos dados da música;
* Remover as músicas que não gostar ou que não queira mais. 

## Informações do código

### Principais tópicos:

 Terá um menu para que o usuário posso escolher o que deseja;

  **Apresenta as funções:**


`function inserir()`: Onde é posssível cadastrar as músicas, juntamente com o cantor, álbum e ano de lançamento. criamos rl.questian para fazer os questionamentos das características das músicas e um push para puxar todas juntas.

`function listar()`: Aponta todas as músicas interpostas no nosso sistema; utilizamos uma condicional de if e else para fazer a validação da música e um for para percorrer todo o vetor das músicas.

`function editar()`: É aqui que será capaz de fazer mudanças armazenadas, para que fiquem de forma correta; no código inserimos uma condicional de if e else, com o próprosito de encontarmos a música para edita-lá e os rl.question responsável por fazer cada pergunta de alteração.

`function remover()`: Já nesta função pode-se excluir uma música do sistema de forma fácil, só a selecionando; na programação desta parte criamos um if e else para encontrar as músicas e outra condicional de caso pra eleger a música á ser excluida.
