window.onload = () => {
    let fields = document.querySelectorAll('.fade-field');

    fields.forEach(field => {
        //apply overflow fade on load
        fadeOverflowText(field);

        ['keyup','keydown','touchend'].forEach(event => {
            field.addEventListener(event, () => fadeOverflowText(field));
        });

        field.addEventListener('blur', () => {
            //timeout to let text shift before calculating text overflow
            setTimeout(() => {
                fadeOverflowText(field);
            },10);
        });
    
    });

    //apply overflow fade on selection change
    document.onselectionchange = () => {
        let activeElm = document.activeElement;
        let fieldsArr = Array.from(fields);
        if (fieldsArr.includes(activeElm))
            fadeOverflowText(activeElm);
    };

    function fadeOverflowText(elm) {
        let parent = elm.parentElement;
        let overflowLeft = elm.scrollLeft > 0;
        let overflowRight = elm.scrollWidth - (elm.clientWidth + elm.scrollLeft) > 2;//2px margin of error
        
        overflowLeft ? parent.classList.add('overflow-fade-left') : parent.classList.remove('overflow-fade-left');
        overflowRight ? parent.classList.add('overflow-fade-right') : parent.classList.remove('overflow-fade-right');
    }
};
