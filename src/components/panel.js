import React from "react"

class Panel extends React.Component {
    render(){
    return (
        <div className="panel-group" id="accordion">
				  <div className="panel panel-default">
					<div id="bg-color" className="panel-heading">
					  <h4 className="panel-title">
						<a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
						  Popular Products
						</a>
					  </h4>
					</div>
					<div id="collapseOne" className="panel-collapse collapse in">
					  <div className="panel-body">
						    <div className="row text-center">
							  <div className="col-sm-3">
								<div className="thumbnail">
								  <img src={require('../images/10119351-pedigree-dry-dog-01.png')} alt="" className="image-prod" />
								  <p><strong>Pedigree® Dog Treats DENTASTIX™ Fresh (Toy/Small) </strong></p>
								  
								  <div id="star-icon">
										<i className="glyphicon glyphicon-glyphicon-star" data-unicode="e006"></i>
										<i className="glyphicon glyphicon-glyphicon-star" data-unicode="e006"></i>
										<i className="glyphicon glyphicon-glyphicon-star" data-unicode="e006"></i>
										<i className="glyphicon glyphicon-glyphicon-star" data-unicode="e006"></i>
										<i className="glyphicon glyphicon-glyphicon-star-empty" data-unicode="e007"></i>
										<span className="">(123) </span>
									</div>
								  
								  <button className="btn" data-toggle="modal" data-target="#myModal">Buy Now</button>
								</div>
							  </div>
							  <div className="col-sm-3">
								<div className="thumbnail">
								  <img src={require('../images/pedigree-dentastix-fresh-small-toy-dog.png')} alt=""  className="image-prod" />
								  <p><strong>PEDIGREE® Dry Dog Food Adult Roasted Chicken, Rice & Vegetable Flavor </strong></p>
								  
								    <div id="star-icon">
										<i className="glyphicon glyphicon-glyphicon-star" data-unicode="e006"></i>
										<i className="glyphicon glyphicon-glyphicon-star" data-unicode="e006"></i>
										<i className="glyphicon glyphicon-glyphicon-star" data-unicode="e006"></i>
										<i className="glyphicon glyphicon-glyphicon-star" data-unicode="e006"></i>
										<i className="glyphicon glyphicon-glyphicon-star-empty" data-unicode="e007"></i>
										<span className="">(23) </span>
									</div>								  
								  
								  <button className="btn" data-toggle="modal" data-target="#myModal">Buy Now</button>
								</div>
							  </div>
							  <div className="col-sm-3">
								<div className="thumbnail">
								  <img src={require('../images/pedigree_adult_completenutrition_chickenriceveg_17lbbag.png')} alt="" className="image-prod"/>
								  <p><strong>PEDIGREE® Wet Dog Food Chopped Ground Dinner with Chicken</strong></p>
								  
									<div id="star-icon">
										<i className="glyphicon glyphicon-glyphicon-star" data-unicode="e006"></i>
										<i className="glyphicon glyphicon-glyphicon-star" data-unicode="e006"></i>
										<i className="glyphicon glyphicon-glyphicon-star" data-unicode="e006"></i>
										<i className="glyphicon glyphicon-glyphicon-star" data-unicode="e006"></i>
										<i className="glyphicon glyphicon-glyphicon-star-empty" data-unicode="e007"></i>
										<span className="">(334) </span>
									</div>
								  
								  <button className="btn" data-toggle="modal" data-target="#myModal">Buy Now</button>
								</div>
							  </div>
							  <div className="col-sm-3">
								<div className="thumbnail">
								  <img src={require('../images/10119351-pedigree-dry-dog-01.png')} alt=""  className="image-prod"/>
								  <p><strong>PEDIGREE® Dry Dog Food Small Dog Grilled Steak and Vegetable Flavor</strong></p>
								  
									<div id="star-icon">
										<i className="glyphicon glyphicon-glyphicon-star" data-unicode="e006"></i>
										<i className="glyphicon glyphicon-glyphicon-star" data-unicode="e006"></i>
										<i className="glyphicon glyphicon-glyphicon-star" data-unicode="e006"></i>
										<i className="glyphicon glyphicon-glyphicon-star-empty" data-unicode="e007"></i>
										<i className="glyphicon glyphicon-glyphicon-star-empty" data-unicode="e007"></i>
										<span className="">(49) </span>
									</div>
								  
								  <button className="btn" data-toggle="modal" data-target="#myModal">Buy Now</button>
								</div>
							  </div>
							</div>			
						
					  </div>
					</div>
				  </div>
				  <div className="panel panel-default">
					<div id="bg-color" className="panel-heading">
					  <h4 className="panel-title">
						<a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
						  Related Articles
						</a>
					  </h4>
					</div>
					<div id="collapseTwo" className="panel-collapse collapse">
					  <div className="panel-body">
						Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
					  </div>
					</div>
				  </div>
				</div>
    );
    }
}
export default Panel    