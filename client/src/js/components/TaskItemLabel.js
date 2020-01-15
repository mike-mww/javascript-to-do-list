export default class TaskItemLabel
{

    constructor(string = '')
    {
        this.labelValue = string;
    }

    /**
     * #anchor render
     */
    render()
    {
        const element = document.createElement('label');

        element.setAttribute('class', 'label');
        element.innerText = this.labelValue;

        return element;
    }

}