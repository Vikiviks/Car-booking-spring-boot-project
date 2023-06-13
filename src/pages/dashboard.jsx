import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import '../components/dashboard.css';
import {Stack} from '@mui/material';
import Typography from "@mui/material/Typography";
import Sidebar from "./jupiter";
function Dash(){
    return(
        <Sidebar>
        <div id='dash'>
            <Stack direction="row" spacing={2}>
            <Box >
        
              <CardMedia sx={{ maxWidth: 400 }}
                component="img"
                alt="green iguana"
                height="270"
                image="https://cdn.statcdn.com/Infographic/images/normal/12513.jpeg"
              />
            
            
        
          </Box>
            <Box >
            
              <CardMedia sx={{ maxWidth: 460 }}
                component="img"
                alt="green iguana"
                height="270"
                image="https://akm-img-a-in.tosshub.com/businesstoday/styles/medium_crop_simple/public/images/story/202206/ev-gfx.jpg?itok=eMpDsLt6"
              />
            
            
            
          </Box>
            <Box>
        
              <CardMedia sx={{ maxWidth: 390 }}
                component="img"
                alt="green iguana"
                height="270"
                image="https://images.cutimes.com/contrib/content/uploads/sites/413/2023/05/Auto_SAAR_March2023_fever_MAY4-e1683223696889.png"
              />
            
            
        
          </Box>
            <Box>
      
              <CardMedia sx={{ maxWidth: 450 }} 
                component="img"
                alt="green iguana"
                height="280"
                image="https://etimg.etb2bimg.com/photo/79193156.cms"
              />
            
            
         
          </Box>
          </Stack>
        </div>
        </Sidebar>
    )
}
export default Dash;