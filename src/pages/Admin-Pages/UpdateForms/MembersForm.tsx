import React, {  useEffect, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Card,
  CardContent,
  InputAdornment,
  Button,
  
 
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PaymentIcon from "@mui/icons-material/Payment";
import LockIcon from '@mui/icons-material/Lock';
import PhoneIcon from "@mui/icons-material/Phone";
import WcIcon from "@mui/icons-material/Wc";
import "./MemberForm.scss";
import CustomBreadcrumbs from "../../../context/user/CustomBreadcrumps";
import { useGetMemberDetails, useUpdateMemberbyId } from "../../../api/Admin";
import { toast } from "react-toastify";




interface MembersUpdateFormProps {
  memberId: string | null;
}


const MembersUpdateForm: React.FC<MembersUpdateFormProps> = ({ memberId }) => {

  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    address: "",
    state: "",
    city: "",
    pincode: "",
    gender: "",
    dob: "",
    email: "",
    mobileno: "",
    password: "",
    transactionpassword: "",
    accountNo: "",
    branchName: "",
    ifsc: "",
    bankName: "",
    bankAddress: "",
    pancardNo: "",
    googlePay: "",
    paytm: "",
    phonePay: "",
    nomineeName: "",
    nomineeRelation: "",
    nomineeAge: "",
    sponsorCode: "",
    position: "",
    positionName: "",
    sponsorName: "",
    positionId: "",
  });

 
  const {data:member,isError,error} = useGetMemberDetails(memberId)
 

  useEffect(() => {
    if (isError) {
      
      const err = error as Error; 
      toast.error(err.message); 
    }
  }, [isError, error]);
  
 
