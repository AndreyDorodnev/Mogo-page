$(document).ready(function(){

    const expands = Array.from($('.expand-item'));

    function setActive($element){
        $element.addClass('expand-active');
    }
    function removeActive($element){
        $element.removeClass('expand-active');
    }

    function removeAllActive(arr){
        arr.forEach(element => {
            removeActive($(element))
        });
    }
    function setEvents(arr){
        arr.forEach(element => {
            $(element).mouseenter(()=>{
                removeAllActive(arr);
                setActive($(element));
            })
        })
    }

    setActive($(expands[0])); //set firt expander active
    setEvents(expands); //set mouseenter events to change active expander


});