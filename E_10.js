var array = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
        {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
        {id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
        {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
    ]
    console.log(`As pessoas com os seguintes ids apresentam idades inferior a 30 anos`)

    for(let i in array){
        if(array[i].idade < 30 )
        console.log(`${array[i].id} com idade de ${array[i].idade} anos`)
}

    

    