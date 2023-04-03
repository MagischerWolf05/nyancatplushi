import React from 'react';
import ResponsesComments from '../UserResponeData';
import './UserResponseList.css';
//https://codepen.io/josetxu/pen/NWyZWoJ list idea
const UserResponse = () => {
    return (


            <div  className="content">

                <ul className="team">
                {ResponsesComments.map((person) => (
                    <li key={person.id} className="member">
                    <div className="thumb"><img src={"https://randomuser.me/api/portraits/"  +person.image}/>
                        </div>
                        <div className="description">
                            <h3 id="NameOfPerson">{person.name}</h3>
                            <p>{person.Feedback}<br/></p>
                        </div>
                    </li>

                ))}

         </ul>

            </div>


);
};

export default UserResponse;