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
                    width: 512px;
                    height: 512px;
                    border-style: solid;
                    background-color: var(--ddd-theme-default-limestoneGray);
                }

                .top-section {
                    display: flex;
                    justify-content: right;
                    height: 10%;
                }

                .top-section > #close-btn {
                    margin: var(--ddd-spacing-2)
                }

                .bottom-section {
                    display: grid; 
                    grid-template-columns: 36px 1fr 36px; 
                    grid-template-rows: 310px 130px; 
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
                }

                #right-btn {
                    grid-area: right;
                }

                .display-image > img {
                    width: 95%;
                    border-radius: 25px;
                    object-fit: contain
                }
            `
        ]
    }

    render() {
        return html`
            <div class='img-collection-wrapper' @focus=${this.loadContent}>
                <div class='flex-item'>
                    <div class='top-section'>
                        <button id='close-btn' @click=${this.closeBtnHandler}>&#10007</button>
                    </div>
                    <div class='bottom-section'>
                        <button class='direction-btn' id='left-btn' @click=${this.directionBtnHandler}>&#8592</button>
                        ${this.imageArray.filter((singleObject => singleObject.id == this.startPoint)).map((object) => html`
                            <div class='display-image'>
                                <img src="${object.src}" alt="">
                            </div>
                            <p class='display-description'>${object.description}</p>
                        `)}
                        <button class='direction-btn' id='right-btn' @click=${this.directionBtnHandler}>&#8594</button>
                    </div>
                </div>
            </div>
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
        if (e.target.getAttribute('id') == 'left-btn') {
            console.log('left pressed')
            // this HAS to be moved somewhere else to run after the image is clicked and image-collection opens
            
            console.table(this.imageArray);
            if (this.startPoint > 0) {
                this.startPoint--;
            }
        } else if (e.target.getAttribute('id') == 'right-btn') {
            console.log('right pressed');
            this.imageArray = document.querySelector('image-collection').value;
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