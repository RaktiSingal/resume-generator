function addProject()
{
    let ele=document.createElement("textarea");
    ele.classList.add("form-control");
    ele.classList.add("project");
    ele.classList.add("mt-2");
    ele.setAttribute("rows",2);
    ele.setAttribute('placeholder','Enter your projects');

    let p=document.getElementById("pro");
    let pr=document.getElementById("pr");
    pr.insertBefore(ele,p);
}
function addWork()
{
    let element=document.createElement("textarea");
    element.classList.add("form-control");
    element.classList.add("work");
    element.classList.add("mt-2");
    element.setAttribute("rows",2);
    element.setAttribute('placeholder','Enter most recent to least recent');

    let b=document.getElementById("wor");
    let d=document.getElementById("w");
    d.insertBefore(element,b);
}
function addEdu()
{
    let element=document.createElement("textarea");
    element.classList.add("form-control");
    element.classList.add("edu");
    element.classList.add("mt-2");
    element.setAttribute("rows",2);
    element.setAttribute('placeholder','Enter most recent to least recent');

    let b=document.getElementById("edu");
    let d=document.getElementById("e");
    d.insertBefore(element,b);
}
function addAchi()
{
    let element=document.createElement("textarea");
    element.classList.add("form-control");
    element.classList.add("achiii");
    element.classList.add("mt-2");
    element.setAttribute("rows",2);
    element.setAttribute('placeholder','Enter certifications and achievments');

    let b=document.getElementById("ach");
    let d=document.getElementById("a");
    d.insertBefore(element,b);
}
function generate()
{
    let namefield=document.getElementById("name").value;
    let n=document.getElementById("nameT");
    n.innerHTML=namefield;

    let phonefield=document.getElementById("phoneno").value;
    let p=document.getElementById("phonenoT");
    p.innerHTML=phonefield;

    let emailfield=document.getElementById("email").value;
    let e=document.getElementById("emailT");
    e.innerHTML=emailfield;

    let linkedinfield=document.getElementById("linkedin").value;
    let l=document.getElementById("linkedinT");
    l.innerHTML=linkedinfield;

    let githubfield=document.getElementById("github").value;
    let g=document.getElementById("githubT");
    g.innerHTML=githubfield;

    let profilefield=document.getElementById("myprofile").value;
    let pr=document.getElementById("myprofileT");
    pr.innerHTML=profilefield;

    let arch=document.getElementsByClassName("achiii");
    let str="";
    for(let a of arch)
    {
        str=str+`<li> ${a.value} </li>`;
    }
    document.getElementById("achiT").innerHTML=str;


    let wor=document.getElementsByClassName("work");
    let wst="";
    for(let g of wor)
    {
        wst=wst+`<li> ${g.value} </li>`;
    }
    document.getElementById("workT").innerHTML=wst;

    let educ=document.getElementsByClassName("edu");
    let est="";
    for(let k of educ)
    {
        est=est+`<li> ${k.value} </li>`;
    }
    document.getElementById("eduT").innerHTML=est;

    let proj=document.getElementsByClassName("project");
    let pst="";
    for(let q of proj)
    {
        pst=pst+`<li> ${q.value} </li>`;
    }
    document.getElementById("proT").innerHTML=pst;

     let file=document.getElementById("image").files[0];
     let reader=new FileReader();
     reader.readAsDataURL(file);
     document.getElementById("imageT").src=reader.result;
     reader.onloadend=function()
     {
        document.getElementById("imageT").src=reader.result;
     }

    document.getElementById("resume").style.display = "none";
    document.getElementById("cv-template").style.display = "block";

}
function printResume()
{
    window.print();
}