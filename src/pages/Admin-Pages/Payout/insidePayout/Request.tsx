import { Accordion, AccordionDetails, AccordionSummary, Box, TextField } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DataTable from "react-data-table-component";
import { DASHBOARD_CUTSOM_STYLE, getRequestColumns } from "../../../../utils/DataTableColumnsProvider";

const Requests = () => {

    const Data = [
        {
         date: "2024-03-01",
         Member: "John Doe",
         mobileno: "9876543210",
         account: "1234567890",
         ifsc: "HDFC0001234",
         amount: "$100",
         deduction: "$5",
         status: "Pending",
         action: "Approve",
     }
     ]
  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          mt: 2,
          backgroundColor: "#04112f",
          color: "#fff",
          "& .MuiSvgIcon-root": { color: "#fff" },
        }}
      >
        Requests
      </AccordionSummary>
      <AccordionDetails>
        <Box
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "flex-end",
            marginBottom: "1rem",
          }}
        >
          <TextField
            size="small"
            placeholder="Search..."
            sx={{ minWidth: 200 }}
          />
        </Box>
        <DataTable
          columns={getRequestColumns()}
          data={Data}
          pagination
          customStyles={DASHBOARD_CUTSOM_STYLE}
          paginationPerPage={25}
          paginationRowsPerPageOptions={[25, 50, 100]}
          highlightOnHover
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default Requests;
