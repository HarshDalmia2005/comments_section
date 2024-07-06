import React from 'react'
import { useState, useRef ,useEffect} from 'react'

const Comment = ({ comment, handleAddComment, handleDeleteComment, handleEditComment }) => {
    const [reply, setreply] = useState(false)
    const [edit, setedit] = useState(false)
    const [commentBody, setcommentBody] = useState("")
    const inputRef = useRef(null)

    useEffect(() => {
      inputRef?.current?.focus()
    }, [edit])
    

    const handleDelete = () => {
        handleDeleteComment(comment.id)
    }

    const handleAdd = () => {
        if (edit) {
            handleEditComment(comment.id, inputRef?.current?.innerText)
        } else {
            let newComment = {
                id: Date.now(),
                user: "ABC",
                content: commentBody,
                replies: []
            }
            handleAddComment(newComment, comment.id)
            setreply(false);
        }

        if(edit)setedit(false)
    }


    return (
        <div className='mx-7 my-4'>
            <div className='w-[80%] border border-black rounded-2xl px-3 flex flex-col' style={!comment.content ? { display: "none" } : {}}>
                <h1 className='font-bold'>{comment.user}</h1>
                <span contentEditable={edit} suppressContentEditableWarning={edit} style={{ wordWrap: "break-word" }} ref={inputRef} > {comment.content} </span>
                {reply && <input type="text" className='mt-2 p-1 px-3 ml-3 w-[40%]' autoFocus onChange={(e) => { setcommentBody(e.target.value) }} />}
                {
                    !reply && !edit ? (<div className='space-x-4 mb-3 mt-2'>
                        <button onClick={() => setreply(true)} className='border border-black p-1 px-3 rounded-xl font-bold'>reply</button>
                        <button onClick={() => setedit(true)} className='border border-black p-1 px-3 rounded-xl font-bold'>edit</button>
                        <button onClick={handleDelete} className='border border-black p-1 px-3 rounded-xl font-bold'>delete</button>
                    </div>) :
                        (<div className='space-x-4 mb-3 mt-2'>
                            <button onClick={handleAdd} className='border border-black p-1 px-3 rounded-xl font-bold'>{edit ? "Save" : "Add"}</button>
                            <button onClick={() => { setreply(false);if(edit && inputRef.current){inputRef.current.innerText=comment.content}; setedit(false); }} className='border border-black p-1 px-3 rounded-xl font-bold'>Cancel</button>
                        </div>)}
            </div>
            <div>
                {
                    comment?.replies?.map((ele) => {
                        return <Comment key={ele.id} comment={ele} handleAddComment={handleAddComment} handleDeleteComment={handleDeleteComment}  handleEditComment={handleEditComment} />
                    })
                }
            </div>
        </div>
    )
}

export default Comment