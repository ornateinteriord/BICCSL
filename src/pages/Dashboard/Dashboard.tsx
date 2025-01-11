import {  Card, CardContent, Grid, Typography } from '@mui/material';
import { cn } from '../../lib/utils';
import './dashboard.scss';
import DashboardTable from './DashboardTable';
import DateFilterComponent from '../../components/common/DateFilterComponent';
import DashboardCard from '../../components/common/DashboardCard';

const Dashboard = () => {
  const data = [
    {
      title: "Today's Registration",
      direct: 0,
      indirect: 0,
      total: 0,
    },
    {
      title: "Today's Activation",
      direct: 0,
      indirect: 0,
      total: 0,
    },
    {
      title: 'Total Registration',
      direct: 2,
      indirect: 7,
      total: 9,
    },
    {
      title: 'Total Activation',
      direct: 1,
      indirect: 0,
      total: 1,
    },
    {
      title: 'Current Month Activation',
      direct: 0,
      indirect: 0,
      total: 0,
    },
  ];

  return (
    <>
      <div className="h-40 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center mt-10">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
          Welcome to MLM Dashboard
        </h1>
        <p className="text-center mt-2 text-neutral-300 relative z-20">
          Manage your network and track your success
        </p>
      </div>
      <Grid container spacing={2} sx={{ mx:1, my: 2}}>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <DashboardCard amount={0} title="Level Benefits" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <DashboardCard amount={180.0} title="Direct Benefits" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <DashboardCard amount={180.0} title="Total Earnings" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <DashboardCard amount={0.0} title="Total Withdraws" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <DashboardCard amount={180.0} title="Wallet Balance" />
        </Grid>
      </Grid>
      <div className='mt-10 p-4 rounded shadow'>    
        <Card className='bg-gray-300'>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <Typography variant="h6" style={{ fontWeight: 'bold', color: '#04112f' }}>Member Statistics</Typography>
              <DateFilterComponent />
            </div>
            <DashboardTable data={data} />
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default Dashboard