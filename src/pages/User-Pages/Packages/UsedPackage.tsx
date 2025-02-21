import DataTable from 'react-data-table-component';
import { Card, CardContent, Accordion, AccordionSummary, AccordionDetails, TextField, CircularProgress } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DASHBOARD_CUTSOM_STYLE, getUsedPackageColumns } from '../../../utils/DataTableColumnsProvider';
import { getUsedandUnusedPackages } from '../../../api/Memeber';
import TokenService from '../../../api/token/tokenService';
import { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import moment from 'moment';
import UserContext from '../../../context/user/userContext';
import useSearch from '../../../hooks/SearchQuery';

const UsedPackage = () => {
  
  const memberId = TokenService.getMemberId();
  const { user} = useContext(UserContext);

  const { data: usedPackage, isLoading, error , isError} = getUsedandUnusedPackages({
    memberId: memberId,
    status: 'used'
  });
  useEffect(() => {
    if (isError) {
      const err = error as any;

      toast.error(
        err?.response.data.message || "Failed to fetch package details"
      );
    }
  }, [isError, error]);

  const data = usedPackage?.map((pkg: any) => ({
    date: moment(pkg.date , "MM/DD/YYYY").format("DD/MM/YYYY") || "-",
    memberCode: `${user.Name} (${pkg.purchasedby})` || "-",
    packageCode: pkg.epin_no || "-",
    amount: `₹ ${pkg.amount.toLocaleString()}` || "-",
    usedFor: pkg.used_for || "-",
    usedDate:moment( pkg.used_on  , "MM/DD/YYYY").format("DD/MM/YYYY") || "-"|| "-",
    status: pkg.status || "-",
  })) || [];

  const { searchQuery, setSearchQuery, filteredData } = useSearch(data,[
    "date",
    "memberCode",
    "packageCode",
    "amount",
    "usedFor",
    "usedDate",
    "status",
  ])


  return (
    <Card sx={{ margin: '2rem', mt: 10 }}>
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
            List of Used Package
          </AccordionSummary>
          <AccordionDetails>
            <DataTable
              columns={getUsedPackageColumns()}
              data={filteredData}
              pagination
              customStyles={DASHBOARD_CUTSOM_STYLE}
              paginationPerPage={25}
              paginationRowsPerPageOptions={[25, 50, 100]}
              highlightOnHover
              subHeader
              progressPending={isLoading}
              progressComponent={<CircularProgress />}
              subHeaderComponent={
                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', padding: '0.5rem' }}>
                  <TextField
                    placeholder="Search"
                    variant="outlined"
                    size="small"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              }
            />
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default UsedPackage;