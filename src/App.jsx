import { useState } from 'react'
import './App.css'
import Type from './components/Type'
import Comment from './components/Comment'
import { commentData } from './Data/commentData'
import useFunction from './hooks/useFunction'

function App() {
   const [comments, setcomments] = useState(commentData)
   const {addcomment, deletecomment, editComment}=useFunction();

   const handleAddComment=(commentBody,commentId) => {
      const updatedComments = comments.map(comment => addcomment(comment, commentId, commentBody));
      setcomments(updatedComments);
   }

   const handleDeleteComment=(commentId)=>{
    const updatedComments = comments.map(comment => deletecomment(comment, commentId)).filter(ele=>ele!==null);
    setcomments(updatedComments); 
   }

   const handleEditComment=(commentId,commentBody)=>{
    const updatedComments = comments.map(comment => editComment(comment,commentId, commentBody));
    setcomments(updatedComments);
    console.log(comments)
   }
   

  return (
    <>
    <h2 className='text-4xl text-center font-bold'>Comments Section</h2>
      <Type comment={comments} setcomments={setcomments}/>
      {comments.map((comment,index)=>{
          return <Comment key={comment.id} comment={comment} handleAddComment={handleAddComment} handleDeleteComment={handleDeleteComment}  handleEditComment={handleEditComment}/>
      })}
      
    </>
  )
}

export default App
