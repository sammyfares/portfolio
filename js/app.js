
function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active")
    
}

document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
		togglePopup()
	}
});


function project(){
    alert('you can find my project if you press on the picture.')
}
function contact(){
    alert('you can press on the logos to contact me.')
}
