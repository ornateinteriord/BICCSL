import { IconButton } from "@mui/material";
import  VisibilityIcon  from '@mui/icons-material/Visibility';
import { Edit } from "lucide-react";

export const getUserDashboardTableColumns = () => [
  {
    selector: (row: any) => row.title,
    style: { fontWeight: "bold" },
  },
  {
    name: "Direct",
    selector: (row: any) => row.direct,
    center: true,
  },
  {
    name: "Indirect",
    selector: (row: any) => row.indirect,
    center: true,
  },
  {
    name: "Total",
    selector: (row: any) => row.total,
    center: true,
  },
];

export const getUsedPackageColumns = () => {
  return [
    {
      name: "Date",
      selector: (row: any) => row.date,
      sortable: true,
    },
    {
      name: "Member Code",
      selector: (row: any) => row.memberCode,
      sortable: true,
    },
    {
      name: "Package Code",
      selector: (row: any) => row.packageCode,
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row: any) => row.amount,
      sortable: true,
    },
    {
      name: "Used For",
      selector: (row: any) => row.usedFor,
      sortable: true,
    },
    {
      name: "Used Date",
      selector: (row: any) => row.usedDate,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row: any) => row.status,
      sortable: true,
    },
  ];
};

export const getUnUsedPackageColumns = () => [
  {
    name: "Date",
    selector: (row: any) => row.date,
    sortable: true,
  },
  {
    name: "Code",
    selector: (row: any) => row.code,
    sortable: true,
  },
  {
    name: "Package Code",
    selector: (row: any) => row.packageCode,
    sortable: true,
  },
  {
    name: "Amount",
    selector: (row: any) => row.amount,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row: any) => row.status,
    sortable: true,
  },
];

export const getPackageHistoryColumns = () => [
  {
    name: "Package ID",
    selector: (row: any) => row.id,
    sortable: true,
  },
  {
    name: "Package Name",
    selector: (row: any) => row.name,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row: any) => row.status,
    sortable: true,
  },
  {
    name: "Date",
    selector: (row: any) => row.date,
    sortable: true,
  },
  {
    name: "Amount",
    selector: (row: any) => row.amount,
    sortable: true,
  },
];

export const getDirectColumns = () => [
  {
    name: "S No",
    selector: (row: any) => row.sNo,
    sortable: true,
  },
  {
    name: "Member",
    selector: (row: any) => row.member,
    sortable: true,
  },
  {
    name: "Mobile No",
    selector: (row: any) => row.mobileNo,
    sortable: true,
  },
  {
    name: "DOJ",
    selector: (row: any) => row.doj,
    sortable: true,
  },
  {
    name: "Sponsor",
    selector: (row: any) => row.sponsor,
    sortable: true,
  },
];
export const getLevelBenifitsColumns = () => [
  {
    name: "Date",
    selector: (row: any) => row.date,
    sortable: true,
  },
  {
    name: "Payout Level",
    selector: (row: any) => row.payoutLevel,
    sortable: true,
  },
  {
    name: "Members",
    selector: (row: any) => row.members,
    sortable: true,
  },
  {
    name: "Amount",
    selector: (row: any) => row.amount,
    sortable: true,
  },
];

export const getDailyPayoutColumns = () => [
  {
    name: "Date",
    selector: (row: any) => row.date,
    sortable: true,
  },
  {
    name: "Level Earnings",
    selector: (row: any) => row.levelEarnings,
    sortable: true,
  },
  {
    name: "Direct Benefits",
    selector: (row: any) => row.directBenefits,
    sortable: true,
  },
  {
    name: "Gross Earnings",
    selector: (row: any) => row.grossEarnings,
    sortable: true,
  },
];

export const getTransactionColumns = () => [
  {
    name: "Date",
    selector: (row: any) => row.date,
    sortable: true,
  },
  {
    name: "Description",
    selector: (row: any) => row.description,
    sortable: true,
  },
  {
    name: "Credits",
    selector: (row: any) => `₹ ${row.credits}`,
    sortable: true,
  },
  {
    name: "Debit",
    selector: (row: any) => `₹ ${row.debit}`,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row: any) => row.status,
    sortable: true,
    cell: (row: any) => (
      <div
        style={{
          backgroundColor: row.status?.toLowerCase() === "active" ? "#00d1b2" : "#ff3860",
          color: "white",
          padding: "5px 10px",
          borderRadius: "4px",
        }}
      >
        {row.status}
      </div>
    ),
  },
];

export const getWalletColumns = () => [
  {
    name: "Date",
    selector: (row: any) => row.date,
    sortable: true,
  },
  {
    name: "Transaction ID",
    selector: (row: any) => row.transactionId,
    sortable: true,
  },
  {
    name: "Type",
    selector: (row: any) => row.type,
    sortable: true,
  },
  {
    name: "Amount",
    selector: (row: any) => row.amount,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row: any) => row.status,
    sortable: true,
  },
];

export const getAdminDashboardTableColumns = () => [
  {
    name: "Date",
    selector: (row: any) => row.date,
    center: true,
  },
  {
    name: "Member",
    selector: (row: any) => row.member,
    center: true,
  },
  {
    name: "Package Amount",
    selector: (row: any) => row.packageAmount,
  },
];

