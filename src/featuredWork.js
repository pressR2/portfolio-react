import React from "react";

class FeaturedWork extends React.Component {
    render() {
        let myProps = this.props.pics;
        console.log(typeof(this.props.pics))
        // this.props.pics.map((pic) => {
        //     return pic
        // });
        return (
            // <img src ="/image/project2.png"/>
           <ol className ='container-projects'>
               {this.props.picsName.map(function(pic) {
                   console.log(pic.image);
                   let imgsrc = myProps(pic.image);
                   console.log(imgsrc);


                   return (
                   <li key={pic.image}>
                       <div className = 'box' style = {{
                         backgroundImage: `url(${imgsrc})`
                       }}/>
                       
                   </li>
               )})}
           </ol>
        )
    }
}

export default FeaturedWork;