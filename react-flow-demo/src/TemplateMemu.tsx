import React, { useState } from 'react';

interface TemplateTaskEle {
  templateName: string;
  taskList: string[];
}

type TemplateTaskList = TemplateTaskEle[]

const TemplateMenu: React.FC<TemplateTaskList> = (templateList:TemplateTaskList) => {

  const [templateDropDownFlag, setTemplateDropDownFlag] = useState(false);
  const [taskDropDownFlag, setTaskDropDownFlag] = useState(false);

  return (
        <div className="dropdown is-active">
  <div className="dropdown-trigger">
    <div className="memu" aria-haspopup="true" aria-controls="dropdown-menu">
      <span>Dropdown button</span>
      <span className="icon is-small">
        <i className="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </div>
  </div>
  <div className="dropdown-menu" id="dropdown-menu" role="menu">
    <div className="dropdown-content">
      <a href="#" className="dropdown-item"> Dropdown item </a>
      <a className="dropdown-item"> Other dropdown item </a>
      <a href="#" className="dropdown-item is-active"> Active dropdown item </a>
      <a href="#" className="dropdown-item"> Other dropdown item </a>
      <hr className="dropdown-divider" />
      <a href="#" className="dropdown-item"> With a divider </a>
    </div>
  </div>
</div>
    )
}

export default TemplateMenu