import '@fortawesome/fontawesome-free/js/all';
import './styles/scss/_main.scss';

import TaskItemCheckbox from './js/components/TaskItemCheckbox';
import TaskItemLabel from './js/components/TaskItemLabel';
import TaskItemRemoveButton from './js/components/TaskItemRemoveButton';

// #anchor Locals
const input                         = document.getElementById('user-input');
const addTaskBtn                    = document.getElementById('add-task-btn');
const removeAllCompletedTasksBtn    = document.getElementById('remove-all-btn');
const openTasks                     = document.querySelector('.open-tasks');
const completedTasks                = document.querySelector('.completed-tasks');

// #anchor Event Listeners
input.addEventListener('keypress', addTaskOnKeypressHandler);
addTaskBtn.addEventListener('click', addTaskHandler);
removeAllCompletedTasksBtn.addEventListener('click', removeAllCompletedTasksHandler);

/**
 * #anchor inputValueLength
 * @return  {int}
 */
function inputValueLength()
{
    return input.value.length;
}

/**
 * #anchor addTaskHandler
 */
function addTaskHandler() 
{
    if ( inputValueLength() ) createTask();
}

/**
 * #anchor addTaskOnKeypressHandler
 * @param   {object}    event
 */
function addTaskOnKeypressHandler(event)
{
    if (inputValueLength() && event.keyCode === 13 ) createTask();
}

/**
 * #anchor createTask
 */
function createTask()
{
    const   timestamp               = new Date().getTime(),
            taskItem                = document.createElement('li'),
            
            taskItemCheckbox        = new TaskItemCheckbox,
            taskItemLabel           = new TaskItemLabel(input.value),
            taskItemRemoveButton    = new TaskItemRemoveButton;

    taskItem.id = timestamp;
    taskItem.appendChild( taskItemCheckbox.render() );
    taskItem.appendChild( taskItemLabel.render() );
    taskItem.appendChild( taskItemRemoveButton.render() );

    taskItem.querySelector('.checkbox').addEventListener( 'click', () => checkboxHandler(taskItem.id) );
    taskItem.querySelector('.remove-btn').addEventListener( 'click', () => removeTaskHandler(taskItem.id) );

    openTasks.querySelector('ul').appendChild(taskItem);
    input.value = '';

    checkTaskLists();
}

/**
 * #anchor checkTaskLists
 */
function checkTaskLists()
{
    const taskSections = document.querySelectorAll('.open-tasks, .completed-tasks');

    taskSections.forEach( (section) => {
        if ( section.querySelector('ul').hasChildNodes() ) {
            section.style.display = 'block';
            section.classList.add('has-tasks');
        } else {
            section.removeAttribute('style');
            section.classList.remove('has-tasks');
        }
    });
}

/**
 * #anchor checkboxHandler
 * @param   {string}    taskId 
 */
function checkboxHandler(taskId)
{
    const   taskItem        = document.getElementById(taskId),
            parentSection   = taskItem.closest('section');

    if (parentSection == openTasks) {
        completedTasks.querySelector('ul').appendChild(taskItem);
    } else if (parentSection == completedTasks) {
        openTasks.querySelector('ul').appendChild(taskItem);
    }

    checkTaskLists();
}

/**
 * #anchor removeTaskHandler
 * @param   {string}    taskId 
 * @return  {bool}
 */
function removeTaskHandler(taskId)
{
    const taskItem = document.getElementById(taskId);

    if ( confirm('Are you sure you want to remove this task?') ) {
        taskItem.remove();
        checkTaskLists();

        return true;
    }
}

/**
 * #anchor removeAllCompletedTasksHandler
 * @return  {bool}
 */
function removeAllCompletedTasksHandler()
{
    const   completedTasksList  = completedTasks.querySelector('ul'),
            completedTaskItems  = [...completedTasksList.childNodes];

    if (completedTaskItems.length) {
        if ( confirm('Are you sure you want to remove all completed tasks?') ) {
            completedTaskItems.forEach( taskItem => taskItem.remove() );

            checkTaskLists();

            return true;
        }
    }
}