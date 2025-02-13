import { useState, useEffect } from "react";
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
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DASHBOARD_CUTSOM_STYLE, getMembersColumns } from "../../../utils/DataTableColumnsProvider";
import { Edit } from "lucide-react";
import "./Members.scss";
import DateFilterComponent from "../../../components/common/DateFilterComponent";
import { toast } from "react-toastify";
import { useGetAllMembersDetails } from "../../../api/Admin";

interface MemberTableProps {
  title: string;
  summaryTitle: string;
  data: any[];
  showEdit?: boolean;
  isLoading?: boolean;
  statusFilter?: string;
  onStatusChange: (status: string) => void;
}

const MemberTable = ({ title, summaryTitle, data, showEdit = false, isLoading = false, statusFilter, onStatusChange }: MemberTableProps) => {
  const handleFromDateSelect = (date: any) => {
    console.log(date);
  };

  const handleToDateSelect = (date: any) => {
    console.log(date);
  };

  return (
    <>
      <Grid className="filter-container" sx={{ margin: "2rem", mt: 12 }}>
        <Typography variant="h4">{title}</Typography>
        <Grid className="filter-actions">
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
              <Grid
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "flex-end",
                  marginBottom: "1rem",
                }}
                sx={{
                  flexDirection: { xs: "column", sm: "row" }, // Column on mobile, row on larger screens
                  alignItems: { xs: "stretch", sm: "center" }, // Stretch for full width on mobile
                }}
              >
                {/* Status Filter Dropdown */}
                <FormControl size="small" sx={{ minWidth: { xs: "100%", sm: 200 } }}>
                  <InputLabel>Status</InputLabel>
                  <Select
                    value={statusFilter}
                    onChange={(e) => onStatusChange(e.target.value)}
                    label="Status"
                  >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="inactive">Inactive</MenuItem>
                    <MenuItem value="pending">Pending</MenuItem>
                  </Select>
                </FormControl>

                {/* Search Input */}
                <TextField size="small" placeholder="Search..." sx={{ minWidth: { xs: "100%", sm: 200 } }} />
              </Grid>
              <DataTable
                columns={
                  showEdit
                    ? [
                      ...getMembersColumns(),
                      {
                        name: "Modify",
                        cell: () => (
                          <div style={{ color: "#000", padding: "5px", borderRadius: "4px", cursor: "pointer" }}>
                            <Edit />
                          </div>
                        ),
                      },
                    ]
                    : getMembersColumns()
                }
                data={data}
                pagination
                customStyles={DASHBOARD_CUTSOM_STYLE}
                paginationPerPage={25}
                progressPending={isLoading}
                progressComponent={<CircularProgress size={"4rem"} sx={{ color: "#04112F" }} />}
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

interface MemberProp {
  Member_id: string;
  Date_of_joining: string;
  password: string;
  Sponsor_name: number | string;
  spackage: number | string;
  mobileno: number | string;
}

export const ActiveMembers = () => {

  return (
    <MemberTable
      title="Active Members"
      summaryTitle="List of Active Members"
      data={data}
      onStatusChange={() => { }}
    />
  )
}

export const InActiveMembers = () => {
  return (
    <MemberTable
      title="Inactive Members"
      summaryTitle="List of Inactive Members"
      data={data}
      onStatusChange={() => { }}
    />
  )
}

export const PendingMembers = () => {
  return (
    <MemberTable
      title="Pending Members"
      summaryTitle="List of Pending Members"
      data={data}
      onStatusChange={() => { }}
    />
  );
};

const Members = () => {
  const { data: members, isLoading, isError, error } = useGetAllMembersDetails();
  const [statusFilter, setStatusFilter] = useState<string>("");

  useEffect(() => {
    if (isError) {
      const err = error as any;
      toast.error(err?.response.data.message || "Failed to fetch Member details");
    }
  }, [isError, error]);

  const filteredMembers = Array.isArray(members)
    ? members
      .filter((member) => (statusFilter === 'all' ? true : member.status.toLowerCase() === statusFilter))
      .map((member: MemberProp, index) => ({
        sNo: index + 1,
        member: member.Member_id || "-",
        approvedOn: member.Date_of_joining || "-",
        password: member.password || "-",
        sponsor: member.Sponsor_name ?? "-",
        package: member.spackage ?? "-",
        mobileNo: member.mobileno ?? "-"
      }))
    : [];

  return (
    <MemberTable
      title="Members"
      summaryTitle="List of Members"
      data={filteredMembers}
      showEdit={true}
      isLoading={isLoading}
      statusFilter={statusFilter}
      onStatusChange={setStatusFilter}
    />
  );
};

export default Members;




const data = [
  {
    sNo: 1,
    member: 'BICCSL (SF000001)',
    approvedOn: '06-Nov-2023',
    password: '123456',
    sponsor: '()',
    package: 'STARTER',
    mobileNo: '910000000',
  },
  {
    sNo: 2,
    member: 'BICCSL (SF000002)',
    approvedOn: '07-Nov-2023',
    password: '123456',
    sponsor: 'BICCSL (SF000001)',
    package: 'STARTER',
    mobileNo: '910000001',
  },
];