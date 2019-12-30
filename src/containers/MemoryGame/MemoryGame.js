import React, {Component} from 'react';
import classes from './MemoryGame.module.css';
import Modal from '../../components/Modal/Modal';
import StopWatch from 'stopwatch-js';
import Card from '../../components/Card/Card';

class MemoryGame extends Component {
    
    //Adopted Fisher–Yates shuffle
    shuffle = (array) => {
        let ind = array.length, temp, rand;
      
        // While there remain elements to shuffle…
        while (ind) {
      
          // Pick a remaining element…
          rand = Math.floor(Math.random() * ind--);
      
          // And swap it with the current element.
          temp = array[ind];
          array[ind] = array[rand];
          array[rand] = temp;
        }
      
        return array;
      }

      startTimer = () => {
        let stopWatch = new StopWatch();
         stopWatch.start();
         return stopWatch;
     }
     color = ['red', 'green', 'blue'];
    //creates the numbers from 0 to 17 and duplicates it
    grid = this.shuffle(Array.from({length: 2}, () => [...Array(18).keys()]).flat());
    grid = this.grid.map((num, index) => {
     return { value: num,
        isFlipped: false,
        revealed: false,
        id: index,
        color: this.color[index % 3]
       }
    
    });
    state = {
        cardGrid: this.grid
    }

    timer = this.startTimer();
    //Store the fipped cards below 
    firstCard = null;
    secondCard = null;
    revealedCount = 0;
    myScores = {};

    storeScore = (score) => {
        let scores = localStorage.getItem('myScores');
        if(scores && JSON.parse(scores).last10.length < 11){
            scores = JSON.parse(scores);
            scores.last10.unshift(Math.floor(score))
        }else if(scores && JSON.parse(scores).last10.length > 10){
            scores = JSON.parse(scores);
            scores.last10.pop();
            scores.last10.unshift(Math.floor(score));          
        }else{
            scores = {highScore: Math.floor(score), last10: [Math.floor(score)]};
        }
        if(scores.highScore > scores.last10[0])
            scores.highScore = scores.last10[0];
        this.myScores = scores;
        scores = JSON.stringify(scores);
        localStorage.setItem('myScores', scores);
    }

    getScores = () => {
        let scores = localStorage.getItem('myScores')
        console.log(scores)
        if(scores != null)
            return JSON.parse(scores);
        else
            return {highScore: null, last10: []};
    }

    myScores = this.getScores();
    
    storeCard = (id) => {
        if(this.firstCard != null)
            this.secondCard = id;
        else
            this.firstCard = id;
    }

    compareCards = (firstCard, secondCard) => {
       return this.state.cardGrid[firstCard].value === this.state.cardGrid[secondCard].value;
    }

    setRevealed = (cardId) => {
        this.revealedCount += 1;
        this.setState((prevState) => {
            return prevState.cardGrid[cardId].revealed = true;
        })
    }

    setFlipped = (id, isFlipped) => {
        this.setState((prevState) => {
            return prevState.cardGrid[id].isFlipped = isFlipped;
        });
    }

    resetBothCards = () => {
        this.firstCard = null;
        this.secondCard = null;
    }
    

    cardClickHandler = (id, isFlipped) => {
        console.log(this.revealedCount);
        if(!this.state.cardGrid[id].revealed && !isFlipped){
            this.setFlipped(id, !isFlipped);
            this.storeCard(id);
            if(this.secondCard != null && this.compareCards(this.firstCard, this.secondCard)){
                //Cards Matches
                this.setRevealed(this.firstCard);
                this.setRevealed(this.secondCard);
                if(this.revealedCount > 35){
                    this.timer.stop();
                    this.storeScore(this.timer.duration());
                }
                this.resetBothCards();
            }else if(this.secondCard != null && !this.compareCards(this.firstCard, this.secondCard)){
                //Cards Didnt Match
                const first = this.firstCard;
                const second = this.secondCard;
               setTimeout(() => {
                   this.setFlipped(first, false);
                }, 1000);
                setTimeout(() => {
                    this.setFlipped(second, false);
                }, 1000) 
                this.resetBothCards();
            }
        }
            
    }
    

    memoryGameClasses = [classes.MemoryGame];
    
    render(){
        console.log(this.state.cardGrid);
        
        return(
            <React.Fragment>
            {this.revealedCount === this.state.cardGrid.length ?
             <Modal show={true} >
                 <div>
                     <h1>Congrats!! You Win</h1>
                     <h3>You took {this.timer.duration()} second</h3>
                     <button className={classes.btn}><a href='/'> New Game </a></button>
                </div>
             </Modal>: null}
            <div className={this.memoryGameClasses.join(' ')}>
                <div className={classes.gamePage}>
                    <div className={classes.grid}>
                        {this.state.cardGrid.map((card, index) => {
                            return <Card clicked={this.cardClickHandler} card={card}/>
                        })}
                        </div>
                </div>
                <div className={classes.controlsPage}>
                    <div>
                        <button className={classes.btn}><a href='/'> Reset </a></button>
                    </div>
                    <div className={classes.Scores}>
                        <div className={[classes.bold, classes.underline].join(' ')}>Scores</div>
                        <span className={classes.bold}>Best Score: </span><span>{this.myScores.highScore ? this.myScores.highScore : 'None'}</span>
                        <ol>
                            {this.myScores.last10.map((score) => (
                                <li>{score}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div> 
            </React.Fragment>
        );
    }
}


export default MemoryGame;