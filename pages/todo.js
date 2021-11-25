import { useAuth } from "libs/hooks/useAuth";
import { AppBar } from "components/appbar";
import {Title} from "ui/title"


function ToDoPage(props) {
  const user = useAuth()
  
  if (!user) {
    return(
      <>
      <AppBar/>
      <Title>You&apos;re Not Welcome Go Away!</Title>
      </>
    )
  }

  return (
    <>
    <AppBar/>
    <Title>Render The Users To LIST</Title>
    </>
  )
}

export default ToDoPage;
