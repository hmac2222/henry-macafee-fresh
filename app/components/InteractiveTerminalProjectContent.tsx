import { FC, useState, useEffect, useCallback } from 'react';
import ArrowKeys from './ArrowKeys';

interface InteractiveTerminalProjectContentProps {
  setStep: (step: number) => void
}

interface Option {
  title: string;
  url: string;
  isProject: boolean;
}

const InteractiveTerminalProjectContent: FC<InteractiveTerminalProjectContentProps> = ({ setStep }) => {
  const projects = [
    {
      title: "Pastvibe",
      link: "https://pastvibe.netlify.app",
      technologies: [
        { name: 'React', url: 'https://reactjs.org' },
        { name: 'Sass', url: 'https://sass-lang.com/' }
      ],
    },
    {
      title: "Wedig Studios",
      link: "https://wedigstudios.netlify.app",
      technologies: [
        { name: 'Gatsby', url: 'https://www.gatsbyjs.org/' }
      ],
    },
    {
      title: "This Website",
      link: "https://github.com/hmac2222/henry-macafee-fresh",
      technologies: [
        { name: 'Next.js', url: 'https://nextjs.org/' },
        { name: 'Material UI', url: 'https://material-ui.com/' },
      ],
    },
  ];

  // Create flat list of options
  const options: Option[] = projects.reduce((options, project) => {
    options.push({ title: project.title, url: project.link, isProject: true });
    project.technologies.forEach(tech => options.push({ title: tech.name, url: tech.url, isProject: false }));
    return options;
  }, [] as Option[]);

  options.push({ title: 'Back', url: '', isProject: true });

  const [selectedOption, setSelectedOption] = useState(0);
  const [content, setContent] = useState(['projects:', '']);

  const isMobileDevice = () => {
    const ua = navigator.userAgent;
    return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua) || /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(ua);
}

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'ArrowUp' && options.length > 0) {
      setSelectedOption(prevSelectedOption => (prevSelectedOption - 1 + options.length) % options.length);
    } else if (event.key === 'ArrowDown' && options.length > 0) {
      setSelectedOption(prevSelectedOption => (prevSelectedOption + 1) % options.length);
    } else if (event.key === 'Enter') {
        if (options[selectedOption].title === 'Back') {
          setStep(2)
        } else {
          window.open(options[selectedOption].url, "_blank");
        }
    } else if (event.key === 'Escape' || event.key === 'ArrowLeft') {
      setStep(2)
    }
      
  }, [options, selectedOption]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <span className='InteractiveTerminalContent'>
      {content.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
      <br />
      {options.map((option, index) => (
        <div key={option.title} className={`bullet-column ${option.isProject ? '' : 'tech'} ${index === selectedOption ? 'selected' : ''}`}>
          <span className="bullet-item">
            {index === selectedOption ? '•' : ''}
          </span>
          <span className="text-item">
            {option.title}
          </span>
        </div>
      ))}
            {isMobileDevice() && (
                <ArrowKeys handleKeyDown={handleKeyDown} />
            )}
    </span>
  );
};

export default InteractiveTerminalProjectContent;
