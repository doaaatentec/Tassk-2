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
import { useForm } from "react-hook-form";
import { ErrorSharp } from "@mui/icons-material";

const FinalEnteredData = () => {
  const defaultValues = {
    firstName: "",
  };
  const {
    register,
    handleSubmit,
    getValues,

    formState: { errors },
  } = useForm({ shouldUseNativeValidation: true, defaultValues });
  const [data, setData] = useState("");

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

  const chooseContryHandler = (e: any, newValue: string | null) => {
    setCountryValue(newValue);
    setCountryId(!!newValue && newValue.idCountry);
  };

  const chooseCityHandler = (e: any, newValue: string | null) => {
    setCityValue(newValue);
  };

  const submitProfileHanlder = (e:any) => {
const values = getValues();
console.log(values)

  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      className={classes.form}
      onSubmit={handleSubmit(submitProfileHanlder)}
    >
      <Typography variant="h4" sx={{ color: "white", marginBottom: "1rem" }}>
        Complete Registration
      </Typography>
      <Stack direction="row" spacing={2}>
        <TextField
          id="filled-firstName-input"
          label="First Name"
          type="text"
          required
          {...register("firstName", {
            required: "Please enter your first name.",
          })}
          variant="filled"
          color="success"
          fullWidth
          autoFocus
          sx={{
            backgroundColor: "#d3cece14",
            borderRadius: "5px",
            fontSize: "1rems",
          }}
        />

        {errors.firstName?.message && <p>{errors.firstName.message}</p>}
        <TextField
          id="filled-lastName-input"
          label="Last Name"
          type="text"
          {...register("last-name", {
            required: "Please enter your last name.",
          })}
          variant="filled"
          color="success"
          fullWidth
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
          value={countryValue}
          getOptionLabel={(option: any) => option.countryName}
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
        {...register("phone-number", {
          required: "Please enter your first name.",
        })}
        variant="filled"
        color="success"
        fullWidth
        autoFocus
        sx={{
          backgroundColor: "#d3cece14",
          borderRadius: "5px",
          fontSize: "1rems",
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="success"
        fullWidth
        sx={{
          margin: "3rem 0",
          fontWeight: "700",
          fontSize: "1.2rem",
          fontFamily: "system-ui",
        }}
      >
        submit
      </Button>
      <p>{data}</p>
    </Box>
  );
};

export default FinalEnteredData;
