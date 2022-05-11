/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { PostCard } from "../../../components";
import axios from "axios";
import { useSelector } from "react-redux";
import { Paper, CircularProgress } from "@mui/material";
import { OuterGrid } from "./styles";

function Home() {
  useEffect(() => {
    fetchPosts();
  }, []);

  const { posts } = useSelector((state) => state.posts);

  const [newFeedPosts, setNewFeedPosts] = useState([]);
  const [loading, setLoading] = useState([]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      addUsersPost(res.data.slice(0, 30));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const addUsersPost = (apiPosts) => {
    const mixedPosts = [...posts, ...apiPosts];
    setNewFeedPosts(mixedPosts);
  };

  return (
    <OuterGrid component={Paper} item className="home-container">
      {loading ? (
        <CircularProgress />
      ) : (
        newFeedPosts.map((post, index) => <PostCard post={post} key={index} />)
      )}
    </OuterGrid>
  );
}

export default Home;
