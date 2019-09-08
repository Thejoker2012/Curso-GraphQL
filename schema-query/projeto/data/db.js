const perfis = [
    {id: 1, nome:'Usuário'},
    {id: 2, nome:'Administrador'}
]

const usuarios = [{
    id:1,
    nome:'João Silva',
    email:'jsilva@gmail.com',
    idade:29,
    perfil_id: 1,
    status:'ATIVO'
},{
    id:2,
    nome:'Maria Silva',
    email:'Msilva@gmail.com',
    idade:28,
    perfil_id: 2,
    status:'INATIVO'

},{
    id:3,
    nome:'Marcos Silva',
    email:'Masilva@gmail.com',
    idade:22,
    perfil_id: 1,
    status:'BLOQUEADO'
},]

module.exports = {usuarios, perfis}