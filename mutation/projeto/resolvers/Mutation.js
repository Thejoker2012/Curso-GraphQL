const {usuarios, proximoId} = require('../data/db')

module.exports={
    //{nome, email, idade} substituido por args( Passa todos os parametros em um unica linha args = {nome, email, idade})
    novoUsuario(_, args){

        //O parametro some vai verificar se existe algum email igual ao que está sendo inserido no banco
        const emailExistente = usuarios
        .some(u=>u.email === args.email)

        //Validação se existe email
        if (emailExistente) {
            throw new Error('E-mail cadastrado!')
            
        }

        const novo = {
            id: proximoId,
            ...args,
            perfil_id:1,
            status:'ATIVO'
        }
        usuarios.push(novo)
        return novo
    },
        
    excluirUsuario(_, { id }) {
        const i = usuarios
        .findIndex(u => u.id === id)

        if(i<0) return null
        const excluidos = usuarios.splice(i, 1)
        return excluidos ? excluidos[0] : null
    }
}