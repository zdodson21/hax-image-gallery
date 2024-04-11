import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import { css, html } from 'lit';

/**
 * https://github.com/elmsln/issues/issues/1946
 * @author {Zach Dodson}
 */

export class ImageGallery extends DDD {
    
    static get tag() {
        return 'image-gallery';
    }

    constructor() {
        super();
        this.images = [];
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
        return html`
            <slot></slot>
        `
    }

    collectMediaImages() {
        
    }

    static get properties() {
        return {
            ...super.properties,
        }
    }
}

globalThis.customElements.define(ImageGallery.tag, ImageGallery);