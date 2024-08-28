function chamarCliente(){
    return new Promise((resolve, reject) => {
        const erro = true;
        setTimeout(() => {
            if(erro){
                resolve('lista mostrada');
            }else{
                reject('nada mostrado');
            }
        }, 2000);
    })
}

function exemplo(){
    return new Promise((resolve, reject) => {
        const erro = true;
        setTimeout(() => {
            if(erro){
                resolve('exemplo mostrado');
            }else{
                reject('nada do exemplo mostrado');
            }
        }, 4000);
    })
}
const executar =  async () =>{
   
   try {
    const respota = await Promise.all([chamarCliente(), exemplo()]);
    
  console.log(respota);
  
    
    
   } catch (error) {
    console.error(error);
   }
    
}
executar();

/* entendendo promisse */


