import { useEffect, useState } from 'react';

const LazyLoadingLayout = () => {
  const [srcs, setSrcs] = useState<string[]>([]);

  useEffect(() => {
    fetch(
      'https://api.unsplash.com/photos/?client_id=MjuZv4aM8wukAJ12k_atTm-PWwW4JubiTWiz1TV7Oug',
    )
      .then((response) => response.json())
      .then((datas) => {
        const urls = datas.map((data) => data.urls.full);
        setSrcs(urls);
      })
      .catch((error) => console.error('Error fetching images:', error));
  }, []);

  return (
    <>
      <h1>lazy - loading </h1>
      {srcs.map((src) => (
        <div key={src}>
          <img src={src} alt="" />
        </div>
      ))}
    </>
  );
};

export default LazyLoadingLayout;
