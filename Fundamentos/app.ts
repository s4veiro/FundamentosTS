const typeUser = {
    admin: 'Seja bem vindo admin',
    student: 'Voce é um estudante',
    viewer: 'Voce pode visualizar'
}

function validaUser(user: string){
    console.log(typeUser[user as keyof typeof typeUser]);
}

const usuario = 'admin';

validaUser(usuario);