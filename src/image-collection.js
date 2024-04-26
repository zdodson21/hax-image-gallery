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
        this.addEventListener('mouseenter', this.loadContent);
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
                    background-color: rgba(255, 255, 255 , 0.25) // Have to set manual value here instead of DDD, for transparency of only the background of the dialog
                }

                .img-collection-wrapper > .flex-item {
                    width: 568px;
                    height: 568px;
                    border-style: solid;
                    background-color: var(--ddd-theme-default-limestoneGray);
                }

                .top-section {
                    display: flex;
                    justify-content: right;
                    height: 10%;
                }

                .top-section > #close-btn {
                    margin: var(--ddd-spacing-2);
                }

                .bottom-section {
                    display: grid; 
                    grid-template-columns: 36px 1fr 36px; 
                    grid-template-rows: 350px 150px; 
                    gap: 4px 4px; 
                    grid-template-areas: 
                        "left image right"
                        "left description right";
                    margin: var(--ddd-spacing-0) var(--ddd-spacing-2);
                }

                .direction-button {
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
                    text-align: center;
                }

                #right-btn {
                    grid-area: right;
                }

                .display-image > img {
                    width: 80%;
                    border-radius: 25px;
                    object-fit: contain;
                }
            `
        ]
    }

    render() {
        return html`
            <dialog class='img-collection-wrapper'>
                <div class='flex-item'>
                    <div class='top-section'>
                        <button id='close-btn' @click=${this.closeBtnHandler}>&#10007</button>
                    </div>
                    <div class='bottom-section'>
                        <button class='direction-btn' id='left-btn' @click=${this.directionBtnHandler}>&#8592</button>
                        ${this.imageArray.filter((singleObject => singleObject.id == this.startPoint)).map((object) => html`
                            <div class='display-image'>
                                <img src="${object.src}" alt="" class='image'>
                            </div>
                            <div class='display-description'>
                                <p>${object.description}</p>
                                <p>${object.id + 1} / ${this.imageArray.length}</p>
                            </div>
                        `)}
                        <button class='direction-btn' id='right-btn' @click=${this.directionBtnHandler}>&#8594</button>
                    </div>
                </div>
            </dialog>
        `
    }

    loadContent() {
        this.imageArray = document.querySelector('image-collection').value;
    }
    
    closeBtnHandler() {
        this.imageArray = [];
        document.querySelector('image-collection').style.display = 'none';
    }

    directionBtnHandler(e) {
        this.loadContent();
        if (e.target.getAttribute('id') == 'left-btn') {
            console.log('left pressed')
            // this HAS to be moved somewhere else to run after the image is clicked and image-collection opens
            
            console.table(this.imageArray);
            if (this.startPoint > 0) {
                this.startPoint--;
            }
        } else if (e.target.getAttribute('id') == 'right-btn') {
            console.log('right pressed');
            
            if (this.startPoint < this.imageArray.length - 1) {
                this.startPoint++;
            }
        }
        console.log('Current index: ' + this.startPoint);
        this.requestUpdate();
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