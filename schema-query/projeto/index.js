//import do Appolo e gql(gql é uma tagged de template é uma função que faz tratamento de string)
const {ApolloServer, gql} = require('apollo-server')

const usuarios = [{
    id:1,
    nome:'João Silva',
    email:'jsilva@gmail.com',
    idade:29
},{
    id:2,
    nome:'Maria Silva',
    email:'Msilva@gmail.com',
    idade:28
},{
    id:3,
    nome:'Marcos Silva',
    email:'Masilva@gmail.com',
    idade:22
},]

//Definições de Tipos
const typeDefs = gql`

    #Criar tipos de dados personalizados para o GraphQL
    scalar Date
    #Tipos Scalares do GraphQL (ID,String,Int,Float,Boolean)
    type Usuario{
        id:Int!
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean

    }

    type Produto{
        nome: String!
        preco: Float!
        desconto: Float
        precoComDesconto: Float
    }

    #Ponto de entrada da API
    type Query{
        ola:String!
        horaAtual:Date!
        usuarioLogado: Usuario
        produtoEmDestaque: Produto
        numeroMegaSena:[Int!]!
        usuarios:[Usuario]
        usuario(id: Int):Usuario
    
    }

`
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