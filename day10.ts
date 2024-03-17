
//Qestion 01
let nomanLifeStage=25;
if(nomanLifeStage<12){
    console.log("Noman is child")
}else if(nomanLifeStage<18){
    console.log("Noman is younger")
}else if(nomanLifeStage<30){
    console.log("Noman is adult")
}else if(nomanLifeStage<50){
    console.log("Noman is adult")
}else{
    console.log("don't know noman age so don't tell about his life stage")
};

//Qestion 02
let stages_of_life=['child','younger','adult','old age'];
if(stages_of_life[1]==="child"){
    console.log("That stage start from born baby to 12 years")
}else if(stages_of_life[3]==="younger"){
    console.log("That stage start from 12 years to 18 years")
}else if(stages_of_life[2]==="adult"){
    console.log("That stage start from 18 years to 30 years")
}else if(stages_of_life[3]==="old age"){
    console.log("That stage start from 30 years to 50 years above")
}else{
    console.log("having no data")
};

//Qestion 03
let nomanCompany=['Basit','Hadi','Basil','Danish'];
console.log("Noman Company workers names define in bellow:")
nomanCompany.forEach(nomanCompany=>{
    console.log(" hello! " + nomanCompany + " nice to meet you.")
});
let worker='hadi'
if(worker==="hadi"){
        console.log("Hadi is manager of Noman Company")
}else{
        console.log("  Now hadi left Noman Company")
}