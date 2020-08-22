const KEYCODE = {
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    HOME: 36,
    END: 35,
  };

  const template = document.createElement('template');
  template.innerHTML = `
    <style>
      :host {
        display: flex;
        flex-wrap: wrap;
      }
      ::slotted(sw-panel) {
        flex-basis: 100%;
      }
    </style>
    <slot name="tab"></slot>
    <slot name="panel"></slot>
  `;

  export class SwTabs extends HTMLElement {
    constructor() {
        super();

        this._onSlotChange = this._onSlotChange.bind(this);

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this._tabSlot = this.shadowRoot.querySelector('slot[name=tab]');
        this._panelSlot = this.shadowRoot.querySelector('slot[name=panel]');

        this._tabSlot.addEventListener('slotchange', this._onSlotChange);
        this._panelSlot.addEventListener('slotchange', this._onSlotChange);
    }

    connectedCallback() {
        this.addEventListener('keydown', this._onKeyDown);
        this.addEventListener('click', this._onClick);

        if (!this.hasAttribute('role'))
            this.setAttribute('role', 'tablist');
 
        /*Promise.all([
            customElements.whenDefined('sw-tab'),
            customElements.whenDefined('sw-panel'),
        ])
        .then(_ => this._linkPanels()); */
    }

    disconnectedCallback() {
        this.removeEventListener('keydown', this._onKeyDown);
        this.removeEventListener('click', this._onClick);
      }

      _onSlotChange() {
        this._linkPanels();
      }

      _linkPanels() {
        const tabs = this._allTabs();

        tabs.forEach(tab => {
            const panel = tab.nextElementSibling;
            if (panel.tagName.toLowerCase() !== 'sw-panel') {
              console.error(`Tab #${tab.id} is not a` +
                `sibling of a <sw-panel>`);
              return;
            }
    
            tab.setAttribute('aria-controls', panel.id);
            panel.setAttribute('aria-labelledby', tab.id);
          });

          const selectedTab = tabs.find(tab => tab.selected) || tabs[0];

          this._selectTab(selectedTab);

      }

      _allTabs() {
        return Array.from(this.querySelectorAll('sw-tab'));
      }

      _allPanels() {
        return Array.from(this.querySelectorAll('sw-panel'));
      }

      _selectTab(newTab) {
        this.reset();
        const newPanel = this._panelForTab(newTab);

        if (!newPanel)
        throw new Error(`No panel with id ${newPanelId}`);

      newTab.selected = true;
      newPanel.hidden = false;
      newTab.focus();
    }

    _panelForTab(tab) {
        const panelId = tab.getAttribute('aria-controls');
        return this.querySelector(`#${panelId}`);
      }

      reset() {
        const tabs = this._allTabs();
        const panels = this._allPanels();
  
        tabs.forEach(tab => tab.selected = false);
        panels.forEach(panel => panel.hidden = true);
      }

/////

_prevTab() {
    const tabs = this._allTabs();
    let newIdx = tabs.findIndex(tab => tab.selected) - 1;

    return tabs[(newIdx + tabs.length) % tabs.length];
    }

    _nextTab() {
        const tabs = this._allTabs();
        let newIdx = tabs.findIndex(tab => tab.selected) + 1;
        return tabs[newIdx % tabs.length];
      }

    _firstTab() {
        const tabs = this._allTabs();
        return tabs[0];
      }

      _lastTab() {
        const tabs = this._allTabs();
        return tabs[tabs.length - 1];
      }

      //////////

      _onKeyDown(event) {
        if (event.target.getAttribute('role') !== 'tab')
        return;

        if (event.altKey)
        return;

        let newTab;
      switch (event.keyCode) {
        case KEYCODE.LEFT:
        case KEYCODE.UP:
          newTab = this._prevTab();
          break;

        case KEYCODE.RIGHT:
        case KEYCODE.DOWN:
          newTab = this._nextTab();
          break;

        case KEYCODE.HOME:
          newTab = this._firstTab();
          break;

        case KEYCODE.END:
          newTab = this._lastTab();
          break;
        default:
          return;
      }

      event.preventDefault();

      this._selectTab(newTab);
    }

    _onClick(event) {
        if (event.target.getAttribute('role') !== 'tab')
        return;

        this._selectTab(event.target);
    }
  }

//////////////

let swTabCounter = 0;

export class SwTab extends HTMLElement {
    static get observedAttributes() {
      return ['selected'];
    }

    constructor() {
      super();
    }

    connectedCallback() {
        this.setAttribute('role', 'tab');
      if (!this.id)
        this.id = `sw-tab-generated-${swTabCounter++}`;

        this.setAttribute('aria-selected', 'false');
      this.setAttribute('tabindex', -1);
      this._upgradeProperty('selected');
    }

    _upgradeProperty(prop) {
        if (this.hasOwnProperty(prop)) {
          let value = this[prop];
          delete this[prop];
          this[prop] = value;
        }
      }

      attributeChangedCallback() {
        const value = this.hasAttribute('selected');
        this.setAttribute('aria-selected', value);
        this.setAttribute('tabindex', value ? 0 : -1);
      }
  
      set selected(value) {
        value = Boolean(value);
        if (value)
          this.setAttribute('selected', '');
        else
          this.removeAttribute('selected');
      }
  
      get selected() {
        return this.hasAttribute('selected');
      }
    }

    /////

    let swPanelCounter = 0;

    export class SwPanel extends HTMLElement {
        constructor() {
          super();
        }
    
        connectedCallback() {
          this.setAttribute('role', 'tabpanel');
          if (!this.id)
            this.id = `sw-panel-generated-${swPanelCounter++}`;
        }
      }
