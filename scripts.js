document.addEventListener("DOMContentLoaded", function () {
    let divHeader = document.createElement("div");
    divHeader.className = "header-container"

    let h1 = document.createElement("h1");
    let h1Text = document.createTextNode("This is a h1");

    h1.className = "h1"

    h1.appendChild(h1Text);
    divHeader.appendChild(h1);

    document.body.appendChild(divHeader);

    let h2 = document.createElement("h2");
    let h2Text = document.createTextNode("This is an h2");
    h2.className = "h2"

    h2.appendChild(h2Text);

    divHeader.appendChild(h2);

    let h3 = document.createElement("h3");
    let h3Text = document.createTextNode("This is an h3");
    h3.className = "h3"

    h3.appendChild(h3Text);

    divHeader.appendChild(h3);

    let h4 = document.createElement("h4");
    let h4Text = document.createTextNode("This is an h4");
    h4.className = "h4"

    h4.appendChild(h4Text);

    divHeader.appendChild(h4);

    let h5 = document.createElement("h5");
    let h5Text = document.createTextNode("This is an h5");
    h5.className = "h5"

    h5.appendChild(h5Text);

    divHeader.appendChild(h5);

    let h6 = document.createElement("h6");
    let h6Text = document.createTextNode("This is an h6");
    h6.className = "h6"

    h6.appendChild(h6Text);

    divHeader.appendChild(h6);

    let colorsArry = ["blue", "purple", "green", "red", "orange", "yellow", "pink", "black"];

    
    function changeColor() {
       let randomColor = colorsArry[Math.floor(Math.random() * colorsArry.length)];
       return randomColor;
    }

    h1.addEventListener('dblclick', function() {
        let randomColor = changeColor();
        h1.style.color = randomColor;
    });

    h2.addEventListener('dblclick', function() {
        let randomColor = changeColor();
        h2.style.color = randomColor;
    });

    h3.addEventListener('dblclick', function() {
        let randomColor = changeColor();
        h3.style.color = randomColor;
    });

    h4.addEventListener('dblclick', function() {
        let randomColor = changeColor();
        h4.style.color = randomColor;
    });

    h5.addEventListener('dblclick', function() {
        let randomColor = changeColor();
        h5.style.color = randomColor;
    });

    h6.addEventListener('dblclick', function() {
        let randomColor = changeColor();
        h6.style.color = randomColor;
    });

    let btn = document.createElement("button");
    let btnText = document.createTextNode("Click to add a new item to the list");
    btn.className = "btn"
    btn.appendChild(btnText);
    divHeader.appendChild(btn);

    
    let list = document.createElement("list");

    divHeader.appendChild("list")
    
    
    let itemNum = 1;

    function btnClicked() {
        let li = document.createElement("li");
        
        let liText = document.createTextNode("This is list item" + (itemNum));
        

        li.appendChild(liText);

        ul.appendChild(li);
        
        itemNum = (itemNum +1);

        li.addEventListener('click', function() {
            let randomColor = changeColor();
            li.style.color = randomColor;
        });

        li.addEventListener('dblclick', function() {
            this.remove();
        });
    }

    btn.addEventListener('click', btnClicked);
    
   ;



})

