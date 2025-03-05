import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DateFilterComponent from "../../../components/common/DateFilterComponent";
import './CashBack.scss'
import DataTable from "react-data-table-component";
import { DASHBOARD_CUTSOM_STYLE, getCashBackColumns } from "../../../utils/DataTableColumnsProvider";

const CashBack = () => {
  const handleFromDateSelect = (date: any) => {
    console.log(date);
  };

  const handleToDateSelect = (date: any) => {
    console.log(date);
  };

  const data = [
{}
  ]
  const noDataComponent = (
    <div style={{ padding: "24px" }}>No data available in table</div>
  );

  return (
    <>
    <Grid
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    className="Cashback-container"
    sx={{ margin: "2rem", mt: 12 }}
  >
    <Typography variant="h4">Daily Benefits</Typography>
    <Grid  className="Cashback-content">
      <TextField
        size="small"
        placeholder="Member Id"
        className="member-id"
      />
      <DateFilterComponent onSelect={handleFromDateSelect} />
      <DateFilterComponent onSelect={handleToDateSelect} />
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#04112f",
          "&:hover": { backgroundColor: "#04112f" },
        }}
      >
        Search
      </Button>
    </Grid>
  </Grid>
    <Card sx={{ margin: "2rem", mt: 2 }}>
      <CardContent>
      <Accordion defaultExpanded>
      <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              backgroundColor: "#04112f",
              color: "#fff",
              "& .MuiSvgIcon-root": { color: "#fff" },
            }}
          >
            List of Daily benefits Payouts
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
                columns={getCashBackColumns()}
                data={data}
                pagination
                customStyles={DASHBOARD_CUTSOM_STYLE}
                paginationPerPage={25}
                paginationRowsPerPageOptions={[25, 50, 100]}
                highlightOnHover
                noDataComponent={noDataComponent}
              />
            </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
    </>
  )
}

export default CashBack