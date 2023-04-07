const Page = require('./page');

class LandingPage extends Page{ 
    get modalAcceptButton() {
        return $('[id="onetrust-accept-btn-handler"]');
      }

    get menuButton() {
        return $('#sitenav-sidenav-toggle > em');
    }
 
    get buyButton() {
      return $("[aria-controls=links-menu0-content]");
    }
  
    get ownButton() {
      return $("[aria-controls=links-menu1-content]");
    }
  
    get aboutButton() {
      return $("[aria-controls=links-menu2-content]");
    }
  
    get exploreButton() {
      return $("[aria-controls=links-menu3-content]");
    }
  
    get moreButton() {
      return $("[aria-controls=links-menu4-content]");
    }

    get menuCloseButton() {
      return $('[data-autoid="nav:siteNavCloseIcon"]');
    }
  
  }
  
  module.exports = new LandingPage();
  