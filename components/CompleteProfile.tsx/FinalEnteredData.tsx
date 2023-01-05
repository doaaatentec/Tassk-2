import classes from "../../styles/components/form.module.scss";
import {
  Box,
  Stack,
  TextField,
  Autocomplete,
  Typography,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { createModuleResolutionCache } from "typescript";

const FinalEnteredData = () => {

  const [enterdFName, setEnterdFName] = useState<string>("");
  const [enterdLName, setEnterdLName] = useState<string>("");
  const [enterdPhoneNumber, setEnterdPhoneNumber] = useState<string>("");
  const [countries, setCountries] = useState([]);
  const [countryValue, setCountryValue] = useState<string | null>(null);
  const [countryId, setCountryId] = useState<string | null>("");
  const [enteredCity, setEnteredCity] = useState("");
  const [cities, setCities] = useState([]);
  const [cityValue, setCityValue] = useState<string | null>(null);

  useEffect(() => {
    const fetchCounteriesAPI = async () => {
      const res = await axios.get(
        `https://anchormt-world-staging-at4dfab73a-lz.a.run.app/countries`
      );
      const countriesData = res.data.data;
      setCountries(countriesData);
    };

    fetchCounteriesAPI();
  }, []);

  useEffect(() => {
    if (enteredCity.length > 2) {
      const fetchCitiesAPI = async () => {
        const res = await axios.get(
          `https://anchormt-world-staging-at4dfab73a-lz.a.run.app/cities/${countryId}/${enteredCity}`
        );
        const citiesData = res.data.data;
        setCities(citiesData);
      };
      fetchCitiesAPI();
    }
  }, [enteredCity]);


  const enterdFNameHandler = (e: any) => {
    setEnterdFName(e.target.value);
  };
  const enterdLNameHandler = (e: any) => {
    setEnterdLName(e.target.value);
  };
  const enterdPhoneNumberHandler = (e: any) => {
    setEnterdPhoneNumber(e.target.value);
  };

  const chooseContryHandler = (e: any, newValue: string | null) => {
    setCountryValue(newValue);
    setCountryId(!!newValue && newValue.idCountry);
  };

  const chooseCityHandler = (e: any, newValue: string | null) => {
    setCityValue(newValue);
  };

  const submitProfileHanlder = (e:any) => {
    // e.perventDefault();
    
    console.log(enterdFName);
    // console.log(
    //   enterdFName,
    //   " & ",
    //   enterdLName,
    //   " & ",
    //   countryValue,
    //   " & ",
    //   cityValue,
    //   " & ",
    //   enterdPhoneNumberHandler
    // );
  };

  return (
    <Box className={classes.form} >
      <Typography variant="h4" sx={{ color: "white", marginBottom: "1rem" }}>
        Complete Registration
      </Typography>
      <Stack direction="row" spacing={2}>
        <TextField
          id="filled-firstName-input"
          label="First Name"
          type="text"
          variant="filled"
          color="success"
          fullWidth
          value={enterdFName}
          onChange={enterdFNameHandler}
          autoFocus
          sx={{
            backgroundColor: "#d3cece14",
            borderRadius: "5px",
            fontSize: "1rems",
          }}
        />
        <TextField
          id="filled-lastName-input"
          label="Last Name"
          type="text"
          variant="filled"
          color="success"
          fullWidth
          value={enterdLName}
          onChange={enterdLNameHandler}
          autoFocus
          sx={{
            backgroundColor: "#d3cece14",
            borderRadius: "5px",
            fontSize: "1rems",
          }}
        />
      </Stack>
      <Stack direction="row" spacing={2} width="100%">
        <Autocomplete
          id="combo-box-demo"
          options={countries}
          getOptionLabel={(option) => option.countryName}
          fullWidth
          onChange={chooseContryHandler}
          sx={{
            backgroundColor: "#d3cece14",
            borderRadius: "5px",
            fontSize: "1rems",
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="country"
              variant="filled"
              color="success"
            />
          )}
          value={countryValue}
        />

        <Autocomplete
          id="combo-box-demo-1"
          options={cities}
          sx={{
            backgroundColor: "#d3cece14",
            borderRadius: "5px",
            fontSize: "1rems",
          }}
          getOptionLabel={(option) => option.cityName}
          filterSelectedOptions={true}
          fullWidth
          onChange={chooseCityHandler}
          renderInput={(params) => (
            <TextField
              {...params}
              label="city"
              variant="filled"
              color="success"
              onChange={(e) => setEnteredCity(e.target.value)}
            />
          )}
          value={cityValue}
        />
      </Stack>
      <TextField
        id="filled-phone-input"
        label="Phone Number"
        type="text"
        variant="filled"
        color="success"
        fullWidth
        value={enterdPhoneNumber}
        onChange={enterdPhoneNumberHandler}
        autoFocus
        sx={{
          backgroundColor: "#d3cece14",
          borderRadius: "5px",
          fontSize: "1rems",
        }}
      />
      <Button
        variant="contained"
        color="success"
        fullWidth
        sx={{
          margin: "3rem 0",
          fontWeight: "700",
          fontSize: "1.2rem",
          fontFamily: "system-ui",
        }}
        onClick={submitProfileHanlder}
      >
        Submit
      </Button>
    </Box>
  );
};

export default FinalEnteredData;
