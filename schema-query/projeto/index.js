//import do Appolo e gql(gql é uma tagged de template é uma função que faz tratamento de string)
const {ApolloServer, gql} = require('apollo-server')

//Definições de Tipos
const typeDefs = gql`

    #Criar tipos de dados personalizados para o GraphQL
    scalar Date
    #Tipos Scalares do GraphQL (ID,String,Int,Float,Boolean)
    type Usuario{
        id:ID!
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean

    }

    #Ponto de entrada da API
    type Query{
        ola:String!
        horaAtual:Date!
        usuarioLogado: Usuario
    
    }

`
//Resolve os dados que foram solicitados pelo typeDefs
const resolvers={
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
                salario: 1234.56,
                vip:true
            }
        }
        
        
    }


}

//Sempre usar typeDef e resolvers como nome das consts, padrão de desenvolvimento
const server = new ApolloServer({
    typeDefs,
    resolvers
})

//Start do servidor, da para personalizar a porta dentro do parametro do listen()
server.listen().then(({ url })=>{
    console.log(`Executando em ${url}`)
})