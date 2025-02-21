import DataTable from "react-data-table-component";
import {
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Typography,
  Button,
  Grid,
  CircularProgress,
} from "@mui/material";
import './Transactions.scss'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  DASHBOARD_CUTSOM_STYLE,
  getAdminPageTransactionColumns,
} from "../../../utils/DataTableColumnsProvider";
import DateFilterComponent from "../../../components/common/DateFilterComponent";
import { useGetAllTransactionDetails } from "../../../api/Admin";
import { useEffect } from "react";
import { toast } from "react-toastify";
import useSearch from "../../../hooks/SearchQuery";



interface Transaction{
  transaction_date: string;
  member_id:string,
  transaction_type:string,
  description: string;
  ew_credit: number;
  ew_debit: number;
}
const Transactions = () => {
  const {
    data: transactions,
    isLoading,
    isError,
    error,
  } = useGetAllTransactionDetails();

  useEffect(() => {
    if (isError) {
      const err = error as any;
      toast.error(
        err?.response.data.message || "Failed to fetch Transaction details"
      );
    }
  }, [isError, error]);

  const data = transactions ?.map((transaction:Transaction) =>({
    date: transaction.transaction_date || "-",
    member: transaction.member_id || "-",
    description: transaction.description || "-",
    type: transaction.transaction_type || "-",
    ewCredit: transaction.ew_credit || "-",
    ewDebit: transaction.ew_debit || "-",
  })) || []

  const { searchQuery, setSearchQuery, filteredData } = useSearch(data, [
    "date",
    "member",
    "description",
    "type",
    "ewCredit",
    "ewDebit",
  ]);
  
  return (
    <TransactionDataTable
      title="Transactions"
      summaryTitle="List of Transactions"
      data={filteredData}
      columns={getAdminPageTransactionColumns()}
      isLoading={isLoading}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    />
  );
};

export default Transactions;


export const TransactionDataTable = ({
  title,
  summaryTitle,
  data,
  columns,
  isLoading,
  searchQuery,
  setSearchQuery,
}: {
  title: string;
  summaryTitle: string;
  data: any;
  columns: any;
  isLoading?: boolean;
  searchQuery?: string;
  setSearchQuery?: React.Dispatch<React.SetStateAction<string>> ;
}) => {
  const handleFromDateSelect = (date: any) => {
    console.log(date);
  };

  const handleToDateSelect = (date: any) => {
    console.log(date);
  };

  return (
    <>
      <Grid
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        className="transaction-container"
        sx={{ margin: "2rem", mt: 12 }}
      >
        <Typography variant="h4">{title}</Typography>
        <Grid  className="transaction-content">
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
              {summaryTitle}
            </AccordionSummary>
            <AccordionDetails>
              <div
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery?.(e.target.value)}
                />
              </div>
              <DataTable
                columns={columns}
                data={data}
                pagination
                customStyles={DASHBOARD_CUTSOM_STYLE}
                paginationPerPage={25}
                progressPending={isLoading}
                progressComponent={
                  <CircularProgress size={"4rem"} sx={{ color: "#04112F" }}/>
                }
                paginationRowsPerPageOptions={[25, 50, 100]}
                highlightOnHover
              />
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
    </>
  );
};
