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

            colocaPercente() {

            },

            calculaPercent() {
                //console.log(valor);
                let percente = this.display.value.slice(0, -6);
                let valor = this.display.value.slice(-1);
                let resul = (percente * valor) / 100;
                this.display.value = resul;
            },

            mantemZero() {
                this.display.value = '0';
            },

            calcula() {
                let conta = this.display.value;

                try {
                    if (this.display.value.slice(-3, -2) === 'x') {
                       this.calculaPercent();
                       return;
                   };
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

                    if (element.classList.contains('btn-perc')) {
                        this.display.value += ' % x ';
                    }

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

