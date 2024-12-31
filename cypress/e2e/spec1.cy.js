import HauptSeite from "../Clasess/HauptSeite";
import JewelryPage from "../Clasess/JewelryPage"; 
import StartSeite from "../Clasess/StartSeite";

// Initialisierung der Klasseninstanzen
const BasePage = new HauptSeite();
const MainPage = new StartSeite();
const Jewelry = new JewelryPage();

// Test Suite für Register und Invalid Register
describe("Valid register and invalid register to test the testcase ", () => {


  //Testfall für eine erfolgreiche Bestellung von Schmuck
  it('Ordering a Jjewelry successfully', { tags: "@Smoke" }, function() {
    BasePage.gültigeRegistirierung();
  });

  // Testfall für Registrierung mit bereits registriertem Benutzer
  it('User registers with already already registered User', { tags: '@Smoke' }, () => {
    BasePage.ungültigeRegistrierung();
  });



 
});

// Test Suite für das Hinzufügen mehrerer Produkte in den Warenkorb
describe('Der Kunde darf mehr als ein Produkt im Warenkorb hinzufügen', function() {
  // Vor jedem Testfall wird der Benutzer eingeloggt
  beforeEach(() => {
    BasePage.login();
  });

  // Testfall für das Hinzufügen eines Produkts zum Warenkorb
  it('Der Kunde fügt zuerst ein Produkt hinzu', { tags: '@Regression' }, () => {
    MainPage.clickOnJewelry();

    Jewelry.selectDisplayPerPage()
    Jewelry.changeViewAsList()
    Jewelry.clickOnAddToCart()
    Jewelry.assertOnAddToCartMessage();
  });

  // Nach jedem Testfall könnte der Benutzer ausgeloggt werden
  afterEach(() => {
    BasePage.logout();
  });
});


