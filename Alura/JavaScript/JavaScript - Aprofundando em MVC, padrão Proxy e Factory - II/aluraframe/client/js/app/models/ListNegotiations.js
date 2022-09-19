class ListNegotiations {
    
    constructor(trap) {

        this._negotiations = [];
    }

    add(negotiation) {
        
        this._negotiations.push(negotiation);
    }

    get negotiations() {
        
        return [].concat(this._negotiations); //não altera a lista original // encaminha uma cópia
    }

    clearNegotiations() {

        this._negotiations = [];
    }
}