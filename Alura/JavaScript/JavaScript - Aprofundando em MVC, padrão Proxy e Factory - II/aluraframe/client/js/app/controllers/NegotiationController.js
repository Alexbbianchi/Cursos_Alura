class NegotiationController{

    constructor() {

        let $ = document.querySelector.bind(document);

        this._inputDate = $('#date');
        this._inputQuantity = $('#quantity');
        this._inputValue = $('#value');
        
        let self = this;

        this._listNegotiations  = new Proxy(new ListNegotiations(), {
            
            get(target, prop, receiver) {
                
                if(['add', 'clearNegotiations'].includes(prop) && typeof(target[prop]) == typeof(Function)) {
                    
                    return function() {
                        
                        console.log(`interceptando ${prop}`);
                        Reflect.apply(target[prop], target, arguments);
                        self._negotiationsView.update(target);
                    }
                }
                
                return Reflect.get(target, prop, receiver);
            }
            
        });

        this._negotiationsView = new NegotiationsView($('#negotiationsView'));
        this._negotiationsView.update(this._listNegotiations);
       
        this._mesage = new Mesage();
        this._mesageView = new MesageView($('#mesageView'));
        this._mesageView.update(this._mesageView);
    }

    /**
     * Adiciona uma negociação na listagem
     * @param {*} event 
     */
    add(event) {

        event.preventDefault();
        this._listNegotiations.add(this.newNegotiation());

        this._mesage.text = 'Negociação adicionada com sucesso';
        this._mesageView.update(this._mesage);
        // this._alertMesage('Negociação adicionada com sucesso');

        this._cleanForm();
    }

    /**
     * Cria uma negociação
     * @returns Nova Negociação
     */
    newNegotiation() {

        return new Negotiation(
            DateHelper.textToDate(this._inputDate.value),
            parseInt(this._inputQuantity.value),
            parseInt(this._inputValue.value),
        );
    }

    clear() {

        this._listNegotiations.clearNegotiations();

        this._mesage.text = 'Negociações apagadas com sucesso';
        this._mesageView.update(this._mesage);
    }

    //#region Private methods

    /**
     * Limpa formulario 
     */
    _cleanForm() {

        this._inputDate.value = '';
        this._inputQuantity.value = '';
        this._inputValue.value = '';

        this._inputDate.focus();
    }

    /**
     * Dispara mensagem de alerta
     * @param {*} mesage 
     * @returns
     */
    _alertMesage(mesage = '') {

        if(!!mesage) {
            this._mesage.text = mesage;
            this._mesageView.update(this._mesage);
            this._alertMesage();
            return;
        }

        setTimeout(() => {
            this._mesage.text = mesage;
            this._mesageView.update(this._mesage);
        }, 2000);
    }

    // var date = new Date(this._inputDate.value.replace(/-/g, ','));
    //#endregion
}