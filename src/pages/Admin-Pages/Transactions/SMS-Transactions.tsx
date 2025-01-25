import { TransactionDataTable } from "./Transactions"

const columns = [
  {
    name: 'Date',
    selector: (row: any) => row.date,
    sortable: true,
  },
  {
    name: 'ID',
    selector: (row: any) => row.id,
    sortable: true,
  },
  {
    name: 'Member',
    selector: (row: any) => row.member,
    sortable: true,
  },
  {
    name: 'Message Type',
    selector: (row: any) => row.messageType,
    sortable: true,
  },
  {
    name: 'Sent To',
    selector: (row: any) => row.sentTo,
    sortable: true,
  },
  {
    name: 'Status',
    selector: (row: any) => row.status,
    sortable: true,
  },
];

const data = [
  {
    date: '2021-09-01',
    id: '1',
    member: 'Rahul Sharma',
    messageType: 'Promotional',
    sentTo: '1234567890',
    status: 'Sent',
  },
  {
    date: '2021-09-02',
    id: '2',
    member: 'Priya Singh',
    messageType: 'Transactional',
    sentTo: '0987654321',
    status: 'Failed',
  },
]

const SMSTransactions = () => {
  return (
    <TransactionDataTable title="SMS Transactions" summaryTitle="List of SMS Transactions" data={data} columns={columns} />
  )
}

export default SMSTransactions