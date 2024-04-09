import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import { css, html } from 'lit';

/**
 * https://github.com/elmsln/issues/issues/1946
 * @author {Zach Dodson}
 */

export class HaxImageGallery extends DDD {
    
    static get tag() {
        return 'hax-image-gallery';
    }

    constructor() {
        super();
    }

    static get styles() {
        return [ 
            super.styles,
            css`
                /*               
                CSS is based around variables / standards of 'Design, Develop, Destroy' (DDD). Styleguide for DDD can be found at the link below:

                https://oer.hax.psu.edu/bto108/sites/haxcellence/documentation/ddd 
                */


            `
        ]
    }

    render() {
        
    }

    static get properties() {
        return {
            ...super.properties,
        }
    }
}

globalThis.customElements.define(HaxImageGallery.tag, HaxImageGallery);