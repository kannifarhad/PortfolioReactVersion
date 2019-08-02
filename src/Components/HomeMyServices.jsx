import React from 'react';

function HomeMyServices(props) {
    return(
        <div>
            <div id="myabilities">
                <div className="abiliteshead">
                    <div>
                        <h1>{props.servicesInfo.title}</h1>
                        <p>{props.servicesInfo.description}</p>
                    </div>
                </div>

                <div className="abilitiescont">
                    {props.servicesList.map(service => 
						<div key={service.id} className="ability">
                            <div className="abilityicon"><img src={service.icon} /> </div>
                            <h1>{service.title}</h1>
                            <p>{service.description}</p>
                        </div>
                    )}
                </div>
                <div className="clear"></div>
            </div>

            <div id="lamps">
                <div className="lampscont">
                    <div className="lamp lamp4" style={{left:"30px",top:"-90px"}}><img src="assets/img/lamp/4on.png"/> </div>
                    <div className="lamp lamp5" style={{left:"130px",top:"-290px"}}><img src="assets/img/lamp/5on.png"/> </div>
                    <div className="lamp lamp1" style={{left:"200px",top:"-50px"}}><img src="assets/img/lamp/1on.png"/> </div>
                    <div className="lamp lamp3" style={{top:"-180px",left:"433px"}}><img src="assets/img/lamp/3on.png"/> </div>
                    <div className="lamp lamp5" style={{left:"585px",top:"-100px"}}><img src="assets/img/lamp/5on.png"/> </div>
                    <div className="lamp lamp4" style={{left:"710px",top:"-245px"}}><img src="assets/img/lamp/4on.png"/> </div>
                    <div className="lamp lamp2" style={{left:"843px",top: "-173px"}}><img src="assets/img/lamp/2on.png"/> </div>
                    <div className="lamp lamp5" style={{left:"1025px",top:"-230px"}}><img src="assets/img/lamp/5on.png"/> </div>
                    <div className="lamp lamp4" style={{left:"1110px",top:"-10px"}}><img src="assets/img/lamp/4on.png"/> </div>
                    <div className="lamp lamp3" style={{left:"1200px",top:"-240px"}}><img src="assets/img/lamp/3on.png"/> </div>

                    <div className="sitat">
                        <p>{props.languageData['Slogan']}</p>
                        <span>{props.languageData['Pablo Picasso']}</span>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default HomeMyServices;