// let k=document.getElementById("btn");
document.getElementById("btn").onclick = () => {
    let st = document.getElementById("newRcmd").value;
    document.getElementById("newRcmd").value=null;
    console.log(st);
    const newdiv= document.createElement("div");
    newdiv.setAttribute("class","rcmd");
    const newtext= document.createTextNode(st);
    newdiv.appendChild(newtext);
    showRcmd.appendChild(newdiv);
    document.getElementById("popup").style.display = "block";
    document.getElementById("popup").style.top = "-500px";
    document.getElementById("popup").style.zIndex = "100px";
}
document.getElementById("ok").onclick = () => {
    document.getElementById("popup").style.display = "none";
}
const to_top = document.getElementById("profile");
document.getElementById("updown").onclick = () => {
    to_top.scrollIntoView({behavior : "smooth"});
}