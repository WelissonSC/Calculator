(() => {

    criaCalculadora = () => {
        return {

            display: document.querySelector('.display'),

            inicia() {
                this.cliqueBtn();
            },

            btnForDisplay(valor) {
                this.display.value += valor;
            },

            btnDelete() {
                this.display.value = this.display.value.slice(0, -1);
            },

            mantemZero() {
                if (this.display.value = ' ') {
                    this.display.value = '0';
                }
                if (this.display.value != ' ') {
                    this.display.value.slice(1);
                }
            },

            calcula() {
                let conta = this.display.value;
                try {
                    conta = eval(conta);
                    if (!conta) {
                        alert('conta Inválida');
                        return;
                    }

                    this.display.value = conta;
                } catch (error) {
                    alert('Conta Inválida');
                    return;
                }
            },

            cliqueBtn() {


                document.addEventListener('click', (event) => {
                    const element = event.target;

                    if (element.classList.contains('btn-num')) {
                        this.btnForDisplay(element.innerText);
                    }

                    if (element.classList.contains('btn-clear')) {
                        this.btnDelete();
                    }

                    if (element.classList.contains('btn-eq')) {
                        this.calcula();
                    }

                    if (element.classList.contains('btn-div')) {
                        this.display.value += '/'
                    }


                    document.addEventListener('keypress', (event) => {
                        if (event.key === 'Enter') {
                            this.calcula();
                        }
                    })
                })
            },

        }

    }

    const calculadora = criaCalculadora();
    calculadora.inicia();
})();

