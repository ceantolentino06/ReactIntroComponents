import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () =>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Cean" 
                    timeAgo="Today at 4:45PM" 
                    avatar={faker.image.avatar()} 
                    content="So true!"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Angela" 
                    timeAgo="Today at 2:00AM" 
                    avatar={faker.image.avatar()} 
                    content="I didn't know that!"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Maria" 
                    timeAgo="Today at 5:00PM"
                    avatar={faker.image.avatar()} 
                    content="Heck yes!"
                />
            </ApprovalCard>
            
        </div>
    );
}; 

ReactDOM.render(<App />, document.querySelector('#root'));