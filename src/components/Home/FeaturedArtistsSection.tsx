import React from 'react';
import Image from 'next/image';
import styles from './HomeSections.module.css'; // General section styles
import localStyles from './FeaturedArtistsSection.module.css'; // Specific styles

// Placeholder data for artists
const artists = [
  {
    id: 1,
    name: 'CryptoPioneer',
    avatar: '/user/user.png', // Placeholder avatar, reuse existing
    sampleNft: '/collections/mutant-ape/1.png', // Placeholder NFT
    description: 'Visionary artist exploring the digital frontier.',
  },
  {
    id: 2,
    name: 'PixelQueen',
    avatar: '/user/user.png',
    sampleNft: '/collections/themonalana/1.png',
    description: 'Creating vibrant worlds one pixel at a time.',
  },
  {
    id: 3,
    name: 'NFTitan',
    avatar: '/user/user.png',
    sampleNft: '/collections/amazonia/1.png',
    description: 'Known for monumental and impactful NFT pieces.',
  },
  {
    id: 4,
    name: 'ArtGenius',
    avatar: '/user/user.png',
    sampleNft: '/collections/producersnft/1.png',
    description: 'Pushing the boundaries of generative art.',
  },
];

const FeaturedArtistsSection = () => {
  return (
    <section id="featured-artists" className={`${styles.section} ${localStyles.featuredArtistsSection}`}>
      <h2>Top Sellers & Featured Artists</h2>
      <div className={localStyles.artistsGrid}>
        {artists.map((artist) => (
          <div key={artist.id} className={localStyles.artistCard}>
            <div className={localStyles.artistAvatar}>
              <Image src={artist.avatar} alt={artist.name} width={80} height={80} style={{ borderRadius: '50%' }} />
            </div>
            <h3 className={localStyles.artistName}>{artist.name}</h3>
            <p className={localStyles.artistDescription}>{artist.description}</p>
            <div className={localStyles.sampleNftImage}>
              <Image src={artist.sampleNft} alt={`${artist.name}'s sample NFT`} width={200} height={200} style={{ borderRadius: '10px' }} />
            </div>
            {/* Add a link to artist's profile/collection if this were a real app */}
            {/* <Link href={`/artist/${artist.id}`}>View Profile</Link> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedArtistsSection;
