import React, { useRef, useState } from 'react';
import 'bulma/css/bulma.css';

import { TemplatesModel } from '../data/TemplateModel';
import { TemplateModel } from '../data/TemplateModel';
import { TaskModel } from '../data/TemplateModel';

import "../App.css"

interface TaskEleInf {
  task: TaskModel
}

const TaskEle: React.FC<TaskEleInf> = ({ task }) => {

  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleBlur = () => {
    const el = linkRef.current;
    if (el) {
      el.scrollLeft = 0; // 水平滚动回开头（可选）
    }
  };
  return (
    <li className='m-0'>

      <a className="hide-scrollbar" 
      ref={linkRef}
      onBlur={handleBlur}
      style={{
    display: 'inline-block',
    overflow: 'auto',          // 不显示滚动条
    userSelect: 'text',          // 可选中
    cursor: 'text',              // 类似 <input> 的文本选择样式
      }}>{task.name + "xxxxxxxxxxxxxxxxx"}</a>
      {/* <input 
        readOnly 
        className="input is-rounded is-static"
        value={task.name}
      /> */}
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
  }

  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleBlur = () => {
    const el = linkRef.current;
    if (el) {
      el.scrollLeft = 0; // 水平滚动回开头（可选）
    }
  };

  return (
    <li >
      <a onClick={onClick} className="hide-scrollbar" 
              ref={linkRef}
              onBlur={handleBlur}
      style={{
    display: 'inline-block',
    overflow: 'auto',          // 不显示滚动条
    userSelect: 'text',          // 可选中
    cursor: 'text',              // 类似 <input> 的文本选择样式
  }}><strong>{template.name}</strong></a>
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
      <div className='has-text-black'>
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