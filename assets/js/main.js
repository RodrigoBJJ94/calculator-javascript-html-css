function createCalculator() {
    return {
        display: document.querySelector('.display'),
        start() {
            this.clickButtons();
            this.pressEnter();
        },
        pressEnter() {
            this.display.addEventListener('keyup', event => {
               if (event.keyCode === 13) {
                   this.doCount();
               } 
            })
        },
        clearDisplay() {
            this.display.value = ' ';
        },
        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        },
        doCount() {
            let count = this.display.value;
            try {
                count = eval(count);
                if (!count) {
                    alert('Invalid count!');
                    return;
                }
                this.display.value = count;
            } catch(error) {
                alert('Invalid count!');
                return;
            }
        },
        clickButtons() {
            document.addEventListener('click', event => {
                const element = event.target;
                if (element.classList.contains('button-number')) {
                    this.buttonForDisplay(element.innerText);
                }
                if (element.classList.contains('button-clear')) {
                    this.clearDisplay();
                }
                if (element.classList.contains('button-delete')) {
                    this.deleteOne();
                }
                if (element.classList.contains('button-equal')) {
                    this.doCount();
                }
            });
        },
        buttonForDisplay(value) {
            this.display.value += value;
        }
    };
}
const calculator = createCalculator();
calculator.start();