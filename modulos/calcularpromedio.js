
export function Calcularpromedio(not1,not2,not3)
{

    let proemdio = (not1 + not2 + not3)/3

    if(proemdio>=3.0)
    {
        alert("Aprobo")
    }
    else
    {
        alert("Reprobo")
    }
    return proemdio;
}