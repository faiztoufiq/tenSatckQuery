import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../backend/post";
import { commonText } from "../common/constant";
import {
  Container,
  Loading,
  Error,
  Title,
  List,
  ListItem,
  PostTitle,
  PostBody,
} from "./posts.style";

export default function TenStackQuery() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return <Loading>{commonText.loading}</Loading>;
  }
  if (error) {
    return (
      <Error>
        {commonText.ErrorFetchingPosts} {error.message}
      </Error>
    );
  }

  return (
    <Container>
      <Title>{commonText.post}</Title>
      <List>
        {data.map((post: any) => (
          <ListItem key={post.id}>
            <PostTitle>
              {post.title}
              <PostBody>{post.body}</PostBody>
            </PostTitle>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
