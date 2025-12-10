export function evaluar(...valores) {
    try 
    {
        for (let valor of valores) 
        {
            if (isNaN(valor) || valor === null) 
            {
                throw new Error(`El valor "${valor}" no es un número`);
            }
        }

        const copiaValores = [...valores];

        let suma = 0;
        for (let numero of copiaValores)
        {
            suma += numero;
        }

        const promedio = suma / copiaValores.length;

        return promedio;

    } 
    catch (error) 
    {
        console.error("Error:", error.message);
    }
}
