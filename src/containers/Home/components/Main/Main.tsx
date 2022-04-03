import React, {useEffect, useState} from 'react';
import {AddTweet} from './components/AddTweet/AddTweet';
import {Post} from './components/Post/Post';
import type {Post as PostType} from './types';

export const Main = () => {
  const [data, setData] = useState<PostType[]>([]);

  useEffect(() => {
    const fetchFromApi = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data: PostType[] = await response.json();
      setData(data);
    };

    fetchFromApi();
  }, []);

  return (
    <main className="col-6" style={{background: 'black'}}>
      <AddTweet />
      {data?.map(post => {
        return <Post key={post.id} {...post} />;
      })}
    </main>
  );
};
