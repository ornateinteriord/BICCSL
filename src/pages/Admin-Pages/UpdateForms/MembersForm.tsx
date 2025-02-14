import React, { useState} from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
  Card,
  CardContent,
  InputAdornment,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WcIcon from "@mui/icons-material/Wc";

const MembersUpdateForm: React.FC = () => {
  const [formData, setFormData] = useState({
    Name: "",
    gender: "",
    email: "",
    mobileno: "",
    MembersForm_image: null as string | null,
    MembersForm_image_name:"" , 
  });

  const handleInputChange = (
    _e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
   
  };

  const handleRadioChange = (_e: React.ChangeEvent<HTMLInputElement>) => {
    
  };

  const handleFileChange = async (_e: React.ChangeEvent<HTMLInputElement>) => {
    
  };

  const handleSubmit = () => {
   console.log(setFormData);
  };

  return (
    <Card
      sx={{
        margin: "2rem",
        mt: 10,
        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
      }}
    >
      <CardContent>
        <Accordion defaultExpanded sx={{ boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              backgroundColor: "#04112f",
              color: "#fff",
            }}
          >
            Basic Details
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "2rem" }}>
            <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <TextField
                label="Name"
                name="Name"
                value={formData.Name}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                placeholder="Enter your name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: "#04112f" }} />
                    </InputAdornment>
                  ),
                }}
              />
              <FormControl>
                <FormLabel sx={{ color: "#04112f" }}>
                  <WcIcon sx={{ color: "#04112f" }} />
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  name="gender"
                  value={formData.gender}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel
                    value="Male"
                    control={<Radio sx={{ "&.Mui-checked": { color: "#04112f" } }} />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="Female"
                    control={<Radio sx={{ "&.Mui-checked": { color: "#04112f" } }} />}
                    label="Female"
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                placeholder="Enter your email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: "#04112f" }} />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Mobile No"
                name="mobileno"
                type="tel"
                value={formData.mobileno}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                placeholder="Enter your mobile number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon sx={{ color: "#04112f" }} />
                    </InputAdornment>
                  ),
                }}
              />
              
             
              
              <FormControl>
                <FormLabel sx={{ color: "#04112f" }}>MembersForm Image</FormLabel>
                <Button variant="outlined" component="label">
                  Choose File
                  <input type="file" hidden onChange={handleFileChange} />
                </Button>
                <span>{formData.MembersForm_image ? formData.MembersForm_image_name: "No file chosen"}</span>
              </FormControl>
              <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{
                  backgroundColor: "#04112f",
                  alignSelf: "flex-end",
                  "&:hover": { backgroundColor: "#0a1f4d" },
                }}
              >
                Update
              </Button>
            </form>
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default MembersUpdateForm;
