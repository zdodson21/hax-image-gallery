import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import { css, html } from 'lit';
// import '@lrnwebcomponents/play-list/play-list.js';


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
  // maybe use this to make the playlist tag???

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
        this.imageData = [];
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
                    /* box-shadow:  */
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

                image-collection {
                    display: none;
                    z-index: 999999;
                    /* width: 100%; */
                    /* height: 100%; */
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                }

                .gallery .top {
                    display: flex;
                    /* height: 10%; */
                }

                .gallery .content {
                    display: flex;
                    /* height: 70%; */
                }

                .gallery .bottom {
                    text-align: center;
                    /* height: 20%; */
                }

            `
        ]
    }

    render() {
        return html`
            <div class='media-image-container' @click=${this.imageCollector}>
                <div class='img-wrapper' style='background-color: var(${this.secondaryColor}); color: var(${this.secondaryColor});' @mouseover=${this.hoverImage} @mouseout=${this.leaveImage}>
                    <img src='${this.src}' alt='${this.caption}' class='media-img' @click=${this.mediaImageClicked}
                    style='
                        width: ${this.width}px;
                        background-color: var(${this.secondaryColor});
                        border-color: var(${this.primaryColor});
                    '>
                    </div>
                <p>${this.caption}</p>
            </div>
            <!-- <div class='gallery'>
                <div class='top'>
                    <button id='close-btn' @click=${this.closeButtonHandler}>X</button>
                </div>
                <div class='content'>
                    <button id='left-btn'><</button>
                
                    <div class='images'>
                        <img src="https://media1.tenor.com/m/j5rPRPBwSOMAAAAC/cat-smacking-other-cat-cat.gif" alt="" id='sample-to-remove'>
                    </div>
                    <button id='right-btn'>></button>
                </div>
                <div class='bottom'>
                    <p>${this.description}</p>
                </div>
            </div> -->
        `
    }

    hoverImage() {
        this.shadowRoot.querySelector('.img-wrapper').style.boxShadow = "-8px 8px";
    }

    leaveImage() {
        this.shadowRoot.querySelector('.img-wrapper').style.boxShadow = null;
    }

    imageCollector(e) {
        const mediaImage = document.querySelectorAll('media-image');
        let clickedElement = 0;
        // let imgID = 0;
        let foundDesc;

        this.imageData = [];

        mediaImage.forEach((element) => {
            if (e.target.getAttribute('src') == element.getAttribute('src')) {
                console.log('Clicked element: ' + clickedElement)
            } else {
                clickedElement++;
            }
        })

        console.log();

        mediaImage.forEach((element) => {
            const source = element.getAttribute('src');
            const caption = element.getAttribute('caption');
            const description = element.getAttribute('description');
            
            if (description == null) { // if the description attribute is not set, then the playlistItem object will grab the caption instead
                foundDesc = caption;
            } else {
                foundDesc = description;
            }
            
            const playlistItem = {
                src: source,
                description: foundDesc,
                // id: imgID,
            }
            this.imageData.push(playlistItem)
            // imgID++;
        })

        console.table(this.imageData);
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