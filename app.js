	window.onload = function() {
	const startBtn = document.querySelector('.start') 
	const screens = document.querySelectorAll('.screen')
	const timeList = document.querySelector('#time-list')
	let time = 0
	const timeEl = document.querySelector('#time')   
	const board = document.querySelector('#board')     
	let score = 0
	const restart = document.querySelector('.restart')

	startBtn.addEventListener('click', (event) => {
		event.preventDefault()
		screens[0].classList.add('up')
	})

	timeList.addEventListener('click', (event) => {
		if(event.target.classList.contains('time-btn')) {
			time = parseInt(event.target.getAttribute('data-time'))
			screens[1].classList.add('up')
			screens[1].classList.add('up')
			startGame()
		}
	})

	board.addEventListener('click', event => {
		if (event.target.classList.contains('circle')) {
			score++
			event.target.remove()
			createRandomCircle()
		}
	})

	    

	function startGame() {
		setInterval(decreaseTime, 1000)
		createRandomCircle()
		setTime(time)
	}

	function decreaseTime() {
		if (time === 0){
			finishGame()
		} else {
			let current = --time
			if (current < 10) {
				current = `0${current}`
			}
		       setTime(current)
		}
		
	}

	function setTime(value) {
		timeEl.innerHTML = `00:${value}` 
	}


	function finishGame() {
		board.innerHTML = `<h1 class=score>Ваш счёт <span class="primary">${score}</span></h1>
					<h2>Перзагрузка...</h2>`
		
		timeEl.parentNode.classList.add('hide')
		setTimeout(() => {
			document.location.reload()
		}, 2000);
	}

	
	function createRandomCircle() {
		const circle = document.createElement('div')
		const size = getRandomNumber(10, 60)
		const {width, height} = board.getBoundingClientRect()
		const x =  getRandomNumber(0, width - size)
		const y = getRandomNumber(0, height - size)
		circle.classList.add('circle')
		circle.style.width = `${size}px`
		circle.style.height = `${size}px`
		board.append(circle)
		circle.style.top = `${x}px`
		circle.style.left = `${y}px`
		circle.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	}

	function getRandomNumber(min, max) {
		return Math.round(Math.random() * (max - min) + min)
	}

		

}