export const getMembersColumns = (showEdit : boolean , setIsEdit : any) => [
  {
    name: "SNo",
    selector: (row: any) => row.sNo,
    sortable: true,
  },
  {
    name: "Member",
    selector: (row: any) => row.member,
    sortable: true,
  },
  {
    name: "Approved On",
    selector: (row: any) => row.approvedOn,
    sortable: true,
  },
  {
    name: "Password",
    selector: (row: any) => row.password,
    sortable: true,
  },
  {
    name: "Sponsor",
    selector: (row: any) => row.sponsor,
    sortable: true,
  },
  {
    name: "Package",
    selector: (row: any) => row.package,
    sortable: true,
  },
  {
    name: "MobileNo",
    selector: (row: any) => row.mobileNo,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row: any) => row.status,
    sortable: true,
    cell: (row: any) => (
      <div
        style={{
          backgroundColor: row.status === 'active' ? 'green' : row.status === 'pending' ? '#ffd700' : 'red',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '4px',
          fontSize: '14px',
        }}
      >
        {row.status}
      </div>
    ),
  },
  {
    name: 'Modify',
    omit : !showEdit,
    cell: () => (
      <IconButton onClick={()=>setIsEdit(true)} style={{ color: '#000', padding: '5px', borderRadius: '4px', cursor: 'pointer' }}>
        <Edit />
      </IconButton>
    ),
    
  }
];

export const getusedandUnUsedColumns = () => [
  {
    name: "Member Code",
    selector: (row: any) => row.memberCode,
    sortable: true,
  },
  {
    name: "Used Quantity",
    selector: (row: any) => row.usedQuantity,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row: any) => row.status,
    sortable: true,
  },
];

export const getMailBoxColumns = (handleOpenDialog : any) => [
  {
    name: 'Ticket Date',
    selector: (row: any) => row.ticketDate,
    sortable: true,
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
          fontSize: '14px',
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
  },
  {
    name: 'Subject',
    selector: (row: any) => row.subject,
    sortable: true,
  },
  {
    name: 'Status',
    selector: (row: any) => row.status,
    sortable: true,
    cell: (row: any) => (
      <div
        style={{
          backgroundColor: row.status === 'pending' ? '#ffd700' : '#569f35',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '4px',
          fontSize: '14px',
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
        size="medium"
        sx={{
          color: '#04112f',
          '&:hover': {
            backgroundColor: 'rgba(4, 17, 47, 0.04)'
          }
        }}
      >
        <VisibilityIcon color='primary' fontSize="medium"/>
      </IconButton>
    ),
    sortable: false,
  },
];

export const getAdminPageTransactionColumns = () => [
  {
    name: "Date",
    selector: (row: any) => row.date,
    sortable: true,
  },
  {
    name: "Member",
    selector: (row: any) => row.member,
    sortable: true,
  },
  {
    name: "Description",
    selector: (row: any) => row.description,
    sortable: true,
  },
  {
    name: "Type",
    selector: (row: any) => row.type,
    sortable: true,
  },
  {
    name: "EW Credit",
    selector: (row: any) => row.ewCredit,
    sortable: true,
  },
  {
    name: "EW Debit",
    selector: (row: any) => row.ewDebit,
    sortable: true,
  },
];

export const getSMSTransactionColumns = () => [
  {
    name: "Date",
    selector: (row: any) => row.date,
    sortable: true,
  },
  {
    name: "ID",
    selector: (row: any) => row.id,
    sortable: true,
  },
  {
    name: "Member",
    selector: (row: any) => row.member,
    sortable: true,
  },
  {
    name: "Message Type",
    selector: (row: any) => row.messageType,
    sortable: true,
  },
  {
    name: "Sent To",
    selector: (row: any) => row.sentTo,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row: any) => row.status,
    sortable: true,
  },
];

export const getNewsColumns = () => [
  {
    name: "From Date",
    selector: (row: any) => row.fromDate,
    sortable: true,
  },
  {
    name: "To Date",
    selector: (row: any) => row.toDate,
    sortable: true,
  },
  {
    name: "Content",
    selector: (row: any) => row.content,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row: any) => row.status,
    cell: (row: any) => (
      <span
        style={{
          backgroundColor: row.status === "active" ? "green" : "transparent",
          color: row.status === "active" ? "white" : "inherit",
          padding: "0.5rem",
          borderRadius: "4px",
        }}
      >
        {row.status.toUpperCase()}
      </span>
    ),
    sortable: true,
  },
];

export const getHolidaysColumns = () => [
  {
    name: "Date",
    selector: (row: any) => row.date,
    sortable: true,
  },
  {
    name: "Description",
    selector: (row: any) => row.description,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row: any) => row.status,
    cell: (row: any) => (
      <span
        style={{
          backgroundColor: row.status === "active" ? "green" : "transparent",
          color: row.status === "active" ? "white" : "inherit",
          padding: "0.5rem",
          borderRadius: "4px",
        }}
      >
        {row.status.toUpperCase()}
      </span>
    ),
    sortable: true,
  },
];

const TABLE_ROW_CUSTOM_STYLE = {
  style: {
    fontFamily: "Bogle-Regular",
    "&:last-child": {
      borderBottom: "1px solid rgba(0,0,0,.12)",
    },
  },
};
export const DASHBOARD_CUTSOM_STYLE = {
  headCells: {
    style: {
      fontSize: "16px",
      fontWeight: "Bogle-Bold",
      backgroundColor: "#04112fe3",
      color: "#fff",
      border: "none",
    },
  },
  rows: {
    style: {
      ...TABLE_ROW_CUSTOM_STYLE,
    },
  },
};
