export default class TpUl extends HTMLUListElement {
    constructor() {
        super();

        this.showUl = this.showUl.bind(this)

        const uls = Array.from(this.querySelectorAll('ul'));
        const lis = Array.from(this.querySelectorAll('li'));

        uls.forEach(ul => {
            ul.style.display = 'none';
        });

        // <li>Hi</li> => <li><span>Hi</span></li>
        lis.forEach(li => {
            if (li.querySelectorAll('ul').length > 0) {
              li.setAttribute('class', 'closed');
      
              const childText = li.childNodes[0];
              const newSpan = document.createElement('span');
      
              newSpan.textContent = childText.textContent;
              newSpan.style.cursor = 'pointer';
              
              newSpan.onclick = this.showUl;
              
              childText.parentNode.insertBefore(newSpan, childText);
              childText.parentNode.removeChild(childText);
            }
          });
    }

    showUl(event) {
        const nextUl = event.target.nextElementSibling;
    
        if (nextUl.style.display == 'block') {
            nextUl.style.display = 'none';
            nextUl.parentNode.setAttribute('class', 'closed');
        } else {
            nextUl.style.display = 'block';
            nextUl.parentNode.setAttribute('class', 'open');
        }
      };

}