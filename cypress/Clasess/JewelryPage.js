class JewelryPage { 

// Elements 

get displayPerPage(){ 

    return cy.get('#products-pagesize')

}

get viewAs(){

    return cy.get('[name="products-viewmode"]')
}

get AddToCart(){ 

    return  cy.get(':nth-child(2) > .product-item > .details > .add-info > .buttons > .button-2')
}

get AddToCartMessage(){ 

    return cy.get('.content') 
}





//Methods 

selectDisplayPerPage(){ 

    this.displayPerPage.select('12')
    return this 
} 

changeViewAsList(){ 


    this.viewAs.select('List')
    return this 
} 

clickOnAddToCart(){ 

    this.AddToCart.click(); 

}

assertOnAddToCartMessage(){ 

    this.AddToCartMessage.should('contain', 'The product has been added to your ')

}

}       

export default JewelryPage; 