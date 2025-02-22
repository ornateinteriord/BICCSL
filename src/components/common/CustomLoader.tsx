import { CircularProgress, Dialog, DialogContent } from "@mui/material";
import { FC } from "react";
import styled, { keyframes } from "styled-components";

export const LoadingComponent = () => {
  return (
    <Dialog open={true}>
      <DialogContent>
        <CircularProgress />
      </DialogContent>
    </Dialog>
  );
};

export const CircularProgressLoader = () => {
    return <CircularProgress size={"4rem"} sx={{ color: "#04112F" }} />
}
const rotate360 = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
    `;

interface Props {
    size :'small' | 'medium' | 'large';
    spinnerColor: string;
    spinnerBackgroundColor: string;
}

export const CustomLoader : FC<Props> = (props : Props) => {
    const {size, spinnerColor, spinnerBackgroundColor} = props;

    const Spinner = styled.div`
       margin:16px;
       animation: ${rotate360} 1s linear infinite;
       transform: translateZ(0);
       border-top : 2px solid ${spinnerBackgroundColor};
        border-right : 2px solid ${spinnerBackgroundColor};
        border-bottom : 2px solid ${spinnerBackgroundColor};
        border-left : 4px solid ${spinnerColor};
        background: transparent;
        width: 80px;
        height: 80px;
        border-radius: 50%;
    `;

    const SpinnerSmall = styled.div`
         margin:8px;
         animation: ${rotate360} 1s linear infinite;
         transform: translateZ(0);
         border-top : 2px solid ${spinnerBackgroundColor};
          border-right : 2px solid ${spinnerBackgroundColor};
          border-bottom : 2px solid ${spinnerBackgroundColor};
          border-left : 4px solid ${spinnerColor};
          background: transparent;
          width: 30px;
          height: 30px;
          border-radius: 50%;
     `;

  return (
    <div className="loader">
      {size === 'small' ? <SpinnerSmall /> : size === 'medium' ? <Spinner /> : <Spinner />}
    </div>
  );
};
