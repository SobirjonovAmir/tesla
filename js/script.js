let car_view = document.querySelector(".switch .car-view")
let colors = document.querySelector(".colors")
let hide = document.querySelectorAll(".hide")
let img = document.querySelector(".car")
let wheels = document.querySelector(".wheels")
let color_change = document.querySelectorAll(".color")
let color = {
	black: "img/black.png",
	wheat: "img/wheat.png",
	white: "img/white.svg",
}

color_change.forEach(el => {
	let key = el.getAttribute("data-color")
	el.onclick = () => {
		color_change.forEach(color => color.classList.remove("active"))
		el.classList.add("active")
		img.src = color[key]
	}
})

car_view.onclick = () => {
	hide.forEach(el => {
		if (car_view.checked) {
			el.style.display = "flex"
			colors.style.display = "none"
			img.src = "img/tesla.png"
			wheels.style.display = "block"
		} else {
			el.style.display = "none"
			colors.style.display = "flex"
			img.src = "img/black.png"
			wheels.style.display = "none"
		}
	})
}



let degre = document.querySelector(".degre")
let up = document.querySelector('.up')
let down = document.querySelector('.down')

function increment() {
	if (degre.innerHTML < 30) {
		degre.innerHTML++
		down.style.opacity = "1"
	}
	if (degre.innerHTML === '30') {
		up.style.opacity = '0.5'
	}
}
function decrement() {
	if (degre.innerHTML > -20) {
		degre.innerHTML--
		up.style.opacity = '1'
	}
	if (degre.innerHTML === "-20") {
		down.style.opacity = "0.5"
	}
}
up.onclick = () => increment()
down.onclick = () => decrement()


let car_speed = document.querySelector(".speed")
let speed_up = document.querySelector(".speed-up")
let speed_down = document.querySelector(".speed-down")

function speed_up_func(value, btn) {
	if (+value.innerHTML < 220) {
		let speed = +value.innerHTML + 10
		value.innerHTML = speed
		btn.style.opacity = "1"
	}
	if (+value.innerHTML === 220) {
		speed_up.style.opacity = '0.5'
	}
}
function speed_down_func(value, btn) {
	if (+value.innerHTML > 0) {
		let speed = +value.innerHTML - 10
		value.innerHTML = speed
		btn.style.opacity = '1'
	}
	if (+car_speed.innerHTML === 0) {
		speed_down.style.opacity = "0.5"
	}
}

speed_up.onclick = () => speed_up_func(car_speed, speed_up)
speed_down.onclick = () => speed_down_func(car_speed, speed_down)


let orig_price = 89990
let long = document.querySelector(".long")
let price = document.querySelector(".price")

long.onclick = () => {
	let key = long.getAttribute("data-price")
	if (long.checked) {
		price.innerHTML = (orig_price + +key).toLocaleString("en")
	} else {
		price.innerHTML = orig_price.toLocaleString("en")
	}
}

let reserve = document.querySelector(".reserve")
let conditioner = document.querySelector(".conditioner")
let orig_reserve = 750
reserve.innerHTML = orig_reserve
conditioner.onclick = () => {
	if (conditioner.checked) {
		reserve.innerHTML = orig_reserve - 50
	} else {
		reserve.innerHTML = orig_reserve
	}
}


let wheel = document.querySelectorAll(".wheel")
let big = document.querySelector(".big")
let small = document.querySelector(".small")
let size = document.querySelector(".size")

small.style.opacity = 0.5
big.onclick = () => {
	wheel.forEach(el => el.style.scale = "1.05")
	size.textContent = 21
	small.style.opacity = 1
	big.style.opacity = 0.5
}
small.onclick = () => {
	wheel.forEach(el => el.style.scale = "1")
	size.textContent = 19
	big.style.opacity = 1
	small.style.opacity = 0.5
}