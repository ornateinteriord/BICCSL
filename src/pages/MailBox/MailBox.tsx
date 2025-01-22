import React, { useState } from 'react';
import {
  Card,
  CardContent,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import DataTable from 'react-data-table-component';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { DASHBOARD_CUTSOM_STYLE } from '../../utils/DataTableColumnsProvider';

const MailBox = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const [formData, setFormData] = useState({
    ticketType: '',
    subject: '',
    details: '',
  });

  const [tickets, setTickets] = useState([
    {
      ticketDate: '18-Aug-2024',
      ticketNo: '760',
      typeOfTicket: 'Payments related',
      subject: 'Ggg',
      status: 'Pending',
    },
  ]);

  const [selectedTicket, setSelectedTicket] = useState<any>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = (ticket: any) => {
    setSelectedTicket(ticket);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedTicket(null);
  };

  const columns = [
    {
      name: 'Ticket Date',
      selector: (row: any) => row.ticketDate,
      sortable: true,
      omit: isMobile,
    },
    {
      name: 'Ticket No',
      selector: (row: any) => row.ticketNo,
      sortable: true,
      cell: (row: any) => (
        <div
          style={{
            backgroundColor: '#5bc0de',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '4px',
            fontSize: isMobile ? '12px' : '14px',
          }}
        >
          {row.ticketNo}
        </div>
      ),
    },
    {
      name: 'Type of ticket',
      selector: (row: any) => row.typeOfTicket,
      sortable: true,
      omit: isMobile,
    },
    {
      name: 'Subject',
      selector: (row: any) => row.subject,
      sortable: true,
      omit: isMobile && isTablet,
    },
    {
      name: 'Status',
      selector: (row: any) => row.status,
      sortable: true,
      cell: (row: any) => (
        <div
          style={{
            backgroundColor: row.status === 'Pending' ? '#ffd700' : '#00d1b2',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '4px',
            fontSize: isMobile ? '12px' : '14px',
          }}
        >
          {row.status}
        </div>
      ),
    },
    {
      name: 'Actions',
      cell: (row: any) => (
        <IconButton
          onClick={() => handleOpenDialog(row)}
          size={isMobile ? "small" : "medium"}
          sx={{
            color: '#04112f',
            '&:hover': {
              backgroundColor: 'rgba(4, 17, 47, 0.04)'
            }
          }}
        >
          <VisibilityIcon color='primary' fontSize={isMobile ? "small" : "medium"}/>
        </IconButton>
      ),
      sortable: false,
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      ticketType: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newTicket = {
      ticketDate: new Date().toLocaleDateString('en-GB'),
      ticketNo: Math.floor(Math.random() * 1000).toString(),
      typeOfTicket: formData.ticketType,
      subject: formData.subject,
      status: 'Pending',
    };

    setTickets((prev) => [...prev, newTicket]);
    
    // Reset form
    setFormData({
      ticketType: '',
      subject: '',
      details: '',
    });
  };

  return (
    <>
      <Card sx={{ 
        margin: isMobile ? '1rem' : '2rem', 
        mt: isMobile ? 5 : 10, 
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
      }}>
        <CardContent sx={{ padding: isMobile ? '12px' : '24px' }}>
          <Accordion 
            defaultExpanded
            sx={{
              boxShadow: 'none',
              '&.MuiAccordion-root': {
                backgroundColor: '#fff'
              }
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                backgroundColor: '#04112f',
                color: '#fff',
                '& .MuiSvgIcon-root': { color: '#fff' },
                minHeight: isMobile ? '48px' : '64px',
              }}
            >
              Mail Box
            </AccordionSummary>
            <AccordionDetails sx={{ padding: isMobile ? '1rem' : '2rem' }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '1rem' : '1.5rem' }}>
                <FormControl fullWidth>
                  <InputLabel>Ticket Type</InputLabel>
                  <Select
                    value={formData.ticketType}
                    label="Ticket Type"
                    onChange={handleSelectChange}
                    name="ticketType"
                    required
                    size={isMobile ? "small" : "medium"}
                    sx={{
                      '& .MuiOutlinedInput-notchedOutline': {
                        '&:hover': {
                          borderColor: '#04112f',
                        }
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#04112f',
                      }
                    }}
                  >
                    <MenuItem value="Modify">Modify</MenuItem>
                    <MenuItem value="Payments related">Payments Related</MenuItem>
                    <MenuItem value="Business Queries">Business Queries</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  fullWidth
                  required
                  size={isMobile ? "small" : "medium"}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: '#04112f',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#04112f',
                      }
                    }
                  }}
                />

                <TextField
                  label="Details"
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  multiline
                  rows={isMobile ? 3 : 4}
                  fullWidth
                  required
                  size={isMobile ? "small" : "medium"}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: '#04112f',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#04112f',
                      }
                    }
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  size={isMobile ? "small" : "medium"}
                  sx={{
                    backgroundColor: '#04112f',
                    alignSelf: 'flex-end',
                    '&:hover': {
                      backgroundColor: '#0a1f4d'
                    }
                  }}
                >
                  Submit
                </Button>
              </form>
            </AccordionDetails>
          </Accordion>

          {/* Table Section */}
          <Accordion defaultExpanded sx={{ mt: isMobile ? 2 : 4 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                backgroundColor: '#04112f',
                color: '#fff',
                '& .MuiSvgIcon-root': { color: '#fff' },
                minHeight: isMobile ? '48px' : '64px',
              }}
            >
              List of Support Details
            </AccordionSummary>
            <AccordionDetails>
              <DataTable
                columns={columns}
                data={tickets}
                pagination
                customStyles={DASHBOARD_CUTSOM_STYLE}
                paginationPerPage={isMobile ? 10 : 25}
                paginationRowsPerPageOptions={isMobile ? [10, 20, 50] : [25, 50, 100]}
                highlightOnHover
                responsive
                subHeader
                subHeaderComponent={
                  <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', padding: isMobile ? '0.25rem' : '0.5rem' }}>
                    <TextField
                      placeholder="Search"
                      variant="outlined"
                      size="small"
                    />
                  </div>
                }
              />
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>

      {/* Details Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        fullScreen={isMobile}
      >
        <DialogTitle sx={{ 
          backgroundColor: '#04112f', 
          color: '#fff', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: isMobile ? '12px' : '16px'
        }}>
          Ticket Details
          <IconButton
            onClick={handleCloseDialog}
            size={isMobile ? "small" : "medium"}
            sx={{ color: '#fff' }}
          >
            <CloseIcon fontSize={isMobile ? "small" : "medium"} />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ mt: isMobile ? 1 : 2, padding: isMobile ? '12px' : '24px' }}>
          {selectedTicket && (
            <>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 1 : 2 }}>
                <Typography variant={isMobile ? "subtitle1" : "h6"} sx={{ color: '#04112f' }}>Ticket Information</Typography>
                <Box sx={{ 
                  display: 'grid', 
                  gridTemplateColumns: isMobile ? '120px 1fr' : 'auto 1fr', 
                  gap: isMobile ? 1 : 2, 
                  alignItems: 'center' 
                }}>
                  <Typography variant="subtitle2">Ticket No:</Typography>
                  <Typography>{selectedTicket.ticketNo}</Typography>
                  
                  <Typography variant="subtitle2">Date:</Typography>
                  <Typography>{selectedTicket.ticketDate}</Typography>
                  
                  <Typography variant="subtitle2">Type:</Typography>
                  <Typography>{selectedTicket.typeOfTicket}</Typography>
                  
                  <Typography variant="subtitle2">Subject:</Typography>
                  <Typography>{selectedTicket.subject}</Typography>
                  
                  <Typography variant="subtitle2">Status:</Typography>
                  <Typography sx={{
                    backgroundColor: selectedTicket.status === 'Pending' ? '#ffd700' : '#00d1b2',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    width: 'fit-content',
                    fontSize: isMobile ? '12px' : '14px'
                  }}>
                    {selectedTicket.status}
                  </Typography>
                </Box>

                <Divider sx={{ my: isMobile ? 1 : 2 }} />

                <Typography variant={isMobile ? "subtitle1" : "h6"} sx={{ color: '#04112f' }}>Reply Details</Typography>
                <Box sx={{ 
                  backgroundColor: '#f5f5f5',
                  padding: isMobile ? '0.75rem' : '1rem',
                  borderRadius: '4px',
                  textAlign: 'center'
                }}>
                  <Typography color="text.secondary" variant={isMobile ? "body2" : "body1"}>No Reply</Typography>
                </Box>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MailBox;
