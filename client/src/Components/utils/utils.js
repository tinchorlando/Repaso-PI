export const showSelectBox = ()=>{
    
    let selectBox = document.getElementById('selectBox')
    let allEpi = document.getElementById('allEpiDiv')
    if (selectBox.style.display!=='block'){
        selectBox.style.display="block";        
        allEpi.style.display="none"
    }
    else {
        selectBox.style.display="none";
        allEpi.style.display="block"
    }
    
}
export const selectorStyle ={
    display:'none'
}

