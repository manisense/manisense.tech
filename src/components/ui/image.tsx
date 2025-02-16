'use client';

import NextImage, { ImageProps } from 'next/image';
import { useState } from 'react';

const fallbackImage = '/images/placeholder.jpg';

export default function Image(props: ImageProps) {
  const [src, setSrc] = useState(props.src);
  const [error, setError] = useState(false);

  return (
    <NextImage
      {...props}
      src={error ? fallbackImage : src}
      onError={() => {
        setError(true);
        setSrc(fallbackImage);
      }}
      alt={props.alt || 'Image'}
    />
  );
}
