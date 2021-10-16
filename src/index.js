import './style.css';
import Sidebar from './ui/sidebar.js'
import AddTagModal from './ui/addTagModal.js'
import Body from './ui/body.js'
import TaskTags from './ui/editTodoTagsModal.js'

document.body.appendChild(Sidebar.sidebar)
document.body.appendChild(AddTagModal.modal)
document.body.appendChild(Body.body)
document.body.appendChild(TaskTags.modal)