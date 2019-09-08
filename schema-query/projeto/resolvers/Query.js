const {usuarios, perfis} = require('../data/db')

module.exports={
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