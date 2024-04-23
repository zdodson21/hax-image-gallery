import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import { css, html } from 'lit';


export class ImageCollection extends DDD {

    static get tag() {
        return 'image-collection';
    }

    constructor() {
        super();
        this.imageArray = [];
        this.startPoint = 0;
    }

    static get styles() {
        return [
            super.styles,
            css`
                .img-collection-wrapper {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                    backdrop-filter: blur(10px);
                }

                .img-collection-wrapper > .flex-item {
                    width: 50%;
                    height: 50%;
                    border-style: solid;
                    background-color: var(--ddd-theme-default-limestoneGray);
                }

                .top-section {
                    display: flex;
                    justify-content: right;
                }

                .top-section > #close-btn {
                    margin: var(--ddd-spacing-2)
                }

                .bottom-section {
                    display: grid; 
                    grid-template-columns: 36px 1fr 36px; 
                    grid-template-rows: 0.7fr 0.3fr; 
                    gap: 4px 4px; 
                    grid-template-areas: 
                        "left image right"
                        "left description right";
                    margin: var(--ddd-spacing-0) var(--ddd-spacing-2);
                    height: 90%;
                }

                #left-btn {
                    grid-area: left;
                }

                .display-image {
                    grid-area: image;
                    display: flex;
                    justify-content: center;
                    align-items: center; 
                }

                .display-description {
                    grid-area: description;
                }

                #right-btn {
                    grid-area: right;
                }

                .display-image > img {
                    width: 95%;
                    border-radius: 25px;
                }
            `
        ]
    }

    render() {
        return html`
            <div class='img-collection-wrapper'>
                <div class='flex-item'>
                    <div class='top-section'>
                        <button id='close-btn' @click=${this.closeBtnHandler}>&#10007</button>
                    </div>
                    <div class='bottom-section'>
                        <button class='direction-btn' id='left-btn' @click=${this.directionBtnHandler}>&#8592</button>
                        <div class='display-image'>
                            <img src="https://content.imageresizer.com/images/memes/Kirby-on-chair-meme-10.jpg" alt="">
                        </div>
                        <p class='display-description'>Me constantly when the code doesn't do the thing</p>
                        <button class='direction-btn' id='right-btn' @click=${this.directionBtnHandler}>&#8594</button>
                    </div>
                </div>
            </div>
        `
    }

    closeBtnHandler() {
        this.imageArray = [];
        document.querySelector('image-collection').style.display = 'none';
    }

    directionBtnHandler(e) {
        if (e.target.getAttribute('id') == 'left-btn') {
            console.log('left pressed')
            // this HAS to be moved somewhere else to run after the image is clicked and image-collection opens
            this.imageArray = document.querySelector('image-collection').value;
            console.table(this.imageArray);
            this.startPoint--;
        } else if (e.target.getAttribute('id') == 'right-btn') {
            console.log('right pressed');
            this.startPoint++;
        }
        console.log('Current index: ' + this.startPoint);
    }

    

    static get properties() {
        return {
            ...super.properties,
            imageArray: {
                type: Array,
                attribute: 'image-array',
            },
            startPoint: {
                type: Number,
                attribute: 'start-point',
            },
        }
    }
}

globalThis.customElements.define(ImageCollection.tag, ImageCollection);