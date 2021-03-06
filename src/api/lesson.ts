import { ILesson } from '../@types/Interface'

export const initLesson = {
    name: 'New Lesson',
    description: 'Learn something new!',
    author: -1,
    type: '',
    content: ''
} as ILesson

export const saveLesson = async (id : number, data : any) => {
    if (data == undefined) return
    let initData = {
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
        method: "PUT"
    }
    let r = id
    await fetch('/lesson/' + id, initData).then(res => res.json())
    .then((res) => r = res)
    //.catch(error => console.error(error))
    return r
}

export const loadLesson = async (id : number) : Promise<ILesson> => {
    if (id === -1) return initLesson
    let initData = {
        body: null,
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET',
    }
    let lesson = {} as any
    await fetch('/lesson/' + id, initData).then(res => res.json())
    .then(l => lesson = l)
    return lesson
}