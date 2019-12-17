import React from "react"

class Sharearticle extends React.Component {
    render(){
    return (
        <div className="share-social">
            <p>Share this article:</p>
            <div id="social">
                <a className=""> <span className="glyphicon glyphicon-envelope"> </span></a>
                <a className=""> <span className="glyphicon glyphicon-envelope"> </span></a>
                <a className=""> <span className="glyphicon glyphicon-envelope"> </span></a>
                <a className=""> <span className="glyphicon glyphicon-envelope"> </span></a>
            </div>
        </div>
    );
    }
}
export default Sharearticle    