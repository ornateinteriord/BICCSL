import DataTable from 'react-data-table-component';
import { Card, CardContent, Accordion, AccordionSummary, AccordionDetails, TextField, Typography, Button, Grid, CircularProgress } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DASHBOARD_CUTSOM_STYLE, getMembersColumns } from '../../../utils/DataTableColumnsProvider';
import './Members.scss'
import DateFilterComponent from '../../../components/common/DateFilterComponent';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useGetAllMembersDetails } from '../../../api/Admin';
import MembersUpdateForm from '../UpdateForms/MembersForm';

interface MemberTableProps {
  title: string;
  summaryTitle: string;
  data: any[];
  showEdit?: boolean;
  isLoading?:boolean;
 
}

const MemberTable = ({ title, summaryTitle, data, showEdit = false, isLoading = false }: MemberTableProps) => {
  const [isEdit , setIsEdit] = useState(false);

  const handleFromDateSelect = (date: any) => {
    console.log(date);
  }

  const handleToDateSelect = (date: any) => {
    console.log(date);
  }

  return (
    isEdit ? (
    <>
    <MembersUpdateForm />
    </>
    ) : (
    <>
      <Grid className="filter-container"  sx={{ margin: '2rem', mt: 12 }}>
        
        <Typography variant="h4">
          {title}
        </Typography>
        <Grid className="filter-actions" >
        <DateFilterComponent onSelect={handleFromDateSelect} />
        <DateFilterComponent onSelect={handleToDateSelect} />
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#04112f',
            '&:hover': { backgroundColor: '#04112f' }
          }}
        >
          Search
        </Button>
        </Grid>
      </Grid>
      <Card sx={{ margin: '2rem', mt: 2 }}>
        <CardContent>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                backgroundColor: '#04112f',
                color: '#fff',
                '& .MuiSvgIcon-root': { color: '#fff' }
              }}
            >
              {summaryTitle}
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginBottom: '1rem' }}>
              <TextField
                    size="small"
                    placeholder="Search..."
                    sx={{ minWidth: 200 }}
                  />
              </div>
              <DataTable
                columns={getMembersColumns(showEdit , setIsEdit)}
                data={data}
                pagination
                customStyles={DASHBOARD_CUTSOM_STYLE}
                paginationPerPage={25}
               progressPending={isLoading}
               progressComponent ={
                <CircularProgress size={"4rem"} sx={{ color: "#04112F" }} />
               }
                paginationRowsPerPageOptions={[25, 50, 100]}
                highlightOnHover
              />
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
    </>
    )
  );
};


interface Member {
  Member_id: string;
  Date_of_joining: string;
  password: string;
  Sponsor_name: number | string; 
  spackage: number | string;
  mobileno: number | string;
  status: string;
}

type status = "All" | "active" | "Inactive" | "pending";

const useMembers = (status: status) => {
  const {data:members,isLoading,isError,error} = useGetAllMembersDetails()

  useEffect(() => {
      if (isError) {
        const err = error as any;
        toast.error(
          err?.response.data.message || "Failed to fetch Transaction details"
        );
      }
    }, [isError, error]);

    const memberdata = Array.isArray(members)
    ? members .filter((member: Member) => (status === "All" ? true: member.status === status )).map((member: Member, index) => ({
      sNo: index + 1,
      member: member.Member_id ?? "-",
      approvedOn: member.Date_of_joining ?? "-",
      password: member.password ?? "-",
      sponsor: member.Sponsor_name ?? "-",
      package: member.spackage ?? "-",
      mobileNo: member.mobileno ?? "-",
      status: member.status ?? "-"
      }))
    : [];
  return  { memberdata, isLoading } 
   
};


export const Members = () => {
  const { memberdata, isLoading } = useMembers("All"); 
  return (
    <MemberTable
      title="Members"
      summaryTitle="List of All Members"
      showEdit
      data={memberdata}
      isLoading={isLoading}
    />
  );
};

export const ActiveMembers = () => {
  const {memberdata,isLoading} = useMembers("active")
  return (
    <MemberTable
      title="Active Members"
      summaryTitle="List of Active Members"
      data={memberdata}
      isLoading={isLoading}
    />
  )
}

export const InActiveMembers = () => {
  const {memberdata,isLoading} = useMembers("Inactive")
  return (
    <MemberTable
      title="Inactive Members"
      summaryTitle="List of Inactive Members"
      data={memberdata}
      isLoading={isLoading}
    />
  )
}

export const PendingMembers = () => {
  const {memberdata,isLoading} = useMembers("pending")
  return (
    <MemberTable
      title="Pending Members"
      summaryTitle="List of Pending Members"
      data={memberdata}
      isLoading={isLoading}
    />
  );
};




export default Members;

