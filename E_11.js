var array = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
        {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
        {id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
        {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
    ]

    console.log('Ordenado pos idade (dec), id (dec):', multiSort(array, {
        idade: 'desc',
        id: 'asc',
    }));

    function multiSort(array, sortObject = {}) {
        const sortKeys = Object.keys(sortObject);

        // Return array if no sort object is supplied.
        if (!sortKeys.length) {
            return array;
        }

        // Change the values of the sortObject keys to -1, 0, or 1.
        for (let key in sortObject) {
            sortObject[key] = sortObject[key] === 'desc' || sortObject[key] === -1 ? -1 : (sortObject[key] === 'skip' || sortObject[key] === 0 ? 0 : 1);
        }

        const keySort = (a, b, direction) => {
            direction = direction !== null ? direction : 1;

            if (a === b) { // If the values are the same, do not switch positions.
                return 0;
            }

            // If b > a, multiply by -1 to get the reverse direction.
            return a > b ? direction : -1 * direction;
        };

        return array.sort((a, b) => {
            let sorted = 0;
            let index = 0;

            // Loop until sorted (-1 or 1) or until the sort keys have been processed.
            while (sorted === 0 && index < sortKeys.length) {
                const key = sortKeys[index];

                if (key) {
                    const direction = sortObject[key];

                    sorted = keySort(a[key], b[key], direction);
                    index++;
                }
            }
            return sorted;
        });
    }
