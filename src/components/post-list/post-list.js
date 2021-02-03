import React from 'react';
import PostListItem from '../post-list-item';

import {ListGroup} from 'reactstrap';
import './post-list.css';
const PostList = ({posts,onDelete, onToggleImportant, onToggleLiked}) => {

    const filteredPosts = posts.filter(item => typeof item === 'object' && isEmpty(item));
    
        const elements = filteredPosts.map((item)=> {

            const {id, ...itemProps}= item;
            return (
                <li key={id}className='list-group-item'>    
                    <PostListItem {...itemProps} 
                    onDelete={()=> onDelete(id)}
                    onToggleLiked={()=> onToggleLiked(id)}
                    onToggleImportant={()=> onToggleImportant(id)}/>
                </li>
            )
        });
        return (
            <ListGroup className="app-list">
                {elements}
            </ListGroup>
        )
    
    function isEmpty(el){
        for (let key in el){
            return true;
            }
        return false;
    }
}


export default PostList;