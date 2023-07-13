import React from 'react'
import { useState } from 'react'

const CreatePost = () => {

    const [title, setTitle] = useState('');
    const [tag, setTag] = useState('');
    const [content, setContent] = useState('')

    return (
        <div>
            <form style={{ background: 'linear-gradient(125deg, rgba(236,229,199,1) 0%, rgba(205,194,174,1) 50%, rgba(168,157,135,1) 100%)' }} className="border-4 border-fourth py-10 px-4 space-y-4 rounded-3xl">            
                <div className = "text-center text-fourth text-5xl">Create Post
                    <div className = "text-center flex-center text-fourth text-xl py-5">Here, you can do whatever your heart desires! You can ask
                    questions, discuss your favorite memories, or recommend to other people the cool things you have seen in your trip!</div>
                </div>
                <div className = "px-10">
                    <label className="text-fourth text-xl">Title</label>
                        <input 
                            id="title" 
                            name="title" 
                            type="text" 
                            required
                            className="appearance-none rounded relative block w-full px-5 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                </div>
                <div className = "pl-10">
                    <label className = "text-fourth text-xl">Tag</label>
                    <div className = "text-fourth mt-2">This is where you would put your country so it can be referenced by other people</div>
                    <input
                        id="tag"
                        name="tag"
                        type="text"
                        required
                        className="appearance-none rounded relative block w-full px-5 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
            </form>
        </div>
    )
}

export default CreatePost