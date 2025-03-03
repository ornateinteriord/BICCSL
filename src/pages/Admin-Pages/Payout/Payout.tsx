import {
  Box,
  Card,
  CardContent,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";
import "./Payout.scss";
import Requests from "./insidePayout/Request";
import Proccessed from "./insidePayout/Proccessed";
import Payables from "./insidePayout/Payble";


const Payout = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_e: any, newValue: any) => {
    setValue(newValue);
  };
  const renderContent = () => {
    switch (value) {
      case 0:
        return <Requests/>;
      case 1:
        return <Proccessed/>;
      case 2:
        return <Payables/>;
    }
  };
  return (
    <>
      <Typography variant="h4" sx={{ margin: "2rem", mt: 10 }}>
        Support Tickets
      </Typography>
      <Card sx={{ margin: "2rem", mt: 2 }}>
        <CardContent>
          <Box className="tabs-list">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              className="tabs"
            >
              <Tab className="tab-list-1" label="Requests" />
              <Tab className="tab-list-2" label="Proccessed" />
              <Tab className="tab-list-3" label="Payables" />
            </Tabs>
            <Box className="tab-content">{renderContent()}</Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default Payout;

