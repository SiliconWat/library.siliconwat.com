const KEYCODE = {
    SPACE: 32,
  };

  const template = document.createElement('template');

  template.innerHTML = `
    <style>
      :host {
        display: inline-block;
        background: url('../images/unchecked-checkbox.svg') no-repeat;
        background-size: contain;
        width: 24px;
        height: 24px;
      }
      :host([hidden]) {
        display: none;
      }
      :host([checked]) {
        background: url('../images/checked-checkbox.svg') no-repeat;
        background-size: contain;
      }
      :host([disabled]) {
        background:
          url('../images/unchecked-checkbox-disabled.svg') no-repeat;
        background-size: contain;
      }
      :host([checked][disabled]) {
        background:
          url('../images/checked-checkbox-disabled.svg') no-repeat;
        background-size: contain;
      }
    </style>
  `;