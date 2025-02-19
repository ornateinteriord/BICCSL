import React, { useEffect, useState } from "react";
import { Card, CardContent, Button } from "@mui/material";
import "./MemberForm.scss";
import CustomBreadcrumbs from "../../../context/user/CustomBreadcrumps";
import { useGetMemberDetails, useUpdateMemberbyId } from "../../../api/Admin";
import { toast } from "react-toastify";
import { BasicDetails } from "./pages/BasicDetails";
import { BankDetails } from "./pages/BankDetails";
import { NomineeDetails } from "./pages/NomineeDetails";
import { JoiningDetails } from "./pages/JoiningDetails";
import { LoadingComponent } from "../../../App";

interface MembersUpdateFormProps {
  memberId: string | null;
}

const MembersUpdateForm: React.FC<MembersUpdateFormProps> = ({ memberId }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const {
    data: member,
    isLoading,
    isError,
    error,
  } = useGetMemberDetails(memberId);
  useEffect(() => {
    if (isError) {
      const err = error as Error;
      toast.error(err.message);
    }
  }, [isError, error]);

  useEffect(() => {
    if (member) {
      setFormData((prev) => ({ ...prev, ...member }));
    }
  }, [member]);

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

  const updateMember = useUpdateMemberbyId();

  const handleSubmit = () => {
    updateMember.mutate({ memberId, data: formData });
  };

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
          <CustomBreadcrumbs />
        </div>
        {/* BasicDetails----------------------------------------- */}

        <BasicDetails
          formData={formData}
          handleInputChange={handleInputChange}
          handleRadioChange={handleRadioChange}
        />

        {/* Bank details ----------------------------------- */}

        <BankDetails
          formData={formData}
          handleInputChange={handleInputChange}
        />

        {/* Nominee details----------------------------------------- */}

        <NomineeDetails
          formData={formData}
          handleInputChange={handleInputChange}
        />

        {/* joining details----------------------------------------- */}
        <JoiningDetails
          formData={formData}
          handleInputChange={handleInputChange}
        />

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
      {(isLoading || updateMember.isPending) && <LoadingComponent />}
    </Card>
  );
};

export default MembersUpdateForm;
