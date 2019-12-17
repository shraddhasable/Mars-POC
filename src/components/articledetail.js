import React from "react"
import Sharearticle from "./sharearticle"
import Articledetailinfo from "./detailinfocopy"
import Panel from "./panel"
import "./articledetail.css"

class Article extends React.Component {
    render(){
    return (
        <div className="white-bg container buy-wrap">
        <div className="article-detail">
            <div className="banner-img">		
				<h1>2018 World’s Cutest Rescue Pet </h1>
				<img src={require('../images/ped-article-banner.jpg')} className="ban-image" alt="Pedigree banner" />
			</div>
            <Sharearticle />
            <Articledetailinfo />
            <Sharearticle />
            <Panel />
        </div>
        </div>
    );
    }
}
export default Article    