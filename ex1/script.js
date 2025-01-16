// Snack 1
// Creare un array di oggetti: Ogni oggetto descriverà una bici
//  da corsa con le seguenti proprietà: nome e peso.
//  Stampare a schermo la bici con peso minore.

const biciclette = [
    {
        'nome' : 'bici#1',
        'peso' : 6,
    },
    {
        'nome' : 'bici#2',
        'peso' : 3,
    },
    {
        'nome' : 'bici#3',
        'peso' : 2,
    },
    {
        'nome' : 'bici#4',
        'peso' : 7,
    },
    {
        'nome' : 'bici#5',
        'peso' : 9,
    },
]

// creo una funzione che metta a confronto i pesi delle bici 

// inizializzo la variabile biciLeggera in modo che prenda il valore
// della prima bicicletta, ipotizzando sia la piu leggera

let biciLeggera = biciclette[0]