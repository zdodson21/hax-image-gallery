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
        this.width = 512;
        this.caption = '';
        this.description = ''
        this.primaryColor = '--ddd-theme-default-original87Pink'; // utilize ddd
        // this.secondaryColor = '--ddd-theme-default-coalyGray'; // utilize ddd; may not work
        this.roundCorner = true;
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

                :host([roundCorner]) img {
                    border-radius: 25px;
                }

                img:hover {
                    transform: translate(8px,-8px);
                    box-shadow: -8px 8px var(--ddd-theme-default-coalyGray);
                }

                .media-image-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                }

                

                /* how can I incorporate constructor variables into CSS???*/
            `
        ]
    }

    render() {
        return html`
            <div class='media-image-container'>
                <img src='${this.src}' alt='${this.caption}' class='media-img' 
                style='
                    width: ${this.width}px;
                    border-style: solid;
                    border-width: thick;
                    border-color: var(${this.primaryColor});
                    transition: all .3s ease-in;
                '>
                <p>${this.caption}</p>
            </div>
        `
    }

    // make methods for adding classes based on attributes, such as width, height, and colors

    static get properties() {
        return {
            ...super.properties,
            src: { type: String },
            width: { type: Number },
            caption: { type: String },
            description: { type: String },
            primaryColor: { 
                type: String,
                attribute: 'primary-color',
            },
            // secondaryColor: { 
            //     type: String,
            //     attribute: 'secondary-color',
            // },
            roundCorner: {
                type: Boolean,
                attribute: 'round-corner', // for some reason using this name as the attribute does not work
            }
        }
    }
}

globalThis.customElements.define(MediaImage.tag, MediaImage);