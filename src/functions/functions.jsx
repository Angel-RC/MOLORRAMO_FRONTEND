import * as constant from "../constant/index"

export const filterData = (DataInicial, Filtros, setDataMostrar, Options, setOptions) => {

fetch(constant.URL_FILTER_DATA,{
    method : "POST",
    body : JSON.stringify(Filtros)}
      )
        .then(res => res.json())
        .then((data) => {
            setDataMostrar(data.data) 
            setOptions({...Options, color: data.options.color})
            
        })     
}



export async function CreateDataInicial(page, setDataInicial, setOptions){

    var body = {"page": page}

    const response = await fetch(constant.URL_CREATE_DATA_INICIAL,{
        method : "POST",
        body : JSON.stringify(body)})

    const response1 = await response.json();
    const movies = await setDataInicial(response1.data);
        
      
}
