import React ,{useState,useEffect}from 'react'
import {NativeSelect,FormControl} from "@material-ui/core"
import styles from './CountryPicker.module.css'
import {fetchCountries} from "../../Api"

function CountryPicker({handleCountryChange}) {
    const [fetchedCountries, setFetchedCountries] = useState([])
    useEffect(()=>{
        const fetchCountriesAPI = async()=>{
            setFetchedCountries(await fetchCountries());            
        }
        fetchCountriesAPI(); 
    },[])


    return (
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect default="" onChange={(e)=>handleCountryChange(e.target.value)}>
                    <option value="">
                        Global
                    </option>
                    {
                        fetchedCountries.map((country,i)=>
                        <option value={country} key={i}>
                            {country}
                        </option>)
                    }                    
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker
