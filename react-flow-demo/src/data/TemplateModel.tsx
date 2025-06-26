export interface TaskModel {
    name: string,
    date: Date,
}

export interface TemplateModel {
    name: string,
    date: Date,
    taskList: TaskModel[],
}

export interface TemplatesModel {
    templates: {[name: string]: TemplateModel}
}
