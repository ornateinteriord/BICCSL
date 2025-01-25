
export const getUserDashboardTableColumns = () => [
  {
    selector: (row:any) => row.title,
    style: { fontWeight: 'bold' },
  },
  {
    name: 'Direct',
    selector: (row:any) => row.direct,
    center: true,
  },
  {
    name: 'Indirect',
    selector: (row:any) => row.indirect,
    center: true,
  },
  {
    name: 'Total',
    selector: (row:any) => row.total,
    center: true,
  },
]

export const getAdminDashboardTableColumns = () => [
  {
    name: 'Date',
    selector: (row: any) => row.date,
    center: true,
  },
  {
    name: 'Member',
    selector: (row: any) => row.member,
    center: true,
  },
  {
    name: 'Package Amount',
    selector: (row: any) => row.packageAmount,
    center: true,
  },
];


const TABLE_ROW_CUSTOM_STYLE = {
  style: {
    fontFamily: "Bogle-Regular",
    '&:last-child': {
      borderBottom: '1px solid rgba(0,0,0,.12)',
    }
  }
}
export const DASHBOARD_CUTSOM_STYLE = {
  headCells: {
    style: {
      fontSize: '16px',
      fontWeight: 'Bogle-Bold',
      backgroundColor: '#04112fe3',
      color: '#fff',
      border: 'none'
    },
  },
  rows: {
    style: {
      ...TABLE_ROW_CUSTOM_STYLE
    }
  }
};




