var AllCar = null

const getAllCar = () => {
    fetch('/getcars')
        .then((response) => response.json())
        .then((hasil) => {
            const body = document.getElementById('body')
            for (let i = 0; i < hasil.length; i++) {
                const Car = document.createElement('div')
                Car.innerHTML = `<div style="background-color: green;margin-bottom: 30px;text-align: center;">
                <h1>${hasil[i].manufacture} ${hasil[i].model} - ${hasil[i].year}</h1>
                <img
                class="car_image"
                    src="./asset/${i %2 ==0 ? 'menu2': 'menu1'}.png"
                />
                <p style="text-align: center;color: aliceblue; font-size: 20px;">${hasil[i].description}</p>
                </div>`

                body.appendChild(Car)
                
            }
            AllCar = hasil
        })
}

getAllCar()

const filterCar = (char) => {

    let newCar = AllCar.filter(car => car.manufacture.toLowerCase().includes(char) && car.available == true);
    const body = document.getElementById('body')
    body.innerHTML = ''
            newCar.forEach((element, id) => {
                const Car = document.createElement('div')
                Car.innerHTML = `<div style="background-color: green;margin-bottom: 30px;text-align: center;">
                <h1>${element.manufacture} ${element.model} - ${element.year}</h1>
                <img
                class="car_image"
                    src="./asset/${id %2 ==0 ? 'menu2': 'menu1'}.png"
                />
                <p style="text-align: center;color: aliceblue; font-size: 20px;">${element.description}</p>
                </div>`

                body.appendChild(Car)
            });
}





