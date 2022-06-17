import React, {Component} from "react";

import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
class App extends Component{
    constructor()
    {
        super();
        this.state={
            robots: [],
            searchField: ''
        }
    }

    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => {this.setState({ robots: users})});
    }
    onSearchChange = (event)=>
    {
        this.setState({
            searchField:event.target.value
        })
        console.log(event.target.value);
        // const filteredRobots= this.state.robots.filter(robots=>{
        //     return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        // })
    }
    render()
    {
        const {robots,searchField}= this.state;
        const filteredRobots= this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return !robots.length ?
        <h1>Loading</h1> :
        (
            <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots} />
                </ErrorBoundary>
          </Scroll>
        </div>
        );
    }
     
}

export default App;