import DataTable from 'react-data-table-component';
import { DASHBOARD_CUTSOM_STYLE, getDashboardTableColumns } from '../../utils/DataTableColumnsProvider';
import { useMemo } from 'react';

const DashboardTable = ({ data }: { data: any }) => {
    const columns = useMemo(() => getDashboardTableColumns(), []);

    return (
        <DataTable
            columns={columns}
            data={data}
            pagination
            highlightOnHover
            customStyles={DASHBOARD_CUTSOM_STYLE}
            pointerOnHover
            noDataComponent={<div>No data available</div>}
        />
    );
}

export default DashboardTable