import { useState } from 'react';
import DataTable from 'react-data-table-component';
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DASHBOARD_CUTSOM_STYLE, getHolidaysColumns } from '../../../utils/DataTableColumnsProvider';
import DateFilterComponent from '../../../components/common/DateFilterComponent';



const initialData = [
  {
    date: '25/12/2024',
    description: 'Christmas Day',
    status: 'active',
  },
];

const Holidays = () => {
  const [data, setData] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newHoliday, setNewHoliday] = useState<{
    date: Date | null;
    description: string;
  }>({
    date: null,
    description: '',
  });

  const handleSubmit = () => {
    if (newHoliday.date && newHoliday.description) {
      setData([...data, {
        date: newHoliday.date?.toLocaleDateString() || '',
        description: newHoliday.description,
        status: 'active'
      }]);
      setIsModalOpen(false);
      setNewHoliday({ date: null, description: '' });
    }
  };

  return (
    <>
      <Grid display="flex" justifyContent="space-between" alignItems="center" sx={{ margin: '2rem', mt: 12 }}>
        <Typography variant="h4">
          Holiday Details
        </Typography>
        <Button
          variant="contained"
          onClick={() => setIsModalOpen(true)}
          sx={{
            backgroundColor: '#04112f',
            '&:hover': { backgroundColor: '#04112f' }
          }}
        >
          Add Holiday
        </Button>
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
              List of Holidays
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
                columns={getHolidaysColumns()}
                data={data}
                pagination
                customStyles={DASHBOARD_CUTSOM_STYLE}
                paginationPerPage={25}
                paginationRowsPerPageOptions={[25, 50, 100]}
                highlightOnHover
              />
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>

      <Dialog 
        open={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        sx={{ zIndex: 1200 }}
      >
        <DialogTitle>Add Holiday</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1, zIndex: 1300 }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Description"
                value={newHoliday.description}
                onChange={(e) => setNewHoliday({ ...newHoliday, description: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <DateFilterComponent
                onSelect={(date) => setNewHoliday({ ...newHoliday, date })}
                mode="single"
                width="100%"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Holidays;