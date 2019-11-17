import React from "react"
import PropTypes from "prop-types"
import Snackbar from "@material-ui/core/Snackbar"
import SnackbarContent from "@material-ui/core/SnackbarContent"
import IconButton from "@material-ui/core/IconButton"
import { MdClose as CloseIcon } from "react-icons/md"
import styled from "styled-components"

const colors = { success: "#43a047", error: "#d32f2f" }

const StyledSnackbarContent = styled(SnackbarContent)`
  background-color: ${props => colors[props.variant]} !important;
`

const CustomSnackbar = ({ isOpen, message, onClose, variant }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    onClose()
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={isOpen}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <StyledSnackbarContent
          aria-describedby="client-snackbar"
          message={<span id="client-snackbar">{message}</span>}
          variant={variant}
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </Snackbar>
    </div>
  )
}

CustomSnackbar.propTypes = {
  isOpen: PropTypes.bool,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["error", "success"]),
}

CustomSnackbar.defaultProps = {
  isOpen: false,
  message: "",
  onClose: () => {},
  variant: "success",
}

export default CustomSnackbar
