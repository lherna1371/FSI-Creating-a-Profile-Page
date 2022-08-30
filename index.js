
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.textContent = 'Rizzo'
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
dogContent.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogContent.append(dogDetails)

let headerThree = document.createElement('h3');
headerThree.textContent = 'Description:';
dogDetails.append(headerThree);


let paragraph = document.createElement('p');
paragraph.textContent = "This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.";
dogDetails.append(paragraph);


let headerThreeTwo = document.createElement('h3');
headerThreeTwo.textContent = 'Feeding Times:'
dogDetails.append(headerThreeTwo);


let ul = document.createElement('ul');

let feedingTimes = ['9:00 AM', '12:00 PM', '5:00 PM', '10:00 PM']

for(let i=0; i < feedingTimes.length; i++) {
    let li = document.createElement('li');
    console.log(li, feedingTimes[i])
    li.textContent = feedingTimes[i];
    ul.append(li)
}

dogDetails.append(ul)


let button = document.createElement('button');
button.textContent = 'Click Me!'
button.style.fontSize = '35px'
dogDetails.append(button);


button.addEventListener('click', function(){

    updateMyPage();
})


function updateMyPage(){
    ul.remove()

    let link = document.createElement('link');
    link.setAttribute('rel','stylesheet');
    link.setAttribute('href','./styletwo.css');
    
    let head = document.querySelector('head');
    head.append(link)
    
    paragraph.setAttribute('id','white-text')
}
