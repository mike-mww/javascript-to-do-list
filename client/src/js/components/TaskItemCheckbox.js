export default class TaskItemCheckbox 
{

    /**
     * #anchor render
     */    
    render()
    {
        const element = document.createElement('div');

        element.setAttribute('class', 'checkbox-wrap');
        element.appendChild( this._checkboxInputElement() );
        element.appendChild( this._fauxCheckboxElement() );
    
        return element;
    }

    /**
     * #anchor _checkboxInputElement
     * @private
     */
    _checkboxInputElement()
    {
        const element = document.createElement('input');
    
        element.setAttribute('type', 'checkbox');
        element.setAttribute('class', 'checkbox');
    
        return element;
    }

    /**
     * #anchor _fauxCheckboxElement
     * @private
     */
    _fauxCheckboxElement() 
    {
        const element = document.createElement('span');
    
        element.setAttribute('class', 'faux-checkbox');
    
        return element;
    }

}