document.getElementById('font-bold').addEventListener('click',function(){
    const text=document.getElementById('input-text');
    if (text.style.fontWeight === "bold") {
        text.style.fontWeight = "normal";
    } else {
        text.style.fontWeight = "bold";
    }
})
document.getElementById('font-italic').addEventListener('click',function(){
    const text=document.getElementById('input-text');
    if (text.style.fontStyle === "italic") {
        text.style.fontStyle = "normal";
    } else {
        text.style.fontStyle = "italic";
    }
})
document.getElementById('font-underline').addEventListener('click',function(){
    const text=document.getElementById('input-text');
    if (text.style.textDecoration === "underline") {
        text.style.textDecoration = "none";
    } else {
        text.style.textDecoration = "underline";
    }
})

document.getElementById('align-left').addEventListener('click', function() {
    const text = document.getElementById('input-text');
    text.style.textAlign = "left";
});

document.getElementById('align-center').addEventListener('click', function() {
    const text = document.getElementById('input-text');
    text.style.textAlign = "center";
});

document.getElementById('align-right').addEventListener('click', function() {
    const text = document.getElementById('input-text');
    text.style.textAlign = "right";
});

document.getElementById('align-justify').addEventListener('click', function() {
    const text = document.getElementById('input-text');
    text.style.textAlign = "justify";
});

// capitalize first letter

document.getElementById('first-letter-capital').addEventListener('click',function(){
    const textElement = document.getElementById('input-text');
    const text = textElement.value;
    const newtext=text.replace(/(^\w|\.\s+\w)/g, function(letter) {
        return letter.toUpperCase();
    });

    textElement.value=newtext;
})

// capitalize all letters 

document.getElementById('letter-capital').addEventListener('click',function(){
    const textElement = document.getElementById('input-text');
    const text = textElement.value;
    textElement.value=text.toUpperCase();
})

// make small all letters

document.getElementById('letter-small').addEventListener('click',function(){
    const textElement = document.getElementById('input-text');
    const text = textElement.value;
    textElement.value=text.toLowerCase();
})

// font size
document.getElementById('font-size-input').addEventListener('click', function() {
    const text = document.getElementById('input-text');
    const size=this.value;
    
    text.style.fontSize = size + 'px';
});

// color

document.getElementById('color-picker').addEventListener('input',function(){
    const color= this.value;
    const text=document.getElementById('input-text');
    text.style.color=color;
} )