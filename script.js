class Converter {
    constructor() {
        const farenheitPlace = document.querySelector('.Farenheit');
        const celciusPlace = document.querySelector('.Celcius');
        const kelvinPlace = document.querySelector('.Kelwin');
        this.farenheitPlace = farenheitPlace;
        this.celciusPlace = celciusPlace;
        this.kelvinPlace = kelvinPlace;
    }
    Farenheit() {
        let celciusSum = (Number(this.farenheitPlace.value) - 32) / 1.8
        celciusSum = celciusSum.toPrecision(4);
        let KelwinSum = Number(celciusSum) + 273.15;
        KelwinSum = KelwinSum.toPrecision(4);
        if (this.farenheitPlace.value == '') {
            this.celciusPlace.value = '';
            this.kelvinPlace.value = '';
        } else {
            this.celciusPlace.value = celciusSum;
            this.kelvinPlace.value = KelwinSum;
        }
    }
    Celcius() {
        let FarenheitSum = (Number(this.celciusPlace.value) * 1.8) + 32;
        let KelwinSum = (Number(this.celciusPlace.value) + 273.15);
        FarenheitSum = FarenheitSum.toPrecision(3);

        if (this.celciusPlace.value == '') {
            this.farenheitPlace.value = '';
            this.kelvinPlace.value = '';
        } else {
            this.farenheitPlace.value = FarenheitSum;
            this.kelvinPlace.value = KelwinSum;
        }

    }
    Kelwin() {
        let celciusSum = (Number(this.kelvinPlace.value) - 273.15);
        let FarenheitSum = (Number(this.kelvinPlace.value) * (9 / 5) - 459.67);
        celciusSum = celciusSum.toPrecision(4)
        FarenheitSum = FarenheitSum.toPrecision(4)
        if (this.kelvinPlace.value == '') {
            this.farenheitPlace.value = '';
            this.celciusPlace.value = '';
        } else {
            this.farenheitPlace.value = FarenheitSum;
            this.celciusPlace.value = celciusSum;
        }
    }

}

const player = new Converter;

player.farenheitPlace.addEventListener('input', () => {
    setInterval(player.Farenheit(), 500);
})
player.celciusPlace.addEventListener('input', () => {
    setInterval(player.Celcius(), 500);
})
player.kelvinPlace.addEventListener('input', () => {
    setInterval(player.Kelwin(), 500);
})