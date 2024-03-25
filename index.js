let boxes=document.querySelectorAll(".box");
let reset=document.querySelectorAll("#reset");
let newgame=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turno=true; //player x
let count=0;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetgame = () => {
    turno=true;
    enableboxes();
    count=0;
    msgcontainer.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click",() => {
       // console.log("box was clicked");
        if(turno){
            box.innerText='O';
            turno=false;
        }
        else{
            box.innerText='X';
            turno=true;
        }
        box.disabled=true;
        count++;
        let iswinner = checkwinner();
        if(count==9 && !iswinner ){
            gameDraw();
        }
    });
}

);
const gameDraw =() => {
    msg.innerText=`Game was a Draw `;
    msgcontainer.classList.remove("hide");
    disableboxes();

};
const enableboxes = () => {
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const disableboxes = () => {
    for (let box of boxes){
        box.disabled=true;
    }
};
const showwinner = (winner) => {
    msg.innerText= `Congratulations,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const checkwinner = () => {
    for(let pattern of winpatterns){
      let pos1val=boxes[pattern[0]].innerText;
      let pos2val=boxes[pattern[1]].innerText;
      let pos3val=boxes[pattern[2]].innerText;
      if(pos1val!="" && pos2val!= "" && pos3val!=" "){
        if(pos1val==pos2val && pos2val==pos3val){
           // console.log("winner",pos1val);
            showwinner(pos1val);
        }
      }
    }
};
//reset.addEventListener("click", resetgame);
//newgame.addEventListener("click",resetgame);
const buttons = document.querySelectorAll(".hi");

buttons.forEach((button)=>{

button.addEventListener("click",(resetgame))
});
//reset.addEventListener("click",resetgame);