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
import { DASHBOARD_CUTSOM_STYLE } from '../../../utils/DataTableColumnsProvider';
import DateFilterComponent from '../../../components/common/DateFilterComponent';

const columns = [
  {
    name: 'From Date',
    selector: (row: any) => row.fromDate,
    sortable: true,
  },
  {
    name: 'To Date',
    selector: (row: any) => row.toDate,
    sortable: true,
  },
  {
    name: 'Content',
    selector: (row: any) => row.content,
    sortable: true,
  },
  {
    name: 'Status',
    selector: (row: any) => row.status,
    cell: (row: any) => (
      <span
        style={{
          backgroundColor: row.status === 'active' ? 'green' : 'transparent',
          color: row.status === 'active' ? 'white' : 'inherit',
          padding: '0.5rem',
          borderRadius: '4px',
        }}
      >
        {row.status.toUpperCase()}
      </span>
    ),
    sortable: true,
  },
];

const initialData = [
  {
    fromDate: '18/06/2022',
    toDate: '20/06/2022',
    content: 'FREE LAUNCHING JUNE 20TH MONDAY',
    status: 'active',
  },
];

const News = () => {
  const [data, setData] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newNews, setNewNews] = useState<{
    fromDate: Date | null;
    toDate: Date | null;
    content: string;
  }>({
    fromDate: null,
    toDate: null,
    content: '',
  });

  const handleSubmit = () => {
    if (newNews.fromDate && newNews.toDate && newNews.content) {
      setData([...data, {
        ...newNews,
        fromDate: newNews.fromDate?.toLocaleDateString() || '',
        toDate: newNews.toDate?.toLocaleDateString() || '',
        status: 'active'
      }]);
      setIsModalOpen(false);
      setNewNews({ fromDate: null, toDate: null, content: '' });
    }
  };

  return (
    <>
      <Grid display="flex" justifyContent="space-between" alignItems="center" sx={{ margin: '2rem', mt: 12 }}>
        <Typography variant="h4">
          News Details
        </Typography>
        <Button
          variant="contained"
          onClick={() => setIsModalOpen(true)}
          sx={{
            backgroundColor: '#04112f',
            '&:hover': { backgroundColor: '#04112f' }
          }}
        >
          Add News
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
              List of News
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
                columns={columns}
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
        <DialogTitle>Add News</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1, zIndex: 1300 }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Content"
                value={newNews.content}
                onChange={(e) => setNewNews({ ...newNews, content: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <DateFilterComponent
                onSelect={(date) => setNewNews({ ...newNews, fromDate: date })}
                mode="single"
                width="100%"
              />
            </Grid>
            <Grid item xs={6}>
              <DateFilterComponent
                onSelect={(date) => setNewNews({ ...newNews, toDate: date })}
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

export default News;