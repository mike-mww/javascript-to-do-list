export default class TaskItemRemoveButton 
{

    /**
     * #anchor render
     */
    render()
    {
        const   wrapper = document.createElement('div'),
                button  = document.createElement('button');
    
        button.setAttribute('class', 'remove-btn');
        button.innerHTML = '<i class="fas fa-times icon"></i>';
    
        wrapper.setAttribute('class', 'button-wrap');
        wrapper.appendChild(button);
    
        return wrapper;
    }

}