import { api, LightningElement } from 'lwc';

export default class App extends LightningElement {
    
    @api icon
    @api items

    connectedCallback(){

        //console.dir(this.title)
        
    }
    /* 
    const result = await fetch('/contact')
    console.log(result)
    */
}
