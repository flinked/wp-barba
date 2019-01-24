import Barba from 'barba.js'
import BarbaHelper from '../helpers/BarbaHelper'

class PageTransition
{
    /**
     * Constructor
     */
    constructor( options )
    {
        this.helper = null
        this.transitionObj = {}
    }

    BarbaConfig() {
        Barba.Pjax.start();
        Barba.Prefetch.init();

        // import help
        this.helper = new BarbaHelper;
        this.helper.settings();
        this.getBaseTransition();

        Barba.Pjax.getTransition = () => {
            let newPageName = Barba.Utils.getCurrentUrl().substr(Barba.Utils.getCurrentUrl().lastIndexOf("/") + 1)
            console.log(newPageName)
            return this.transitionObj.fade;
        };
    }

    getBaseTransition() {
        this.transitionObj.fade = this.helper.fadeTransition()
    }

    init() {
        this.BarbaConfig()
    }
}

export default PageTransition
