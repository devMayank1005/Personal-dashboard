function OpenFeature() {
  var allElems = document.querySelectorAll('.elem');
var FullElemPage = document.querySelectorAll('.fullElem');
var FullElemPageBackBtn= document.querySelectorAll('.fullElem .back');

FullElemPageBackBtn.forEach(function(back) {
    back.addEventListener('click', function() {
        FullElemPage[back.id].style.display = 'none';
    });
});
allElems.forEach(function(elem) {
    elem.addEventListener('click', function() {

        FullElemPage[elem.id].style.display = 'block';
        
       
    });
});
}

