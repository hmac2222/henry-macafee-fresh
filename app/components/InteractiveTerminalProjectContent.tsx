import { FC, useState, useEffect, useCallback } from 'react';

interface Option {
  title: string;
  url: string;
  isProject: boolean;
}

const InteractiveTerminalProjectContent: FC = () => {
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
      link: "https://github.com/hmac2222",
      technologies: [
        { name: 'React', url: 'https://reactjs.org/' },
        { name: 'CSS Modules', url: 'https://github.com/css-modules/css-modules' },
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

  const [selectedOption, setSelectedOption] = useState(0);
  const [content, setContent] = useState(['projects:', '']);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'ArrowUp' && options.length > 0) {
      setSelectedOption(prevSelectedOption => (prevSelectedOption - 1 + options.length) % options.length);
    } else if (event.key === 'ArrowDown' && options.length > 0) {
      setSelectedOption(prevSelectedOption => (prevSelectedOption + 1) % options.length);
    } else if (event.key === 'Enter') {
      window.open(options[selectedOption].url, "_blank");
    }
  }, [options, selectedOption]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <>
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

    </>
  );
};

export default InteractiveTerminalProjectContent;
