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
import { BasicDetails } from "./BasicDetails";
import { BankDetails } from "./BankDetails";
import { NomineeDetails } from "./NomineeDetails";
import {JoiningDetails} from "./JoiningDetails"




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
    </Card>
  );
};

export default MembersUpdateForm;
