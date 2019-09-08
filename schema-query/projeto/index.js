//import do Appolo e gql(gql é uma tagged de template é uma função que faz tratamento de string)
const {ApolloServer, gql} = require('apollo-server')
const {importSchema} = require('graphql-import')

const perfis = [
    {id: 1, nome:'Usuário'},
    {id: 2, nome:'Administrador'}
]

const usuarios = [{
    id:1,
    nome:'João Silva',
    email:'jsilva@gmail.com',
    idade:29,
    perfil_id: 1
},{
    id:2,
    nome:'Maria Silva',
    email:'Msilva@gmail.com',
    idade:28,
    perfil_id: 2

},{
    id:3,
    nome:'Marcos Silva',
    email:'Masilva@gmail.com',
    idade:22,
    perfil_id: 1
},]

//Definições de Tipos
//Resolve os dados que foram solicitados pelo typeDefs
const resolvers={
    Produto:{
        precoComDesconto(produto){
            if(produto.desconto){
                return produto.preco*(1-produto.desconto)
            }else{
                return produto.preco
            }
        }
    },

    Usuario:{
        salario(usuario){
            return usuario.salario_real
        },
        perfil(usuario){
            const sels = perfis
            .filter(p => p.id === usuario.perfil_id)
            return sels ? sels[0]:null
        }
    },

    Query:{
        ola(){
            return 'Bom Dia'
        },
        horaAtual(){
            return new Date
        },
        usuarioLogado(){
            return{
                id:1,
                nome:'Ana da Web',
                email:'anadaweb@email.com',
                idade:23,
                salario_real: 1234.56,
                vip:true
            }
        },
        produtoEmDestaque(){
            return{
                nome:'Cama',
                preco:200.00,
                desconto: 0.14
            }
        },
        numeroMegaSena(){
            const crescente = (a,b) => a-b
            return Array(6).fill(0)
            .map(n=> parseInt(Math.random()*60+1))
            .sort(crescente)
        },
        usuarios(){
            return usuarios
        },

        //O Tipo ID é um valor String 
        usuario(_, args){
            const sels = usuarios
            .filter(u => u.id === args.id)
            return sels ? sels[0]:null

        },
        perfis(){
            return perfis
        },
        perfil(_, { id }){
            const sels = perfis
            .filter(p => p.id === id)
            return sels ? sels[0]:null
        }
    }
}

//Sempre usar typeDef e resolvers como nome das consts, padrão de desenvolvimento
const server = new ApolloServer({
    typeDefs: importSchema('./schema/index.graphql'),
    resolvers
})

//Start do servidor, da para personalizar a porta dentro do parametro do listen()
server.listen().then(({ url })=>{
    console.log(`Executando em ${url}`)
})

/*usuario(id:3){
    ...usuarioCompleto
  }
  usuarios{
    ...usuarioCompleto
  }
}

fragment usuarioCompleto on Usuario {
  id nome email idade salario vip
  perfil {nome id}
  
}
*/