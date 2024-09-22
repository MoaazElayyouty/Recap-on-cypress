import HauptSeite from "../Clasess/HauptSeite";
import JewelryPage from "../Clasess/JewelryPage";
import StartSeite from "../Clasess/StartSeite";

const BasePage = new HauptSeite();
const MainPage = new StartSeite();
const Jewelry = new JewelryPage();

describe('Ungültige Registrierung', () => {

    it.skip('Testfall für Registrierung mit bereits registriertem Benutzer', { tags: '@Regression' }, () => {


            // BasePage.ungültigRegister(); 

            BasePage.login(); 
            let username ="z123achil2les43881@haanhwedding.com"; 
            cy.get("div[class='header-links'] a[class='account']").then( (user)=>{ 
            let actname = user.text()
            expect(actname).to.equal(username); 
            })

           let carqty=9; 
           cy.get(".cart-qty").then( (zahl)=> { 
           let actzahl = zahl.text(); 
           expect(actzahl).to.equal(carqty); 

           })
        
    });


});