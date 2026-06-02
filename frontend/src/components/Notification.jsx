
import { Alert } from "@mui/material"


const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <Alert style={{marginTop:10, marginBottom:10}} severity={message}>
      {message}
    </Alert>
    
  )   
}

export default Notification
