'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'AI Research Lead',
    bio: 'PhD in Machine Learning with 10+ years of industry experience.',
    image: '/team/sarah.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/sarahchen',
      twitter: 'https://twitter.com/sarahchen'
    }
  },
  {
    name: 'Mike Johnson',
    role: 'CTO',
    bio: 'Former Google engineer with expertise in scalable architectures.',
    image: '/team/mike.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/mikejohnson',
      github: 'https://github.com/mikej'
    }
  },
  {
    name: 'Lisa Wang',
    role: 'Design Director',
    bio: 'Award-winning UX designer with focus on user-centric design.',
    image: '/team/lisa.jpg',
    social: {
      dribbble: 'https://dribbble.com/lisawang',
      linkedin: 'https://linkedin.com/in/lisawang'
    }
  },
  {
    name: 'David Kim',
    role: 'Mobile Development Lead',
    bio: '8+ years of native and cross-platform mobile development.',
    image: '/team/david.jpg',
    social: {
      github: 'https://github.com/davidkim',
      linkedin: 'https://linkedin.com/in/davidkim'
    }
  }
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate experts dedicated to bringing your digital vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-black rounded-xl p-6 shadow-lg"
            >
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-3">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                {Object.entries(member.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Image
                      src={`/icons/${platform}.svg`}
                      alt={platform}
                      width={20}
                      height={20}
                      className="dark:invert"
                    />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
