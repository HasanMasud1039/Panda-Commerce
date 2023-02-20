//task 2
const header2s = document.getElementsByTagName("h2");
for(const header2 of header2s){
    header2.style.color = "lightblue";
}

//task 3
const backpack = document.getElementById('backpack');
backpack.style.backgroundColor = 'tomato';

//task 4

const cards = document.getElementsByClassName('card');
for(const card of cards){
    card.style.borderRadius = "30px";
}

//task 5

function my(){
    console.log("Love me more!");
}

//task 6

    // const btns = document.getElementsByClassName('btn');
        let btns = document.querySelectorAll('.btn');
    const cards2 = document.getElementsByClassName('card');
        for( const card2 of cards2){
    for(const btn of btns){
        
            btn.addEventListener('click',function(btn){
            // card2.style.display = 'none';
            // card2.stopImmediatePropagation().style.display = 'none';
             btn.stopPropagation();
            console.log('clicked');
        })
        
    
    }

    }

//task 7
document.getElementById('exampleInputEmail1').addEventListener('keyup', function (event) {
            const text = event.target.value;
            const submitButton = document.getElementById('btn-submit');
            if(text === 'email'){
                submitButton.removeAttribute('disabled');

            }
            else 
                 submitButton.setAttribute('disabled', true);
        })

