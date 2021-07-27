function Calculator() {
    this.display = document.querySelector('.display');
    this.start = () => {
        this.catchClicks();
        this.catchEnter();
    };

    this.catchEnter = () => {
        document.addEventListener('keypress', event => {
            if (event === 13);
            this.equalNumberDisplay();
        });
    };

    this.catchClicks = () => {
        document.addEventListener('click', event => {
            const element = event.target;
            if (element.classList.contains('button-number')) this.addNumberDisplay(element);
            if (element.classList.contains('button-clear')) this.clearNumberDisplay();
            if (element.classList.contains('button-delete')) this.deleteNumberDisplay();
            if (element.classList.contains('button-equal')) this.equalNumberDisplay();
        });
    };

    this.equalNumberDisplay = () => {
        try {
            const count = eval(this.display.value);
            if (!count) {
                alert('Conta!');
                return;
            }
            this.display.value = count;
        } catch (error) {
            alert('\n\nConta inválida!'.toUpperCase());
            return;
        }
    };

    this.addNumberDisplay = element => {
        this.display.value += element.innerText;
        this.display.focus();
    };

    this.clearNumberDisplay = () => this.display.value = '';

    this.deleteNumberDisplay = () => this.display.value = this.display.value.slice(0, -1);
}

const calculator = new Calculator();
calculator.start();