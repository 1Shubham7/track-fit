import Card from "./Card";
function Features() {
    return (
        <div className=" services">
            <h2 style={{paddingLeft:'4rem'}} className="main-title text-center">Features</h2>
            
            <div className="card-cover">
            <center>
                <div className="col-md-12">
                    <div className="row">
                        <div style={{marginLeft:'4rem'}} className="col-md-3 mb-2">
                            <Card title="Diet Plan" img="card1.png" text="The user can see the next diet with the nutritional value required​" />
                        </div>
                        <div className="col-md-3 mb-2">
                        <Card title="Daily Tracker" img="card2.png" text="The user will  also had a record maintained in website which shows his past nutritional intakes and future task to do to achieve his goals." />
                        </div>
                        <div className="col-md-3 mb-2">
                        <Card title="Fittness Trainer" img="card3.png" text="Personalized health record has been given by the machine or trainer.." />
                        </div>
                    </div>
                </div>                
            </center>
            </div>
        </div>
      )
}
export default Features;