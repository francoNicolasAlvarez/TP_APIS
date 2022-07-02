const changeText = (dato) => {
    let p = document.querySelector("p");

    //p.textContent = "Cambié debido a un controlador de eventos en línea.";
    //p.textContent = "Cambié debido a una propiedad del controlador de eventos.";
    p.textContent = dato;
};
let data=[]

async function getUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        data = await response.json();
        

        data.forEach((element) => {
            delete element.phone;
            delete element.zipcode;
            delete element.address.geo.lat;
            
        });
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    
}

async function getUser2() {
    try {
        let arrUser2=[];
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        data = await response.json();
        let i=0;

        data.forEach((element) => {
            
            const {
                id : id,
                name : name,
                username : username,
                email : email,
                address : {
                  street : street,
                  suite : suite,
                  city : city,
                  zipcode : zipcode,
                  geo:  {
                    lat : lat,
                    lng : lng
                  }
                },
                phone : phone,
                website : website,
                company : {
                    name : cname ,
                    catchPhrase : catchPhrase,
                    bs : bs
                  }}=data;
            let geo={lat};
            let address ={"street":street,"suite":suite,"city":city,"geo":geo};
            let company={"name" : cname,"catchPhrase" : catchPhrase,"bs" : bs};
            const arr=({"id":id,"name":name,"username":username,"email":email,"address":address,"website":website,"company":company});
            arrUser2 = [arrUser2, ...arr];
        });

        console.log(data);
    } catch (error) {
        console.log(error);
    }
    
}

let discArr=[]
async function getDisc() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1/albums")
        discArr = await response.json();        
        console.log(discArr);
    } catch (error) {
        console.log(error);
    }
    
}

function findIdDisc(idNum){
   
    discArr.forEach(element => {
        
            
        if(element.id==idNum){
            console.log(element.title);
        }   
        
    });
}
let arrDisc2=[];
async function findIdDisc2(idNum){
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1/albums");
    dataDiscs = await response.json(); 
    let flag=false; 
    
    dataDiscs.forEach(element => {
        for (const property in element) {
            if(flag===true){
            arrDisc2=[element[property]]
            }
            else if(flag===false)
            {if(element[property]===idNum){
                flag=true;
            }}
            ;
          }
    });
    console.log(arrDisc2);
    
    
}

getUser();
getUser2();
getDisc();
