import React, { useState } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import BaseBtn from "../components/common/BaseBtn";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  FlexBtn: {
    display: "flex",
    flexDirection: "row",
  },
}));

function Index() {
  const classes = useStyles();
  const [Accept, setAccept] = useState(1);

  const TableData = {
    columns: [
      { id: "companyName", label: "Company Name" },
      { id: "clientname", label: "Client Name" },
      { id: "email", label: "Email" },
      { id: "phone", label: "Phone" },
      { id: "action", label: "Actions" },
    ],
    rows: [
      {
        id: 1,
        companyName: "monitor solution",
        clientname: "davidName",
        email: "davidwanner@gmail.com",
        phone: "+919788118368",
        action:
          Accept === 1 ? (
            <div className={classes.FlexBtn}>
              <BaseBtn
                backgroundColor="#f5feed"
                label="Accept"
                marginRight="5px"
                onClick={() => setAccept(2)}
                icon={<CheckCircleIcon />}
              />
              <BaseBtn
                backgroundColor="#fef0ef"
                label="Reject"
                border="2px solid #fef0ef"
                color="#8f2b2c"
                onClick={() => setAccept(3)}
                icon={<CancelIcon />}
              />
            </div>
          ) : (
            <div className={classes.FlexBtn}>
              {Accept === 2 ? (
                <BaseBtn
                  backgroundColor="#fff"
                  label="Accepted"
                  width="6rem"
                  borderRadius="10"
                  border="2px solid #e3dada"
                  color="#00000"
                />
              ) : (
                <BaseBtn
                  backgroundColor="#fff"
                  label="Rejected"
                  width="6rem"
                  borderRadius="10"
                  border="2px solid #e3dada"
                  color="#00000"
                />
              )}
            </div>
          ),
      },
      {
        id: 2,
        companyName: "motherboard Solution",
        clientname: "davidName",
        email: "davidwanner@gmail.com",
        phone: "+919788118368",
        action: (
          <div className={classes.FlexBtn}>
            <BaseBtn
              backgroundColor="#f5feed"
              label="Accept"
              marginRight="5px"
              icon={<CheckCircleIcon />}
            />
            <BaseBtn
              backgroundColor="#fef0ef"
              label="Reject"
              border="2px solid #fef0ef"
              color="#8f2b2c"
              icon={<CancelIcon />}
            />
          </div>
        ),
      },
      {
        id: 3,
        companyName: "Dsk Solution",
        clientname: "davidName",
        email: "davidwanner@gmail.com",
        phone: "+919788118368",
        action: (
          <div className={classes.FlexBtn}>
            <BaseBtn
              backgroundColor="#f5feed"
              label="Accept"
              marginRight="5px"
              icon={<CheckCircleIcon />}
            />
            <BaseBtn
              backgroundColor="#fef0ef"
              label="Reject"
              border="2px solid #fef0ef"
              color="#8f2b2c"
              icon={<CancelIcon />}
            />
          </div>
        ),
      },
      {
        id: 4,
        companyName: "Dsk Solution",
        clientname: "davidName",
        email: "davidwanner@gmail.com",
        phone: "+919788118368",
        action: (
          <div className={classes.FlexBtn}>
            <BaseBtn
              backgroundColor="#f5feed"
              label="Accept"
              marginRight="5px"
              icon={<CheckCircleIcon />}
            />
            <BaseBtn
              backgroundColor="#fef0ef"
              label="Reject"
              border="2px solid #fef0ef"
              color="#8f2b2c"
              icon={<CancelIcon />}
            />
          </div>
        ),
      },
      {
        id: 5,
        companyName: "Dsk Solution",
        clientname: "davidName",
        email: "davidwanner@gmail.com",
        phone: "+919788118368",
        action: (
          <div className={classes.FlexBtn}>
            <BaseBtn
              backgroundColor="#f5feed"
              label="Accept"
              marginRight="5px"
              icon={<CheckCircleIcon />}
            />
            <BaseBtn
              backgroundColor="#fef0ef"
              label="Reject"
              border="2px solid #fef0ef"
              color="#8f2b2c"
              icon={<CancelIcon />}
            />
          </div>
        ),
      },
      {
        id: 6,
        companyName: "Dsk solution",
        clientname: "davidName",
        email: "davidwanner@gmail.com",
        phone: "+919788118368",
        action: (
          <div className={classes.FlexBtn}>
            <BaseBtn
              backgroundColor="#f5feed"
              label="Accept"
              marginRight="5px"
              icon={<CheckCircleIcon />}
            />
            <BaseBtn
              backgroundColor="#fef0ef"
              label="Reject"
              border="2px solid #fef0ef"
              color="#8f2b2c"
              icon={<CancelIcon />}
            />
          </div>
        ),
      },
    ],
  };
  return TableData;
}

export default Index;
