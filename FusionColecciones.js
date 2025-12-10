export function fusionarColecciones(lista1, lista2) 
{
    try 
    {
        if (!(lista1.length >= 0) || !(lista2.length >= 0)) 
        {
            throw new Error("Ambos parámetros deben ser arreglos");
        }

        const coleccionFinal = [...lista1, ...lista2];

        return coleccionFinal;

    } 
    catch (error) 
    {
        console.error("Error:", error.message);
    }
}
