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
        this.width = 512;
        this.caption = '';
        this.primaryColor = '--ddd-theme-default-original87Pink'; // utilize ddd
        this.secondaryColor = '--ddd-theme-default-coalyGray'; // utilize ddd
    }

    static get styles() {
        return [ 
            super.styles,
            css`
                /*               
                CSS is based around variables / standards of 'Design, Develop, Destroy' (DDD). Styleguide for DDD can be found at the link below:

                https://oer.hax.psu.edu/bto108/sites/haxcellence/documentation/ddd 
                */

                /* .media-img {
                    width: 512px;
                } */

                :host([roundCorner = true]) img {
                    border-radius: 25px;
                }

                /* how can I incorporate constructor variables into CSS???*/
            `
        ]
    }

    render() {
        return html`
            <img src='${this.src}' alt='${this.alt}' class='media-img' 
            style='
                width: ${this.width}px;
                border-style: solid;
                border-color: var(${this.primaryColor});
                
            '>
        `
    }

    // make methods for adding classes based on attributes, such as width, height, and colors

    static get properties() {
        return {
            ...super.properties,
            src: { type: String },
            alt: { type: String },
            width: { type: Number },
            caption: { type: String },
            primaryColor: { 
                type: String,
                attribute: 'primary-color',
            },
            secondaryColor: { 
                type: String,
                attribute: 'secondary-color',
            },
            roundCorner: {
                type: Boolean,
                attribute: 'round-corner',
                reflect: false,
            }
        }
    }
}

globalThis.customElements.define(MediaImage.tag, MediaImage);