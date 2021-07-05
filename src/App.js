import styles from  './App.module.css'
import {Cards,CountryPicker,Charts} from "./Components";
import {fetchData} from './Api/index'
import { Component } from 'react';

class App extends Component {
  state={
    data:{},
    country:'',
  }
  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data:fetchedData});
  }

  handleCountryChange = async (country)=>{
    const fetchedData = await fetchData(country);
    this.setState({data:fetchedData,country:country});
  }

  render(){
    const {data} = this.state;
    const {country} = this.state;
    return (
      <div className={styles.container}>
          <img src="https://i.ibb.co/7QpKsCX/image.png" className={styles.image}/>
          <Cards data={data}/>
          <CountryPicker handleCountryChange={this.handleCountryChange}/>
          <Charts data={data} country={country}/>
      </div>
    );
  }
}

export default App;
