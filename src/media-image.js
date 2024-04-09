import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import { css, html } from 'lit';

/**
 * For use under <hax-image-gallery>
 * https://github.com/elmsln/issues/issues/1946
 * @author {Zach Dodson}
 */

export class MediaImage extends DDD {
    
    static get tag() {
        return 'media-image';
    }

    constructor() {
        super();
        this.src = '';
        this.alt = '';
        this.width = '';
        this.height = '';
        this.primaryColor = '';
        this.secondaryColor = '';
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
            <img src="${this.src}" alt="${this.alt}" class='media-img'>
        `
    }

    static get properties() {
        return {
            ...super.properties,
            src: { String },
            alt: { String },
            width: { Number },
            height: { Number },
            primaryColor: { String },
            secondaryColor: { String },
        }
    }
}