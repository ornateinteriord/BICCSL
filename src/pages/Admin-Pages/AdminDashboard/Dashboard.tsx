import {  Card, CardContent, Grid, Typography } from '@mui/material';
import { cn } from '../../../lib/utils';
import '../../Dashboard/dashboard.scss';
import DashboardTable from '../../Dashboard/DashboardTable';
import DashboardCard from '../../../components/common/DashboardCard';
import { getAdminDashboardTableColumns } from '../../../utils/DataTableColumnsProvider';
import PersonIcon from '@mui/icons-material/Person';

const AdminDashboard = () => { 

  const data = [
    {
      date: "2023-10-01",
      member: "John Doe",
      packageAmount: 100,
    },
    {
      date: "2023-10-02",
      member: "Jane Smith",
      packageAmount: 150,
    },
    {
      date: "2023-10-03",
      member: "Alice Johnson",
      packageAmount: 200,
    },
  ];

  return (
    <>
      <div className="h-40 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center mt-10">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
          Welcome to Admin Dashboard
        </h1>
        <p className="text-center mt-2 text-neutral-300 relative z-20">
          Manage your network and track your success
        </p>
      </div>
      <Grid 
        container 
        spacing={{ xs: 2, sm: 3 }} 
        sx={{ 
          mx: { xs: 1, sm: 2 }, 
          my: 2,
          pt : 5,
          pr : 7,
          width: 'auto',
          '& .MuiGrid-item': {
            display: 'flex',
          }
        }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <DashboardCard amount={2} title="Total Members" subTitle="12 More members added" IconComponent={PersonIcon} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DashboardCard amount={2} title="Active Members" subTitle="5 More members activated" IconComponent={PersonIcon} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DashboardCard amount={0} title="Pending Members" IconComponent={PersonIcon} />
        </Grid>
      </Grid>
      <div className='mt-10 p-4 rounded shadow'>    
        <Card className='bg-gray-300'>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <Typography variant="h6" style={{ fontWeight: 'bold', color: '#04112f' }}>Member Statistics</Typography>
            </div>
            <DashboardTable data={data} columns={getAdminDashboardTableColumns()} />
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default AdminDashboard