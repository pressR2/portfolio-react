import React from "react";

class FeaturedWork extends React.Component {
    render() {
        let projectsImage = this.props.pics;
        console.log(typeof(this.props.pics))
       
        return (
            // <img src ="/image/project2.png"/>
           <ol className ='container-projects'>
               {this.props.projectsPics.map(function(pic) {
                   console.log(pic.image);
                   let oneImage = projectsImage(pic.image);
                   console.log(oneImage);

                   return (
                   <li key={pic.image}>
                       <div className = 'box' style = {{
                         backgroundImage: `url(${oneImage})`
                       }}/>
                       
                   </li>
               )})}
           </ol>
        )
    }
}

export default FeaturedWork;