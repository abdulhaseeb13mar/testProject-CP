import {
  IconButton,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { OuterContainer, CardStyled } from "./styles";

function PostCard({ post }) {
  return (
    <OuterContainer>
      <CardStyled elevation={4}>
        <CardContent>
          <Typography gutterBottom variant="h5" fontWeight="bold">
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.body}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </CardStyled>
    </OuterContainer>
  );
}

export default PostCard;
