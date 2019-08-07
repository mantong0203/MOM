import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
       <div className="container section project-details">
           <div className="card z-depth-0">
               <div className="card-content">
                   <span className="card-title">Project Title -{id}</span>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi unde sequi iste nostrum molestias a natus quia id mollitia voluptatem. Illum doloremque adipisci consequuntur officiis eveniet aliquid, qui ab cum!</p>
               </div>
               <div className="card-action gret lighten-4 grey-text">
                   <div>Posted by the </div>
                   <div>2nd September</div>
               </div>
           </div>
       </div>
    )
}

export default ProjectDetails
