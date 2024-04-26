let imgt = document.getElementById('img11')

imgt.onclick = function(){
    document.body.classList.toggle('darkT')
    if(document.body.classList.contains('darkT')){
        imgt.src = 'sun.jpg'
    }else{
        imgt.src = 'moon.jpg'
    }
    

}
    
