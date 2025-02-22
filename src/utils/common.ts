import moment from "moment";

export const getFormattedDate = (date: Date | string) => {
    if (!date) return "Invalid Date"; // Handle empty/null values

    const parsedDate = moment(date, ["DD/MM/YYYY", "DD-MM-YYYY", "DD MMM , YYYY"], true);
    
    return parsedDate.isValid() ? parsedDate.format("DD MMM , YYYY") : "Invalid Date";
};
