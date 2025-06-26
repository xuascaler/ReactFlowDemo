import { createSlice } from "@reduxjs/toolkit";

interface TaskModel {
    name: string,
    date: Date,
}

interface TemplateModel {
    name: string,
    date: Date,
    taskList: TaskModel[],
}

interface TemplatesModel {
    templates: {[name: string]: TemplateModel}
}

const templateInitState: TemplatesModel = {
    templates: {
        template_0: {
            name: "template_0",
            date: new Date("2024-01-01"),
            taskList: [
                { name: "task_0", date: new Date("20240202") }, 
                { name: "task_1", date: new Date("20240203") }, 
                { name: "task_2", date: new Date("20240204") }, 
            ]
        }, 
        template_1: {
            name: "template_1",
            date: new Date("2024-01-01"),
            taskList: [
                { name: "task_0", date: new Date("20240202") }, 
                { name: "task_1", date: new Date("20240203") }, 
                { name: "task_2", date: new Date("20240204") }, 
            ]
        } 
    }
}

const templateSlice = createSlice({
        name: "templates",
        initialState: templateInitState,
        reducers: {

        }
})

export default templateSlice.reducer