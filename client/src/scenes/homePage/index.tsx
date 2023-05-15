import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from '../navbar/index.tsx';
import UserWidget from '../widgets/UserWidget.tsx';
import MyPostWidget from "../widgets/MyPostWidget.tsx";
import PostsWidget from "../widgets/PostsWidget.tsx";
import AdvertWidget from "../widgets/AdvertWidget.tsx";
import FriendListWidget from "../widgets/FriendListWidget.tsx";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
          <Box m="2rem 0" />
          <FriendListWidget userId={_id} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <AdvertWidget />
            <Box m="2rem 0" />
            
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
