import React, { useRef, useState } from 'react';
import 'bulma/css/bulma.css';

import { TemplatesModel } from '../data/TemplateModel';
import { TemplateModel } from '../data/TemplateModel';
import { TaskModel } from '../data/TemplateModel';

import "./TemplateTaskMenu.css"

interface TaskEleInf {
  task: TaskModel
}

const TaskEle: React.FC<TaskEleInf> = ({ task }) => {

  const linkRef = useRef<HTMLDivElement>(null);

  const handleBlur = () => {
    const e = linkRef.current;
    if (e) {
      e.scrollLeft = 0;
    }
  };

  const onClick = () => {
        const selection = window.getSelection();
        const selectedText = selection?.toString().trim();

    if (selectedText) {
      const el = linkRef.current;
      if (el) {
        el.scrollLeft = 0;
      }
    }
  }

  return (
    <li className='m-0'>
      <div 
        tabIndex={0}
        ref={linkRef}
        onBlur={handleBlur} 
        onClick={onClick}
        className="line-div hide-scrollbar" 
        style={{
          // width: "100%",
          // display: 'inline-block',
          overflow: 'scroll',
          // whiteSpace: 'nowrap',
          // userSelect: 'text',
          // cursor: 'text',
      }}
      ><div   style={{}}>{task.name}</div></div>
    </li>
  )
}

interface TemplateEleInf {
  template: TemplateModel
}

const TemplateEle: React.FC<TemplateEleInf> = ({ template }) => {
  const [ expand, setExpand ] = useState(false)

  const onClick = () => {
        const selection = window.getSelection();
        const selectedText = selection?.toString().trim();

    if (!selectedText) {
      setExpand(!expand)
    }
    else {
      const el = linkRef.current;
      if (el) {
        el.scrollLeft = 0;
      }
    }
  }

  const linkRef = useRef<HTMLDivElement>(null);

  const handleBlur = () => {
    const el = linkRef.current;
    if (el) {
      el.scrollLeft = 0;
    }
  };


  return (
    <li >
      <div 
        tabIndex={0}
      onClick={onClick} 
              ref={linkRef}
              onBlur={handleBlur}
      className="hide-scrollbar line-div" 
        style={{
          // width: "100%",
          // display: 'inline-block',
          overflow: 'scroll',
          // whiteSpace: 'nowrap',
          // userSelect: 'text',
          // cursor: 'text',
      }}
  >
    <strong>{template.name}</strong></div>
      {
        expand &&
        <ul>
          { 
            template.taskList.map(
              (item, i) => (<TaskEle task={item}/>)
            )
          }
        </ul>
      }
    </li>
  )
}

interface TemplateInf {
  templatesInfo: TemplatesModel
}

const TemplateTaskMenu: React.FC<TemplateInf> = ({ templatesInfo }) => {
  const templates = Object.entries(templatesInfo.templates).sort(
    (a, b) => new Date(b[1].date).getTime() - new Date(a[1].date).getTime()
  );
    return (
      <div>
        <p className="menu-label"><strong>TEMPLATES AND TASKS</strong></p>
        <ul className="menu-list scroll-box" style={{overflowY: "auto", overflowX: "hidden", maxHeight: '500px'}}>
          {
            templates.map(
              (item, i) => (<TemplateEle template={item[1]}/>)
            )
          }
        </ul>
      </div>
    )
};

export default TemplateTaskMenu;