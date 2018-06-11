import React, { Component } from 'react';
import './SizeUp.css';
import Nav from './Nav'
import BoardHighLight from './BoardHighLighter'
class SizeUp extends Component {
  constructor(pros){
    super();
    this.state = {
      expirence: 50,
      weight: 175,
      fitness: 50,
      flexibilty:50,
      boards: [
        {
          name:'Root Beer Float',
          type:'Planing Hull',
          description: 'Planning hull with heavy channel throuhout',
          price:'$600'
        },
        {
          name:'Twin Fin Fish',
          type:'Fish',
          description: 'Free flowing twin fin that holds a bottom turn and snaps off the top',
          price:'$600'

        },
        {
          name:'Wizard Sleeve',
          type:'Mid Range',
          description: 'Wizards its way in',
          price:'$600'
        }
      ]
    }
    this.recommendedLowVolume=this.recommendedLowVolume.bind(this)
    this.handleExpirence=this.handleExpirence.bind(this)
    this.handleWeight=this.handleWeight.bind(this)
    this.handleFitness=this.handleFitness.bind(this)
    this.handleFlexibiliy=this.handleFlexibiliy.bind(this)
  }
  recommendedLowVolume(){
    const { expirence, weight, fitness, flexibilty } = this.state;

    return Math.round(((1+weight/50)+(1.9-expirence)*(1.7-fitness/10)*(3-flexibilty)/2+18))
  }
  recommendedHighVolume(){
    const { expirence, weight, fitness, flexibilty } = this.state;
    return Math.round(((1+weight/2)*(1.8-expirence/10)*(2-fitness/10)*(4-flexibilty)/3+25))
  }
  handleExpirence(e){
    this.setState({
      expirence: e.target.value
    })
  }
  handleWeight(e){
    this.setState({
      weight: e.target.value
    })
  }
  handleFitness(e){
    this.setState({
      fitness: e.target.value
    })
  }
  handleFlexibiliy(e){
    this.setState({
      flexibilty: e.target.value
    })
  }
  render() {
    return (
       <div>
        <Nav offset={0} />
        <div className="container">
          <h1 className="title">Black Tuna Surfboards</h1>
          <h2 className="subtitle">Volume Calculator</h2>
          <div className="levels">
            <div className={'block'}>
              <label className={'label'}>Expirence Level</label>
              <div className={'range'}>
                <div className={'from'}>From: First Time</div>
                <input className={'inputRange'} onChange={this.handleExpirence} type={"range"} />
                <div className={'to'} >To: Chasing WSL Dream</div>
              </div>
            </div>
             <div className={'block'}>
              <label className={'label'}>Weight</label>
              <div className={'range'}>
                <div className={'from'}>From: 100 lbs</div>
                <input className={'inputRange'} onChange={this.handleWeight} type={"range"} />
                <div className={'to'}>To: 250lbs</div>
              </div>
            </div>
            <div className={'block'}>
              <label className={'label'}>Fitness</label>
              <div className={'range'}>
                <div>From: Trouble climbing stairs</div>
                <input className={'inputRange'} onChange={this.handleFitness} type={"range"} />
                <div className={'to'}>To: Marathon Runner</div>
              </div>
            </div>
            <div className={'block'}>
              <label className={'label'}>Flexibilty</label>
              <div className={'range'}>
                <div className={'from'}>From: cant touch toes</div>
                <input className={'inputRange'} onChange={this.handleFlexibiliy} type={"range"} />
                <div className={'to'}>To: Yoga Master</div>
              </div>
            </div>
          </div>
        </div>
        <div className="levels">
          <div className="recommended">Recommended Volume</div>
          <div className="volumes">
            <div className="volume">
              Low:
              {this.recommendedLowVolume()} Liters
            </div>
            <div className="volume">
            High:
            {this.recommendedHighVolume()} Liters
            </div>
          </div>
        </div>
         <div className="levels">
          <div className="recommended">BT Boards that fit these Dimensions</div>
          <div className="volumes">
            <BoardHighLight boards={this.state.boards} />
          </div>
        </div>
        <div className="levels">
            <div className="recommended">Interested in a lesson?</div>
            <div className="lesson">
              <div className="lesson-title">Sign up here</div>
              <input className="email"  />
              <div>
                <input type="radio" className="consent" />
                <input className=""/>
                <a className="mail-list"> Enter</a>
              </div>
            </div>
          </div>
        </div>

    );
  }
}

export default SizeUp;


