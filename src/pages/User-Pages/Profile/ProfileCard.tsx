import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { MemberDetails } from "../../../store/store";
import { getFormattedDate } from "../../../utils/common";


interface ProfileCardProps {
  user: MemberDetails;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  return (
    <Card sx={{ maxWidth: 350, borderRadius: 3, boxShadow: 3, textAlign: "center" }}>
      {/* Profile Image */}
      <CardMedia
        component="img"
        height="140"
        image={user.profile_image}
        alt={user.Name}
        sx={{ borderRadius: "50%", width: 100, height: 100, mx: "auto", mt: 2 }}
      />

      <CardContent>
        {/* User Name */}
        <Typography variant="h5" fontWeight="bold">
          {user.Name}
        </Typography>

        {/* Member ID */}
        <Typography variant="body2" color="error">
          Member-ID: {user.Member_id}
        </Typography>

        {/* Date of Joining */}
        <Typography variant="body2" color="textSecondary">
          Date of Joining: {getFormattedDate(user.Date_of_joining)}
        </Typography>

        {/* Package Amount */}
        <Button variant="contained" color="success" sx={{ mt: 1, px: 2 }}>
          Package ₹{user.amount}
        </Button>

        {/* Referral Link */}
        <Typography variant="body2" sx={{ mt: 1 }}>
          Referral Link:{" "}
          <a href={"user.referralLink"} target="_blank" rel="noopener noreferrer">
            {"user.referralLink"}
          </a>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
