import React, { useRef, useState } from 'react';
import 'bulma/css/bulma.css';

import { TemplatesModel } from '../data/TemplateModel';
import { TemplateModel } from '../data/TemplateModel';
import { TaskModel } from '../data/TemplateModel';

interface TaskEleInf {
  task: TaskModel
}

const TaskEle: React.FC<TaskEleInf> = ({ task }) => {
  return (
    <li>
      <input 
        readOnly 
        className="custom-input p-1 m-1 is-size-7 has-text-weight-medium "
        onFocus={(e) => {
          e.currentTarget.style.outline = 'none';
          e.currentTarget.style.boxShadow = 'none';
        }}
        style={{
          fontWeight: 'bold',
          border: 'none',
          boxShadow: 'none'
          }} 
        value={task.name}
      />
    </li>
  )
}

interface TemplateEleInf {
  template: TemplateModel
}

const TemplateEle: React.FC<TemplateEleInf> = ({ template }) => {
  const [ expand, setExpand ] = useState(false)
  const textRef = useRef(template.name);
  textRef.current = template.name

  const onClick = () => {
    setExpand(!expand)
  }

  return (
    <li>
      <input 
        readOnly
        onClick={onClick}
        className="custom-input p-1 m-1 is-size-7 has-text-weight-medium"
        onFocus={(e) => {
          e.currentTarget.style.outline = 'none';
          e.currentTarget.style.boxShadow = 'none';
        }}
        style={{
          fontWeight: 'bold', border: 'none', boxShadow: 'none'
        }}
        value={textRef.current}
      />
      {/* <ul>
        {
          expand && template.taskList.map(
            (item, i) => (<TaskEle task={item}/>)
          )
        }
      </ul> */}
    </li>
  )
}

interface TemplateInf {
  templateDict: TemplatesModel
}

const TemplateTaskMenu: React.FC<TemplateInf> = ({ templateDict }) => {
  const templates = Object.entries(templateDict).sort(
    (a, b) => new Date(b[1].date).getTime() - new Date(a[1].date).getTime()
  );
    return (
      <div>
        <p className="menu-label"><strong className="has-text-danger-dark">TEMPLATES AND TASKS</strong></p>
        <ul className="menu-list scroll-box ulx" style={{overflowY: "auto", overflowX: "hidden", maxHeight: '500px'}}>
          {/* {
            templates.map(
              (item, i) => (<TemplateEle template={item[1]}/>)
            )
          } */}
          <TemplateEle template={templates[0][1]}/>
        </ul>
      </div>
    )
};

export default TemplateTaskMenu;