
// grabbing the element with the particle ID
let particle = document.getElementById("particle")

// particle count function
function particleCount(num) {


  // loop creates every particle that's going to appear
	for (let i=0; i<num; i++) {


    // declaring function variables
    // creating div which is each particle
		let dots = document.createElement("div")
    // math variables used for string literals
    // only really doable with some randomness, otherwise it looks incredibly gross...
    let direction = Math.random()*5000;
    let size = Math.random()*10;
    let startingPosition = 100*Math.random();

    // setting the class to "particles" so css can modify them
		dots.className = "sakuraParticles";

    // left property sets the horizontal position of the elements
		dots.style.left=  `${startingPosition}%`


    // animate
		dots.animate([{

      // animating the direction and scale of dots towards end
			transform: `translate(${direction}px, 350vh) scale(${size})`,

      // adding two box shadows
			boxShadow: "0 0 10px 3px #EE81CD, 0 0 10px 5px #D90088",
		}],
    {
      // speed of particles
      // bigger number == slower particle speed
			duration: Math.random()*10000+20000,
      // iteration delay
      // also basically bigger number == more spread across particles
      delay: -i++*2000,

      // how many times to iterate
      // forever lol
      iterations: Infinity
		})

    // appending created child to the element with the particle ID
    // so you can see it....
		particle.appendChild(dots)
	}
}



// note: I don't really like how few particles are on the left side of the screen

// setting particle amount and running the function
particleCount(500)