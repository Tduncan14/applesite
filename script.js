// slide show
const slideShowDivs = () => {


    for(let i = 1; i < 5; i++){

        const div = document.createElement('div')


        div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;


        i === 1 && div.classList.add('change')

        document.querySelector('.slideShow').appendChild(div)

    }





}


slideShowDivs()


const divs = document.querySelectorAll('.slideShow div');


let a = 1;


const slideShow = () => {



    setInterval(() => {
        a++
        const div = document.querySelector('.slideShow .change');

        div.classList.remove('change');


        if(a < divs.length) {
            div.nextElementSibling.classList.add('change')
        } else {
            divs[0].classList.add('change')
            a = 1
        }


    },1000)

  
}

// a++

// const div = document.querySelector('.slideShow .change')

// div.classList.remove('change')

// if(a < divs.length) {
//     div.nextElementSibling.classList.add('change')
// } else {
//     divs[0].classList.add('change')
//     a = 1
// }


slideShow()
// end of slide show