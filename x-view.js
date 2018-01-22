import XElement from './x-element.js';
export default class XView extends XElement {

    styles() { return ['x-view'] }

    __fromHtml() {
        super.__fromHtml();
        // this.$el.id = this.__tagName.replace('view-', '');
    }

    _onShow() {
        this.animateEntry();
        this.addStyle('x-show');
        if (this.onShow) this.onShow();
    }

    _onHide() {
        document.activeElement.blur();
        this.removeStyle('x-show');
        this.animateExit();
        if (this.onHide) this.onHide();
    }

    animateEntry() {
        this.animate('x-entry-animation');
    }

    animateExit() {
        this.animate('x-exit-animation');
    }
}