function calculateMoney(ticketSale){
    const ticketPrice=120;
    const gateManCost=500;
    const EightStaffCost=8*50;
    const FixedCost=gateManCost+EightStaffCost;
    const resultOfIncome=(ticketPrice*ticketSale)-FixedCost;
    if(ticketSale<0){
        return "give me positive number"
    }
    return resultOfIncome;
}
//const res=calculateMoney(1055);
//console.log(res);

function checkName(takeName){
    
    if(typeof takeName!=='string'){
        return "invalid"
    }
    
    const name= takeName.toLowerCase().split("");
    const size=name.length;
    if(name[size-1]==='A' ||name[size-1]==='y' ||name[size-1]==='i' ||name[size-1]==='e' ||name[size-1]==='o' ||name[size-1]==='u' ||name[size-1]==='w'  ){
        return"good name";
    }
    else{
        return"Bad name";
    }
}
//const r=checkName("RAFEE");
//console.log(r);

function deleteInvalids(arra){
    if(Array.isArray(arra)!==true){
        return "invalid input"
    }
    let arr=[];
    //let size=arra.length;
    for(const element of arra){
        if(typeof element==='number' && !Number.isNaN(element)){
           arr.push(element);
        }
    }
   return arr;
}
//const re=deleteInvalids([2,3,3,'ensaf',"rwew",78,NaN]);
//console.log(re);

function password(passwordCreate){
   
   if(typeof passwordCreate!=='object' ||
    passwordCreate === null
     ){
    return "invalid";
   }
   let lengths = String (passwordCreate.birthYear).length;
   if(lengths!==4){
    return "invalid";
   }
    
    
    let res= passwordCreate.siteName.charAt(0).toUpperCase()+passwordCreate.siteName.slice(1)+"#"+passwordCreate.name+"@"+passwordCreate.birthYear;
    
    
    return res;

}
const obj=
    {   
        name:"rony",
        birthYear:1679,
        siteName:"google"
    };

//const re=password(obj);
//console.log(re);


//problem 05
function monthlySavings(paymentArray,fixedCostOfLiving){
    if(Array.isArray(paymentArray)!==true || typeof fixedCostOfLiving!=='number'){
        return "invalid input"
    }
    let discoutCalculate;
    let sum=0;
    let saving;
    for(const elements of paymentArray){
        if(elements>=3000){
            discoutCalculate=elements*.8;// 20% discount means 80% remain
            sum=sum+discoutCalculate;
        }
        else{
            sum=sum+elements;
        }
    }
    saving=sum-fixedCostOfLiving;
    if(saving>=0){
        return saving;
    }
    else{
        return "earn more"
    }

}
//const re=monthlySavings(5000,[1000,2000,2500]);
//console.log(re);
