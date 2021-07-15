import { Button, makeStyles } from "@material-ui/core";

function BaseBtn(props: any) {
  const {
    onClick,
    parentclass,
    hoverColor = "#f5feed",
    width = "7rem",
    marginTop = "0rem",
    marginRight = "0rem",
    borderRadius = 25,
    backgroundColor = "#3aa76d",
    label,
    color = "#000000",
    type = "buttom",
    fontWeight = "bold",
    border = "2px solid #c4ff8f",
    icon,
  } = props;

  const useStyles = makeStyles({
    Button: {
      borderRadius,
      marginTop,
      marginRight,
      backgroundColor,
      width,
      border,
      fontWeight,
      color,
      "&:hover": {
        backgroundColor: hoverColor,
      },
    },
  });

  const classes = useStyles();

  return (
    <div className={parentclass}>
      <Button
        startIcon={icon}
        type={type}
        size="small"
        onClick={onClick}
        className={classes.Button}
      >
        {label}
      </Button>
    </div>
  );
}

export default BaseBtn;
