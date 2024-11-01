
export const fetchPosts = async () => {
  const ApiPosts = process.env.REACT_APP_FAKE_API;
  if(!ApiPosts){
    throw new Error('API endpoint is not defined');
  }
    const response = await fetch(ApiPosts);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  