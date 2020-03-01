//Imprima o objeto se existir alguem com menos de 25 anos 

/* Um objeto é uma coleção de propriedades, e uma propriedade é uma associação 
    entre um nome (ou chave)*/


var array = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
        {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
        {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
        {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
    ]

    for(let i in array){
        if(array[i].idade < 25 )
        console.log(array[i])
    }

    