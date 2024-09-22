import JewelryPage from "./JewelryPage";

class StartSeite { 

//Elements 

 get openGewerly (){ 

    // return cy.get('.top-menu > :nth-child(6) > a')
    // return cy.get('.top-menu').find('[href="/jewelry"]')
    return cy.get('.top-menu').children().eq(5)
}


// Methods 

clickOnJewelry(){ 
    this.openGewerly.click();
    return JewelryPage; 
}

}

export default StartSeite;