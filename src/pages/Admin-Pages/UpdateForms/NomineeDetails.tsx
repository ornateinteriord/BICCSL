import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    TextField,
    InputAdornment,
  } from "@mui/material";
  import PersonIcon from "@mui/icons-material/Person";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

  interface NomineeDetailsProps {
    formData: any;
    handleInputChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;

  }

  export  const  NomineeDetails: React.FC< NomineeDetailsProps> = ({
    formData,
    handleInputChange,
    
  }) => {
    return(
        <Accordion
        defaultExpanded
        sx={{ boxShadow: "none", marginBottom: "20px" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
          sx={{
            backgroundColor: "#04112f",
            color: "#fff",
          }}
        >
          Nominee Details
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "2rem" }}>
          <div className="basic-details-accordion">
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                width: "100%",
              }}
            >
              <TextField
                label="Nominee Name"
                name="nomineeName"
                value={formData.nomineeName}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                placeholder="Nominee Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: "#04112f" }} />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Nominee Relation"
                name="nomineeRelation"
                value={formData.nomineeRelation}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                placeholder="Nominee Relation"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: "#04112f" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </form>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                width: "100%",
              }}
            >
              <TextField
                label="Nominee Age"
                name="nomineeAge"
                value={formData.nomineeAge}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                placeholder="Nominee Age"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: "#04112f" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </form>
          </div>
        </AccordionDetails>
      </Accordion>
    )
  }