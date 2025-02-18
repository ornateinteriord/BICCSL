import React, {  useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Button,
} from "@mui/material";

import "./MemberForm.scss";
import CustomBreadcrumbs from "../../../context/user/CustomBreadcrumps";
import { useGetMemberDetails, useUpdateMemberbyId } from "../../../api/Admin";
import { toast } from "react-toastify";
import { BasicDetails } from "./pages/BasicDetails";
import { BankDetails } from "./pages/BankDetails";
import { NomineeDetails } from "./pages/NomineeDetails";
import {JoiningDetails} from "./pages/JoiningDetails"
import { LoadingComponent } from "../../../App";




interface MembersUpdateFormProps {
  memberId: string | null;
}


const MembersUpdateForm: React.FC<MembersUpdateFormProps> = ({ memberId }) => {

  const [formData, setFormData] = useState({
    Name: "",
    Father_name: "",
    address: "",
    state: "",
    city: "",
    pincode: "",
    gender: "",
    dob: "",
    email: "",
    mobileno: "",
    password: "",
    transaction_pass: "",
    accountNo: "",
    branchName: "",
    ifsc: "",
    bank_details : "",
    bankAddress: "",
    Pan_no : "",
    google_pay: "",
    paytm: "",
    phonepe: "",
    Nominee_name : "",
    Nominee_Relation: "",
    Nominee_age: "",
    Sponsor_code: "",
    position: "",
    positionName: "",
    Sponsor_name: "",
    positionId: "",
  });

 
  const {data:member,isLoading,isError,error} = useGetMemberDetails(memberId)
 

  useEffect(() => {
    if (isError) {
      
      const err = error as Error; 
      toast.error(err.message); 
    }
  }, [isError, error]);
  
 
useEffect(()=>{
  if(member){
    setFormData({
      Name:member.Name ?? "",
      Father_name:member.Father_name ?? "",
      address:member.address ?? "",
      state:member.state ?? "",
      city: member.city?? "",
      pincode:member.pincode ?? "",
      gender: member.gender ?? "",
      dob: member.dob?? "",
      email: member.email?? "",
      mobileno: member.mobileno?? "",
      password: member.password ?? "",
      transaction_pass: member.transaction_pass ?? "",
      accountNo: member.accountNo ?? "",
      branchName: member.branchName ?? "",
      ifsc: member.ifsc ?? "",
      bank_details : member.bank_details ??"",
      bankAddress: member.bankAddress ?? "",
      Pan_no : member.Pan_no ?? "",
      google_pay: member. google_pay ?? "",
      paytm: member.paytm ?? "",
      phonepe: member.phonepe?? "",
      Nominee_name : member.Nominee_name ?? "",
      Nominee_Relation: member.Nominee_Relation ?? " ",
      Nominee_age: member.Nominee_age?? "-",
      Sponsor_code:member.Sponsor_code?? "-",
      position: member.position?? "-",
      positionName: member. positionName ??"-",
      Sponsor_name: member.Sponsor_name ?? "-",
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
       {/* BasicDetails----------------------------------------- */}

        <BasicDetails formData={formData} handleInputChange={handleInputChange} handleRadioChange={handleRadioChange} />

        {/* Bank details ----------------------------------- */}

       <BankDetails formData={formData} handleInputChange={handleInputChange}/>

        {/* Nominee details----------------------------------------- */}

       <NomineeDetails formData={formData} handleInputChange={handleInputChange}/>

          {/* joining details----------------------------------------- */}
        <JoiningDetails formData={formData} handleInputChange={handleInputChange}/>

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
      {(isLoading || updateMember.isPending) && <LoadingComponent/>}
    </Card>
  );
};

export default MembersUpdateForm;
