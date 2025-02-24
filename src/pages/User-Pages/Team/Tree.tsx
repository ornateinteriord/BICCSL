import {
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  AccordionSummary,
  AccordionDetails,
  Accordion,
  ClickAwayListener,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import UserContext from "../../../context/user/userContext";
import { useGetSponsers } from "../../../api/Memeber";
import { toast } from "react-toastify";
import { LoadingComponent } from "../../../App";
import DataTable from "react-data-table-component";
import "./Tree.scss";

interface Sponser {
  profile_image: string;
  Name: string;
  Member_id: string;
  status: string;
  Date_of_joining: string;
}
const Tree = () => {
  const { user } = useContext(UserContext);
  const [hoveredSponsor, setHoveredSponsor] = useState<{
    Name: string;
    status:string;
    Date_of_joining:string;
  } | null>(null);

  const [userDetails, setUserDetails] = useState({
    profile_image: "",
    Name: "",
    Member_id: "",
    status: "",
    Date_of_joining: "",
  });

  const { data: sponsers, isLoading, isError, error } = useGetSponsers();
 

  useEffect(() => {
    if (isError) toast.error(error.message);
  }, [isError, error]);

  useEffect(() => {
    if (user) {
      setUserDetails({
        profile_image: user.profile_image || "",
        Name: user.Name || "",
        Member_id: user.Member_id || "",
        status:user.status || "",
        Date_of_joining:user.Date_of_joining|| "",
      });
    }
  }, [user]);

  const sponsored = Array.isArray(sponsers)
    ? sponsers.map((sponser: Sponser) => ({
        profile_image: sponser.profile_image,
        Name: sponser.Name,
        Member_id: sponser.Member_id,
        status:sponser.status,
        Date_of_joining:sponser.Date_of_joining,
      }))
    : [];

  const columns = [
    { selector: (row: any) => row.field, sortable: true },
    { selector: (row: any) => row.value },
  ];
  const data = hoveredSponsor? [
    { field: "Member Name", value: hoveredSponsor.Name },
    { field: "Status", value: hoveredSponsor.status },
    { field: "Direct", value: "0/0" },
    { field: "Team", value: "0/0" },
    { field: "Activation Date", value: hoveredSponsor.Date_of_joining },
    { field: "Club", value: "2K" },
    { field: "Earnings", value: "Rs. 0" },
  ]:[]

  // Main user profile component
  const UserProfile = ({ userDetails }: { userDetails: any }) => (
    <Box className="tree-user-profile"  onMouseEnter={() => setHoveredSponsor(userDetails)}>
      <Avatar
        className="tree-user-avatar"
        src={userDetails?.profile_image || ""}
      >
        {!userDetails?.profile_image &&
          userDetails.Name.charAt(0).toUpperCase()}
      </Avatar>
      <Typography variant="h6" fontWeight="bold">
        {userDetails.Name}
      </Typography>
      <Typography variant="caption" color="textSecondary">
        {userDetails.Member_id}
      </Typography>
    </Box>
  );

  // Sponsored user component
  const SponsoredProfile = ({ user }: { user: any }) => (
    <Box
      className="sponsor-container"
      onMouseEnter={() => setHoveredSponsor(user)}
    >
      <>
        <Avatar className="sponsor-avatar" src={user.profile_image || ""}>
          {!user.profile_image && user.Name.charAt(0).toUpperCase()}
        </Avatar>
        <Typography variant="body2" fontWeight="bold">
          {user.Name}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          {user.Member_id}
        </Typography>
      </>
    </Box>
  );



  return (
    <Card sx={{ margin: "2rem", mt: 10 }}>
      <CardContent>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            className="accordion-summary"
          >
            Tree
          </AccordionSummary>
          <AccordionDetails>
            <Box className="tree-container">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap:4
                }}
              >
                <UserProfile userDetails={userDetails} />
              

                {sponsored.length > 0 && (
                  <Box 
                  className="SponsoredProfile"
                    
                  >
                    {sponsored.map((user: any) => (
                      <SponsoredProfile key={user.Member_id} user={user} />
                    ))}
                  </Box>
                )}
              </Box>
              {hoveredSponsor && (
                <ClickAwayListener onClickAway={() => setHoveredSponsor(null)}>
                  <Box  className="sponsor-popup-container">
                  <Box
                    className="sponsor-popup"
              
                  >
                    <Typography
                      variant="h6"
                      sx={{ textAlign: "center", mb: 0 }}
                    >
                      {hoveredSponsor.Name}'s Details
                    </Typography>
                    <DataTable
                      columns={columns}
                      data={data}
                      dense 
                      customStyles={{
                        cells: {
                          style: {
                            padding: "4px", 
                          },
                        },
                      }}
                    />
                  </Box>
                  </Box>
                </ClickAwayListener>
              )}
            </Box>
          </AccordionDetails>
        </Accordion>
      </CardContent>
      {isLoading && <LoadingComponent />}
    </Card>
  );
};

export default Tree;
