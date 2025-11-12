// Funcion para validar que el numero sea mayor que 1
function Validarnumero(n)
{
    return n>1;
}

// Funcion para contar cuantos divisores tiene el numero
function Contardivisores (n)
{
    let divisores = 0;
    for(let i = 1; i<=n;i++)
    {
    if(n % i === 0){
        divisores++;
        }    
    }
    return divisores;
    
}

// Funcion para mostrar si el numero es primo o no
function mostrarresultado(n, divisores)
{
    if(divisores ===2)
    {
        alert(`El numero ${n} es primo`)
    }
    else
    {
        alert(`El numero ${n} no es primo`)
    }
}
// Funcion principal que une todo
function verificarprimo()
{
    let n = parseInt(prompt("Ingrese un numero: "))
    if(Validarnumero(n))
    {
        let divisores = Contardivisores(n);
        mostrarresultado(n,divisores)
    }
    else
    {
        alert(`El numero debe ser mayor que 1`)
    }
}

// Ejecutamos el programa
verificarprimo()
