const useFunction = () => {

    const addcomment = (tree, commentId, comment) => {
        if (tree.id === commentId) {
            tree.replies.unshift(comment)
            return tree
        }

        const updatedReply = tree.replies.map(ele => {
            return addcomment(ele, commentId, comment)
        })
        return { ...tree, replies: updatedReply }
    }

    const deletecomment = (tree, commentId) => {
        if (tree.id === commentId) {
            return null; // Remove the comment by returning null
        }

        if (!tree.replies) {
            return tree; // If no replies, return the tree node as is
        }

        const updatedReplies = tree.replies
            .map(reply => deletecomment(reply, commentId))
            .filter(reply => reply !== null); // Filter out null replies

        return {
            ...tree,
            replies: updatedReplies
        };
    }

    const editComment=(tree,commentId,newcomment)=>{
        if(tree.id==commentId){
            tree.content=newcomment
            return tree;
        }

        tree.replies.map((ele)=>{
            return editComment(ele,commentId,newcomment)
        })

        return {...tree}
    }


    return { addcomment, deletecomment,editComment }
}

export default useFunction