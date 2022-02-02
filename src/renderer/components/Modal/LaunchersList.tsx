import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import amazonLogo from '../../../../assets/logos/amazon.svg';
import blizzardLogo from '../../../../assets/logos/blizzard.svg';
import epicLogo from '../../../../assets/logos/epic.svg';
import gogLogo from '../../../../assets/logos/gog.svg';
import originLogo from '../../../../assets/logos/origin.svg';
import riotLogo from '../../../../assets/logos/riot.svg';
import steamLogo from '../../../../assets/logos/steam.svg';
import ubisoftLogo from '../../../../assets/logos/ubisoft.svg';

const logos = [
  { launcher: 'Amazon', logo: amazonLogo },
  { launcher: 'Blizzard', logo: blizzardLogo },
  { launcher: 'Epic Games', logo: epicLogo },
  { launcher: 'GOG', logo: gogLogo },
  { launcher: 'Origin', logo: originLogo },
  { launcher: 'Riot games', logo: riotLogo },
  { launcher: 'Steam', logo: steamLogo },
  { launcher: 'Ubisoft', logo: ubisoftLogo },
];

interface LogoCardPropsTypes {
  logo: string;
  launcher: string;
}

function LogoCard({ logo, launcher }: LogoCardPropsTypes) {
  const [disabled, setDisabled] = useState(false);
  return (
    <motion.div
      animate={
        disabled ? { scale: 0.75, opacity: 0.25 } : { scale: 1, opacity: 1 }
      }
      onClick={() => setDisabled(!disabled)}
      className="flex flex-col mx-2"
    >
      <div className="h-20 w-20 rounded-xl bg-zinc-100 flex items-center justify-center mb-1">
        <img className="h-16 w-16 object-contain" src={logo} alt={launcher} />
      </div>
      <p className="break-normal w-16 h-12">{launcher}</p>
    </motion.div>
  );
}

export default function LaunchersList() {
  return (
    <motion.div
      initial={{ opacity: 0, display: 'none' }}
      animate={{ display: 'flex', opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="flex justify-center items-center h-full"
    >
      <div className="flex flex-row items-center justify-center h-min">
        {logos.map((el, i) => {
          return <LogoCard key={i} logo={el.logo} launcher={el.launcher} />;
        })}
      </div>
    </motion.div>
  );
}
