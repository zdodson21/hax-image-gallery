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
        this.caption = '';
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
            <img src='${this.src}' alt='${this.alt}' class='media-img'>
        `
    }

    // make methods for adding classes based on attributes, such as width, height, and colors

    static get properties() {
        return {
            ...super.properties,
            src: { type: String },
            alt: { type: String },
            caption: { type: String },
            width: { type: Number },
            height: { type: Number },
            primaryColor: { type: String },
            secondaryColor: { type: String },
        }
    }
}

globalThis.customElements.define(MediaImage.tag, MediaImage);