useEffect(()=>{
  if(member){
    setFormData({
      name:member .Name ?? "-",
      fatherName:member.Father_name ?? "-",
      address:member.address ?? "-",
      state:member.state ?? "-",
      city: member.
      city?? "-",
      pincode:member.pincode ?? "-",
      gender: member.
      gender ?? "-",
      dob: member.dob?? "-",
      email: member.
      email?? "-",
      mobileno: member.mobileno?? "-",
      password: member.password ?? "-",
      transactionpassword: member.transaction_pass ?? "-",
      accountNo: member.accountNo ?? "-",
      branchName: member.branchName ?? "-",
      ifsc: member.ifsc ?? "-",
      bankName: member.bank_details ??"-",
      bankAddress: member.bankAddress ?? "-",
      pancardNo: member.Pan_no ?? "-",
      googlePay: member. google_pay ?? "-",
      paytm: member.paytm ?? "-",
      phonePay: member.phonepe?? "-",
      nomineeName: member.
      Nominee_name ?? "-",
      nomineeRelation: member.
      Nominee_Relation ?? "-",
      nomineeAge: member.
      Nominee_age?? "-",
      sponsorCode:member.Sponsor_code?? "-",
      position: member.position?? "-",
      positionName: member. positionName ??"-",
      sponsorName: member.
      Sponsor_name ?? "-",
      positionId: member.positionId ?? "-",
      
    })
  }
},[member])
  

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
 
  

 

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      gender: e.target.value,
    }));
  };

  const updateMember = useUpdateMemberbyId()

  const handleSubmit = () =>{
    updateMember.mutate({memberId,data:formData})
  }

  return (
    <Card
      sx={{
        margin: "2rem",
        mt: 10,
        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
      }}
    >
      <CardContent>
      <div>
        <CustomBreadcrumbs/>
      </div>
        <Accordion
          defaultExpanded
          sx={{ boxShadow: "none", marginBottom: "20px" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            sx={{
              backgroundColor: "#04112f",
              color: "#fff",
            }}
          >
            Basic Details
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "2rem" }}>
            <div className="basic-details-accordion">
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  width: "100%",
                }}
              >
                <TextField
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  placeholder="Enter your name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon sx={{ color: "#04112f" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="FatherName"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  placeholder="Enter your father name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon sx={{ color: "#04112f" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  fullWidth
                  multiline
                  minRows={2}
                  variant="outlined"
                  placeholder="Enter your address"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon sx={{ color: "#04112f" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="State"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  placeholder="Enter your State"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon sx={{ color: "#04112f" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  placeholder="Enter your city"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon sx={{ color: "#04112f" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  placeholder="Enter your pincode"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon sx={{ color: "#04112f" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </form>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  width: "100%",
                }}
              >
                <FormControl>
                  <FormLabel sx={{ color: "#04112f" }}>
                    <WcIcon sx={{ color: "#04112f" }} />
                    Gender
                  </FormLabel>
                  <RadioGroup
                    row
                    name="gender"
                    value={formData.gender}
                    onChange={handleRadioChange}
                  >
                    <FormControlLabel
                      value="Male"
                      control={
                        <Radio sx={{ "&.Mui-checked": { color: "#04112f" } }} />
                      }
                      label="Male"
                    />
                    <FormControlLabel
                      value="Female"
                      control={
                        <Radio sx={{ "&.Mui-checked": { color: "#04112f" } }} />
                      }
                      label="Female"
                    />
                  </RadioGroup>
                </FormControl>
                <TextField
                  label="Date Of Birth"
                  name="dob"
                  type="email"
                  value={formData.dob}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  placeholder="Date Of Birth"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarTodayIcon sx={{ color: "#04112f" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  placeholder="Enter your email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon sx={{ color: "#04112f" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Mobile No"
                  name="mobileno"
                  type="tel"
                  value={formData.mobileno}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  placeholder="Enter your mobile number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon sx={{ color: "#04112f" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Password"
                  name="password"
                  type="tel"
                  value={formData.password}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  placeholder="Enter your mobile number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon sx={{ color: "#04112f" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Transaction Password"
                  name="transactionpassword"
                  type="tel"
                  value={formData.transactionpassword}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  placeholder="Enter your mobile number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon sx={{ color: "#04112f" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </form>
            </div>
          </AccordionDetails>
        </Accordion>

        {/* Bank details ----------------------------------- */}

        <Accordion
          defaultExpanded
          sx={{ boxShadow: "none", marginBottom: "20px" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            sx={{
              backgroundColor: "#04112f",
              color: "#fff",
            }}
          >
            Bank Details
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "2rem" }}>
            <div className="basic-details-accordion">
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  width: "100%",
                }}
              >
                <TextField
                  label="Account No"
                  name="accountNo"
                  value={formData.accountNo}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  placeholder="Account Number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircleIcon sx={{ color: "#04112f" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Branch Name"
                  name="branchName"
                  value={formData.branchName}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  placeholder="Branch Name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountBalanceIcon sx={{ color: "#04112f" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="IFSC Code"
                  name="ifsc"
                  value={formData.ifsc}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  placeholder="IFSC Code"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountBalanceIcon sx={{ color: "#04112f" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Bank Name"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  placeholder="Bank Name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountBalanceIcon sx={{ color: "#04112f" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Bank Address"
                  name="bankAddress"
                  multiline
                  minRows={2}
                  value={formData.bankAddress}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  placeholder="Bank Address"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon sx={{ color: "#04112f" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Pancard Number"
                  name="pancardNo"
                  value={formData.pancardNo}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  placeholder="Pancard Number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CreditCardIcon sx={{ color: "#04112f" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </form>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  width: "100%",
                }}
              >
                <TextField
                  label="Google Pay"
                  name="googlePay"
                  value={formData.googlePay}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  placeholder="Google Pay"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PaymentIcon sx={{ color: "#04112f" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Paytm"
                  name="paytm"
                  value={formData.paytm}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  placeholder="Paytm"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PaymentIcon sx={{ color: "#04112f" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Phone Pay"
                  name="phonePay"
                  value={formData.phonePay}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  placeholder="Phone Pay"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PaymentIcon sx={{ color: "#04112f" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </form>
            </div>
          </AccordionDetails>
        </Accordion>

        {/* Nominee details----------------------------------------- */}

        <Accordion
          defaultExpanded
          sx={{ boxShadow: "none", marginBottom: "20px" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            sx={{
              backgroundColor: "#04112f",
              color: "#fff",
            }}
          >
            Nominee Details
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "2rem" }}>
            <div className="basic-details-accordion">
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  width: "100%",
                }}
              >
                <TextField
                  label="Nominee Name"
                  name="nomineeName"
                  value={formData.nomineeName}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  placeholder="Nominee Name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon sx={{ color: "#04112f" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Nominee Relation"
                  name="nomineeRelation"
                  value={formData.nomineeRelation}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  placeholder="Nominee Relation"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon sx={{ color: "#04112f" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </form>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  width: "100%",
                }}
              >
                <TextField
                  label="Nominee Age"
                  name="nomineeAge"
                  value={formData.nomineeAge}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  placeholder="Nominee Age"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon sx={{ color: "#04112f" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </form>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          defaultExpanded
          sx={{ boxShadow: "none", marginBottom: "20px" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            sx={{
              backgroundColor: "#04112f",
              color: "#fff",
            }}
          >
            Joining Details
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "2rem" }}>
            <div className="basic-details-accordion">
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  width: "100%",
                }}
              >
                <TextField
                  label="Sponsor Code"
                  name="sponsorCode"
                  value={formData.sponsorCode}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  placeholder="Sponsor Code"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon sx={{ color: "#04112f" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  placeholder="Position"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon sx={{ color: "#04112f" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Position Name"
                  name="positionName"
                  value={formData.positionName}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  placeholder="Position Name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon  sx={{ color: "#04112f" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </form>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  width: "100%",
                }}
              >
                <TextField
                  label="Sponsor Name"
                  name="sponsorName"
                  type="email"
                  value={formData.sponsorName}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  placeholder="Sponsor Name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon  sx={{ color: "#04112f" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Position Id"
                  name="positionId"
                  value={formData.positionId}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  placeholder="Position Id"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon  sx={{ color: "#04112f" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </form>
            </div>
          </AccordionDetails>
        </Accordion>
        <div className="member-form-btn">
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            backgroundColor: "#04112f",
            alignSelf: "flex-end",
            "&:hover": { backgroundColor: "#0a1f4d" },
          }}
        >
          Update
        </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MembersUpdateForm;
