import { Stack, Box} from "@mui/material";
import { Feed } from "./components/Feed";
import { Navbar } from "./components/Navbar";
import { Rightbar } from "./components/Rightbar";
import { Sidebar } from "./components/Sidebar";


function App() {
  return (
    <Box>
      
      <Navbar/>
      <Stack direction="row" spacing={1} justifyContent= "space-between">
      <Sidebar/>
      <Feed/>
      <Rightbar/>
      </Stack>
    </Box>
  );
}

export default App;
