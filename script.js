function convertToEnglish() {

	let input = document.getElementById('input').value;
let output = document.getElementById("output");
	let translatedString = input.replace(/\./g, "dot").replace(/\-/g, "dash");

	translatedString = translatedString.replace(/dotdotdotdot/g, "h").replace(/dotdotdotdash/g, "v").replace(/dotdotdashdot/g, "f").replace(/dotdashdotdot/g, "l").replace(/dotdashdashdot/g, "p").replace(/dotdashdashdash/g, "j").replace(/dashdotdotdot/g, "b").replace(/dashdotdotdash/g, "x").replace(/dashdotdashdot/g, "c").replace(/dashdotdashdash/g, "y").replace(/dashdashdotdot/g, "z").replace(/dashdashdotdash/g, "q").replace(/dotdotdot/g, "s").replace(/dotdotdash/g, "u").replace(/dotdashdot/g, "r").replace(/dotdashdash/g, "w").replace(/dashdotdot/g, "d").replace(/dashdotdash/g, "k").replace(/dashdashdot/g, "g").replace(/dashdashdash/g, "o").replace(/dotdot/g, "i").replace(/dotdash/g, "a").replace(/dashdot/g, "n").replace(/dashdash/g, "m").replace(/dot/g, "e").replace(/dash/g, "t");
	
	translatedString = translatedString.split("  ").join("/").split(" ").join("").split("/").join(" ");
	
	output.innerHTML = translatedString;
}


const buttons = document.getElementsByTagName("button");

function createRipple(event) {
  const button = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

for (const button of buttons) {
  button.addEventListener("click", createRipple);
}

