const API_URL = "http://localhost:3000/"

// fetch(API_URL).then(response => {
  
//   const testimonial = response.json()

testimonial = [{
    "quote":"Thank you so much PlaceHolder, just left the store. Got all my earnings as promised, I got all my money as they promised. They're definitely legit.",
    "name":"Marcelino Zwick"
  },
  {
    "quote":"Thanks for making my dreams come through, I'm forever grateful.",
    "name":"Venita Bills"
  },
  {
    "quote":"I'm really grateful to invest with PlaceHolder and i got all my earnings. I will continue to make more investments with you guys. God bless!!! .",
    "name":"Rich Pooley"
  },
  {
    "quote":"I can't wait to make more investments with you guys, I'm indeed grateful.",
    "name": "Marty Burry"
  },
  {
    "quote":"That Thank you Ma'am, i got all my earnings as promised, I'm indeed grateful.",
    "name": "Willette Minyard"
  }]
  
const carousel = document.querySelectorAll('#testimonial-sect .carousel');
carousel.forEach(c => {
  
  testimonial.forEach(testimony => {
    let div = document.createElement('div')
    let quote = document.createElement('div')
    let span = document.createElement('span')
    let b = document.createElement('b')
    let br = document.createElement('br')
    div.classList.add('carousel-item')
    b.innerText = testimony.name;
    span.appendChild(b)
    
    quote.innerText = testimony.quote;
    div.appendChild(quote)
    div.appendChild(br)
    div.appendChild(br)
    
    div.appendChild(span)
    
    c.appendChild(div)
    })
  
})

//})
  
  
  
  
  
  
  
  
  /*
            <div class="carousel-item ">
            
            <br /><br />
            <span><b></b></span>
          </div>
          <div class="carousel-item ">
            
            <br /><br /><br /><br />
            <span><b></b></span>
          </div>
          <div class="carousel-item ">
            
            <br /><br />
            <span><b>/b></span>
          </div>
          <div class="carousel-item">
            .
            <br /><br /><br /><br />
            <span><b></b></span>
          </div>
          <div class="carousel-item">
            
            <br /><br /><br /><br />
            <span><b>/b></span>
          </div>
          <div class="carousel-item">
            God bless you PlaceHolder, you guys are absolutely awesome.
            <br /><br /><br /><br />
            <span><b>Enoch Boose</b></span>
          </div>
          <div class="carousel-item">
            This is life changing for me, and if you have not invested with PlaceHolder. I must tell you because you're missing alot then.
            <br /><br />
            <span><b>Kathy Mozee</b></span>
          </div>
          <div class="carousel-item">
            I never believed this was gonna be true, so i thought of giving it try, the outcome was unbelievable. Thank you PlaceHolder.
            <br /><br />
            <span><b>Rikki Steinhoff</b></span>
          </div>
        </div>
        */