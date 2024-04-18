import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import { css, html } from 'lit';
// import { PlayList } from "@lrnwebcomponents/play-list";


/**
 * For use under <hax-image-gallery>
 * https://github.com/elmsln/issues/issues/1946
 * @author {Zach Dodson}
 */


// register globally so we can make sure there is only one
globalThis.imageCollection = globalThis.imageCollection || {};

// request if this exists. This helps invoke the element existing in the dom
// as well as that there is only one of them. That way we can ensure everything
// is rendered through the same modal
globalThis.imageCollection.requestAvailability = () => {
  if (!window.imageCollection.instance) {
    globalThis.imageCollection.instance = document.createElement("image-collection");
    document.body.appendChild(globalThis.imageCollection.instance);
  }
  return globalThis.imageCollection.instance;
};

export const SimpleModalStore = globalThis.imageCollection.requestAvailability();


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
        this.secondaryColor = '--ddd-theme-default-coalyGray'; // utilize ddd; may not work
        this.roundCorner = true;
        this.images = [];
        this.descriptions = [];
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

                :host([roundCorner]) img, :host([roundCorner]) .img-wrapper {
                    border-radius: 25px;
                }

                .img-wrapper:hover {
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

                .media-img {
                    padding: var(--ddd-spacing-1);
                    border-style: solid;
                    border-width: var(--ddd-spacing-5);
                    
                }

                .img-wrapper {
                    padding: var(--ddd-spacing-1);
                    
                    transition: all .3s ease-in;
                }

                .gallery {
                    display: none;
                    z-index: 999999;
                    width: 100%;
                    height: 100%;
                    position: fixed;
                }

                .gallery .top {
                    display: flex;
                    height: 10%;
                }

                .gallery .content {
                    display: flex;
                    height: 70%;
                }

                .gallery .bottom {
                    text-align: center;
                    height: 20%;
                }

            `
        ]
    }

    render() {
        return html`
            <div class='media-image-container' $click=''>
                <div class='img-wrapper' 
                    style='
                        background-color: var(${this.secondaryColor});
                    '>
                    <img src='${this.src}' alt='${this.caption}' class='media-img'
                    style='
                        width: ${this.width}px;
                        background-color: var(${this.secondaryColor});
                        border-color: var(${this.primaryColor});
                    '>
                    </div>
                <p>${this.caption}</p>
            </div>
            <div class='gallery'>
                <div class='top'>
                    <button id='close-btn'>X</button>
                </div>
                <div class='content'>
                    <!-- <button id='left-btn'><</button> -->
                    <!-- play-list stuff will go here, need to learn how to implement -->
                    <!-- <play-list></play-list> -->
                    <img src="https://media1.tenor.com/m/j5rPRPBwSOMAAAAC/cat-smacking-other-cat-cat.gif" alt="" id='sample-to-remove'>
                    <!-- <button id='right-btn'>></button> -->
                </div>
                <div class='bottom'>
                    <p>${this.description}</p>
                </div>
            </div>
        `
    }

    mediaImageClicked() {
        // Makes .gallery visible
        // Transparency so website can still be seen
    }

    mediaImageButtonHandler() {
        // want to write statement that finds the button clicked and finds it's id to identify the function it performs
    }

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
            secondaryColor: { 
                type: String,
                attribute: 'secondary-color',
            },
            roundCorner: {
                type: Boolean,
                attribute: 'round-corner', // for some reason using this name as the attribute does not work
            }
        }
    }
}

globalThis.customElements.define(MediaImage.tag, MediaImage);