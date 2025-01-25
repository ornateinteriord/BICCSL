import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { ExpandMoreIcon } from "../../Icons"
import DataTable from "react-data-table-component"
import { DASHBOARD_CUTSOM_STYLE } from "../../../utils/DataTableColumnsProvider"
import { Edit } from "lucide-react"
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from "react"

interface AddItemDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  category: string;
  editData?: any;
}

const AddItemDialog = ({ open, onClose, onSubmit, category, editData }: AddItemDialogProps) => {
  const [formData, setFormData] = useState({
    id: '',
    category: category,
    itemName: '',
    brand: '',
    mrp: '',
    sellingPrice: ''
  });

  useEffect(() => {
    if (editData) {
      setFormData({
        id: editData.id,
        category: editData.category,
        itemName: editData.itemName,
        brand: editData.brand,
        mrp: editData.mrp,
        sellingPrice: editData.sellingPrice
      });
    } else {
      setFormData({
        id: '',
        category: category,
        itemName: '',
        brand: '',
        mrp: '',
        sellingPrice: ''
      });
    }
  }, [editData, category]);

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{editData ? 'Edit Item' : 'Add New Item'}</DialogTitle>
      <DialogContent>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            label="Category"
            disabled
          >
            <MenuItem value={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</MenuItem>
          </Select>
        </FormControl>
        <TextField
          margin="dense"
          label="Item Name"
          fullWidth
          value={formData.itemName}
          onChange={(e) => setFormData({...formData, itemName: e.target.value})}
        />
        <TextField
          margin="dense" 
          label="Brand"
          fullWidth
          value={formData.brand}
          onChange={(e) => setFormData({...formData, brand: e.target.value})}
        />
        <TextField
          margin="dense"
          label="MRP"
          type="number"
          fullWidth
          value={formData.mrp}
          onChange={(e) => setFormData({...formData, mrp: e.target.value})}
        />
        <TextField
          margin="dense"
          label="Selling Price"
          type="number"
          fullWidth
          value={formData.sellingPrice}
          onChange={(e) => setFormData({...formData, sellingPrice: e.target.value})}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>{editData ? 'Update' : 'Add'}</Button>
      </DialogActions>
    </Dialog>
  );
};

export const Computers = () => {
  const [tableData, setTableData] = useState<any[]>([]);

  const handleSubmit = (formData: any) => {
    if (formData.category === 'computer') {
      if (formData.id) {
        setTableData(tableData.map(item => item.id === formData.id ? formData : item));
      } else {
        setTableData([...tableData, {...formData, id: Date.now()}]);
      }
    }
  };

  return (
    <ItemsTable
      title="Computers"
      summaryTitle="List of Computers"
      data={tableData}
      onSubmit={handleSubmit}
      category="computer"
    />
  )
}

export const Mobiles = () => {
  const [tableData, setTableData] = useState<any[]>([]);

  const handleSubmit = (formData: any) => {
    if (formData.category === 'mobile') {
      if (formData.id) {
        setTableData(tableData.map(item => item.id === formData.id ? formData : item));
      } else {
        setTableData([...tableData, {...formData, id: Date.now()}]);
      }
    }
  };

  return (
    <ItemsTable
      title="Mobiles"
      summaryTitle="List of Mobiles" 
      data={tableData}
      onSubmit={handleSubmit}
      category="mobile"
    />
  )
}

export const Laptops = () => {
  const [tableData, setTableData] = useState<any[]>([]);

  const handleSubmit = (formData: any) => {
    if (formData.category === 'laptop') {
      if (formData.id) {
        setTableData(tableData.map(item => item.id === formData.id ? formData : item));
      } else {
        setTableData([...tableData, {...formData, id: Date.now()}]);
      }
    }
  };

  return (
    <ItemsTable
      title="Laptops"
      summaryTitle="List of Laptops"
      data={tableData}
      onSubmit={handleSubmit}
      category="laptop"
    />
  )
}

export const Electronics = () => {
  const [tableData, setTableData] = useState<any[]>([]);

  const handleSubmit = (formData: any) => {
    if (formData.category === 'electronics') {
      if (formData.id) {
        setTableData(tableData.map(item => item.id === formData.id ? formData : item));
      } else {
        setTableData([...tableData, {...formData, id: Date.now()}]);
      }
    }
  };

  return (
    <ItemsTable
      title="Electronics"
      summaryTitle="List of Electronics"
      data={tableData}
      onSubmit={handleSubmit}
      category="electronics"
    />
  )
}

export const Accessories = () => {
  const [tableData, setTableData] = useState<any[]>([]);

  const handleSubmit = (formData: any) => {
    if (formData.category === 'accessories') {
      if (formData.id) {
        setTableData(tableData.map(item => item.id === formData.id ? formData : item));
      } else {
        setTableData([...tableData, {...formData, id: Date.now()}]);
      }
    }
  };

  return (
    <ItemsTable
      title="Accessories"
      summaryTitle="List of Accessories"
      data={tableData}
      onSubmit={handleSubmit}
      category="accessories"
    />
  )
}

const ItemsTable = ({ title, summaryTitle, data, onSubmit, category } : { title: string, summaryTitle: string, data: any[], onSubmit: (data: any) => void, category: string }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [editData, setEditData] = useState<any>(null);

  const handleEdit = (row: any) => {
    setEditData(row);
    setOpenDialog(true);
  };

  const columns = [
    {
      name: 'Item Name',
      selector: (row: any) => row.itemName,
      sortable: true,
    },
    {
      name: 'Brand', 
      selector: (row: any) => row.brand,
      sortable: true,
    },
    {
      name: 'MRP',
      selector: (row: any) => row.mrp,
      sortable: true,
    },
    {
      name: 'Selling Price',
      selector: (row: any) => row.sellingPrice,
      sortable: true,
    },
    {
      name: 'Modify',
      cell: (row: any) => (
        <div 
          style={{ color: '#000', padding: '5px', borderRadius: '4px', cursor: 'pointer' }}
          onClick={() => handleEdit(row)}
        >
          <Edit />
        </div>
      ),
    },
    {
      name: 'Delete',
      cell: () => (
        <div style={{ color: '#000', padding: '5px', borderRadius: '4px', cursor: 'pointer' }}>
          <DeleteIcon />
        </div>
      ),
    }
  ];

  return (
    <>
      <Typography variant="h4" sx={{ margin: '2rem', mt: 10 }}>
        {title}
      </Typography>
      <Card sx={{ margin: '2rem', mt: 2 }}>
        <CardContent>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                backgroundColor: '#04112f',
                color: '#fff',
                '& .MuiSvgIcon-root': { color: '#fff' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <Typography>{summaryTitle}</Typography>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: '#fff', 
                    mr:2,
                    color: '#04112f',
                    '&:hover': { backgroundColor: '#f5f5f5' }
                  }}
                  onClick={() => {
                    setEditData(null);
                    setOpenDialog(true);
                  }}
                >
                  Add Item
                </Button>
              </div>
            </AccordionSummary>
            <AccordionDetails>
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
          <AddItemDialog 
            open={openDialog}
            onClose={() => {
              setOpenDialog(false);
              setEditData(null);
            }}
            onSubmit={onSubmit}
            category={category}
            editData={editData}
          />
        </CardContent>
      </Card>
    </>
  )
}
