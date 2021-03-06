import { Input } from 'antd'
import React from 'react'
//import Tags from './Tags'

const { TextArea } = Input
export default function Details(props : any) {

    function handleFormChange(event : any) : any {
        let l = Object.assign({}, props.lesson)
        l.name = event.target.name === 'title' ? event.target.value : props.lesson.name
        l.description = event.target.name === 'description' ? event.target.value : props.lesson.description
        props.setLesson(l)
    }

    return (
        <div style={container}>
            <form onChange={handleFormChange} style={{width: 500}}>
                <h2 style={{color: 'dimgrey'}}>Lesson Details</h2>
                <Input name="title" value={props.lesson.name} style={formItem}/>
                <TextArea name="description" value={props.lesson.description} autoSize={{ minRows: 2, maxRows: 6 }} style={formItem}/>
            </form>
        </div>
    )
}

const container = {
    marginLeft: '10%'
}

const formItem = {
    marginBottom: 8
}